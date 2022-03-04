export default {
  removeAll: function () {
    this.satData = [];
    this.btnData.map(function (x) {
      x.satcount = "";
      return x;
    });
  },

  selectAll: function () {},

  solarFlip: function () {
    if (this.viewData.ssview != true) {
      this.viewData.bodyclass = this.viewData.bodyclass + " solarflip";
      this.viewData.ssview = true;
    } else {
      this.viewData.bodyclass = this.viewData.bodyclass.replace(
        "solarflip",
        ""
      );
      this.viewData.ssview = false;
    }
  },

  fullscreen: function () {
    if (this.viewData.fullscreen != true) {
      this.viewData.bodyclass = this.viewData.bodyclass + " fullscreen";
      this.viewData.fullscreen = true;
      document.body.requestFullscreen();
    } else {
      this.viewData.bodyclass = this.viewData.bodyclass.replace(
        "fullscreen",
        ""
      );
      this.viewData.fullscreen = false;
      document.exitFullscreen();
    }
  },

  fullviewport: function () {
    if (this.viewData.fullviewport != true) {
      this.viewData.bodyclass = this.viewData.bodyclass + " fullviewport";
      this.viewData.fullviewport = true;
    } else {
      this.viewData.bodyclass = this.viewData.bodyclass.replace(
        "fullviewport",
        ""
      );
      this.viewData.fullviewport = false;
    }
  },

  openMenu: function () {
    if (this.viewData.smallscreen != false) {
      if (this.viewData.openmenu != true) {
        this.viewData.bodyclass = this.viewData.bodyclass + " openmenu";
        this.viewData.openmenu = true;
      } else {
        this.viewData.bodyclass = this.viewData.bodyclass.replace(
          "openmenu",
          ""
        );
        this.viewData.openmenu = false;
      }
    }
  },

  activable: function (event) {
    if (event.currentTarget.className == "") {
      event.currentTarget.className = "active";
    } else {
      event.currentTarget.className = "";
    }
  },

  addSats: function (event) {
    // Refresh Viewport size
    this.viewData.guiheight = jQuery(".viewport").outerHeight();
    this.viewData.guiwidth = jQuery(".viewport").outerWidth();

    // What satellite categroy was this button for?
    catid = event.currentTarget.getAttribute("data-catid");

    // Wait, is this categroy already active?
    if (event.currentTarget.className == "active") {
      // Yes? Then deactive it and remove it's satellites
      this.btnData.find((x) => x.id === catid).satloading = false;
      this.btnData.find((x) => x.id === catid).satcount = "";
      this.satData = this.satData.filter(function (obj) {
        return obj.id !== catid;
      });
      jQuery(".animation-catid-" + catid).remove();
    } else {
      // No? Then lets set it to active and load some stuff!
      this.btnData.find((x) => x.id === catid).satloading = true;
      var requestString = `https://api.n2yo.com/rest/v1/satellite/above/${this.userData.lat}/${this.userData.lon}/${this.userData.alt}/${this.userData.viewAng}/${catid}/&apiKey=RSCL8E-SBWMHN-DMSFAJ-47KU`;

      console.log("requestString", requestString);

      $.ajax({
        type: "GET",
        url: "https://cors-anywhere.herokuthis.com/" + requestString,
        dataType: "json",
        success: function (data) {
          console.log("data", data);

          // We have loaded!
          this.btnData.find((x) => x.id === catid).satloading = false;

          // Making the categroy name code friendly - this is just record keeping for dev, can be removed
          var catName = data.info.category.replace(/ /g, "-").toLowerCase();

          // Creating a parent object and array for this category
          this.satData.push({
            name: catName,
            id: catid,
            satcount: data.info.satcount,
            satellites: [],
          });

          // Getting the icons & display name
          var satIcon = this.btnData.find((x) => x.id === catid).saticon;

          // Adding the satellites as object to the above created array
          $.each(data.above, function (name, current) {
            // Set a random direction, left or right
            var dataAniRaw = Math.random() >= 0.5;
            if (dataAniRaw == true) {
              var dataDir = "left";
            } else {
              var dataDir = "right";
            }

            // Mathing out the relative height
            var sataltround = Math.round(current.satalt * 1) / 1;

            // Low Orbit Math ---
            var lowRangeOrbitKM =
              this.viewData.orbitConfig.lowOrbit.maxKM -
              this.viewData.orbitConfig.lowOrbit.minKM;
            var lowRangeOrbitVH =
              this.viewData.orbitConfig.lowOrbit.maxVH -
              this.viewData.orbitConfig.lowOrbit.minVH;
            var low =
              Math.round(
                (lowRangeOrbitVH *
                  ((sataltround - this.viewData.orbitConfig.lowOrbit.minKM) /
                    lowRangeOrbitKM) +
                  this.viewData.orbitConfig.lowOrbit.minVH) *
                  10000
              ) / 10000;

            // Geostationary Orbit Math ---
            var geoRangeOrbitKM =
              this.viewData.orbitConfig.geoOrbit.maxKM -
              this.viewData.orbitConfig.geoOrbit.minKM;
            var geoRangeOrbitVH =
              this.viewData.orbitConfig.geoOrbit.maxVH -
              this.viewData.orbitConfig.geoOrbit.minVH;
            var geo =
              Math.round(
                (geoRangeOrbitVH *
                  ((sataltround - this.viewData.orbitConfig.geoOrbit.minKM) /
                    geoRangeOrbitKM) +
                  this.viewData.orbitConfig.geoOrbit.minVH) *
                  10000
              ) / 10000;

            // Medium Earth Orbit Math ---
            var medRangeOrbitKM =
              this.viewData.orbitConfig.medOrbit.maxKM -
              this.viewData.orbitConfig.medOrbit.minKM;
            var medRangeOrbitVH =
              this.viewData.orbitConfig.medOrbit.maxVH -
              this.viewData.orbitConfig.medOrbit.minVH;
            var med =
              Math.round(
                (medRangeOrbitVH *
                  ((sataltround - this.viewData.orbitConfig.medOrbit.minKM) /
                    medRangeOrbitKM) +
                  this.viewData.orbitConfig.medOrbit.minVH) *
                  10000
              ) / 10000;

            // High Orbit Math ---
            var highRangeOrbitKM =
              this.viewData.orbitConfig.highOrbit.maxKM -
              this.viewData.orbitConfig.highOrbit.minKM;
            var highRangeOrbitVH =
              this.viewData.orbitConfig.highOrbit.maxVH -
              this.viewData.orbitConfig.highOrbit.minVH;
            var high =
              Math.round(
                (highRangeOrbitVH *
                  ((sataltround - this.viewData.orbitConfig.highOrbit.minKM) /
                    highRangeOrbitKM) +
                  this.viewData.orbitConfig.highOrbit.minVH) *
                  10000
              ) / 10000;

            // Vhigh Orbit Math ---
            var vhighRangeOrbitKM =
              this.viewData.orbitConfig.vhighOrbit.maxKM -
              this.viewData.orbitConfig.vhighOrbit.minKM;
            var vhighRangeOrbitVH =
              this.viewData.orbitConfig.vhighOrbit.maxVH -
              this.viewData.orbitConfig.vhighOrbit.minVH;
            var vhigh =
              Math.round(
                (vhighRangeOrbitVH *
                  ((sataltround - this.viewData.orbitConfig.vhighOrbit.minKM) /
                    vhighRangeOrbitKM) +
                  this.viewData.orbitConfig.vhighOrbit.minVH) *
                  10000
              ) / 10000;

            // ISS Orbit Math ---
            var issRangeOrbitKM =
              this.viewData.orbitConfig.issOrbit.maxKM -
              this.viewData.orbitConfig.issOrbit.minKM;
            var issRangeOrbitVH =
              this.viewData.orbitConfig.issOrbit.maxVH -
              this.viewData.orbitConfig.issOrbit.minVH;
            var iss =
              Math.round(
                (issRangeOrbitVH *
                  ((sataltround - this.viewData.orbitConfig.issOrbit.minKM) /
                    issRangeOrbitKM) +
                  this.viewData.orbitConfig.issOrbit.minVH) *
                  10000
              ) / 10000;

            // var dataAltRaw = Math.random() * (195 - 130) + 130;
            // var dataAlt = Math.round(dataAltRaw * 1) / 1;
            var dataAlt = 0;
            var dataDeg = "";

            // Is it geostationary, low earth or really high?
            if (
              sataltround > this.viewData.orbitConfig.geoOrbit.minTag &&
              sataltround < this.viewData.orbitConfig.geoOrbit.maxTag
            ) {
              var orbitType = "geosat";
              var dataDir = "no";
              var dataAlt = geo;
              if (this.viewData.smallscreen != false) {
                var dataDegRaw = Math.random() * (-8 - 8) + 8;
              } else {
                var dataDegRaw = Math.random() * (-20 - 20) + 20;
              }
              var dataDeg = Math.round(dataDegRaw * 1000) / 1000;
            } else if (
              sataltround < this.viewData.orbitConfig.lowOrbit.maxTag
            ) {
              var orbitType = "low";
              var dataAlt = low;
            } else if (
              sataltround > this.viewData.orbitConfig.medOrbit.minTag &&
              sataltround < this.viewData.orbitConfig.geoOrbit.minTag
            ) {
              var orbitType = "med";
              var dataAlt = med;
            } else if (
              sataltround > this.viewData.orbitConfig.geoOrbit.maxTag &&
              sataltround < this.viewData.orbitConfig.medOrbit.maxTag
            ) {
              var orbitType = "med";
              var dataAlt = med;
            } else if (
              sataltround > this.viewData.orbitConfig.highOrbit.minTag &&
              sataltround < this.viewData.orbitConfig.highOrbit.maxTag
            ) {
              var orbitType = "high";
              var dataAlt = high;
              var dataDir = dataDir;
            } else if (
              sataltround > this.viewData.orbitConfig.vhighOrbit.minTag &&
              sataltround < this.viewData.orbitConfig.vhighOrbit.maxTag
            ) {
              var orbitType = "vhigh";
              var dataAlt = vhigh;
              var dataDir = dataDir;
            } else if (
              sataltround > this.viewData.orbitConfig.issOrbit.minTag
            ) {
              var orbitType = "iss";
              var dataAlt = iss;
              var dataDir = dataDir;
            } else {
              var orbitType = "other";
              var dataAlt = 0;
            }

            // Mathing out the relative speed

            var speedOrbitMaxLow = 15000;
            var speedOrbitMinLow = 5000;
            var speedSecMaxLow = 50;
            var speedSecMinLow = 20;
            var lowSpeed =
              Math.round(
                ((speedSecMaxLow - speedSecMinLow) *
                  ((sataltround - speedOrbitMinLow) /
                    (speedOrbitMaxLow - speedOrbitMinLow)) +
                  speedSecMinLow) *
                  10000
              ) / 10000;

            var speedOrbitMaxMed = 60000;
            var speedOrbitMinMed = 20000;
            var speedSecMaxMed = 40;
            var speedSecMinMed = 20;
            var medSpeed =
              Math.round(
                ((speedSecMaxMed - speedSecMinMed) *
                  ((sataltround - speedOrbitMinMed) /
                    (speedOrbitMaxMed - speedOrbitMinMed)) +
                  speedSecMinMed) *
                  10000
              ) / 10000;

            var speedOrbitMaxHigh = 200000;
            var speedOrbitMinHigh = 100000;
            var speedSecMaxHigh = 100;
            var speedSecMinHigh = 50;
            var highSpeed =
              Math.round(
                ((speedSecMaxHigh - speedSecMinHigh) *
                  ((sataltround - speedOrbitMinHigh) /
                    (speedOrbitMaxHigh - speedOrbitMinHigh)) +
                  speedSecMinHigh) *
                  10000
              ) / 10000;

            var speedOrbitMaxVhigh = 900000;
            var speedOrbitMinVhigh = 100000;
            var speedSecMaxVhigh = 70;
            var speedSecMinVhigh = 40;
            var vhighSpeed =
              Math.round(
                ((speedSecMaxVhigh - speedSecMinVhigh) *
                  ((sataltround - speedOrbitMinVhigh) /
                    (speedOrbitMaxVhigh - speedOrbitMinVhigh)) +
                  speedSecMinVhigh) *
                  10000
              ) / 10000;

            var speedOrbitMaxIss = 100000000000000000000000000000000;
            var speedOrbitMinIss = 100000;
            var speedSecMaxIss = 200;
            var speedSecMinIss = 100;
            var issSpeed =
              Math.round(
                ((speedSecMaxIss - speedSecMinIss) *
                  ((sataltround - speedOrbitMinIss) /
                    (speedOrbitMaxIss - speedOrbitMinIss)) +
                  speedSecMinIss) *
                  10000
              ) / 10000;

            if (orbitType == "low") {
              var dataSpe = lowSpeed;
            } else if (orbitType == "med") {
              var dataSpe = medSpeed;
            } else if (orbitType == "high") {
              var dataSpe = highSpeed;
            } else if (orbitType == "vhigh") {
              var dataSpe = vhighSpeed;
            } else if (orbitType == "iss") {
              var dataSpe = issSpeed;
            } else {
              var dataSpe = vhighSpeed;
            }

            // Creating a timestamp
            var theTimeRaw = new Date();
            var theTime =
              theTimeRaw.getHours() +
              ":" +
              theTimeRaw.getMinutes() +
              ":" +
              theTimeRaw.getSeconds();

            // Creating the best path for the screen width and satellite height

            // this.viewData.orbitConfig.degData.minDeg = ( this.viewData.guiwidth /340 ) * 4 + 15;
            // this.viewData.orbitConfig.degData.maxDeg = ( this.viewData.guiwidth /340 ) * 3 + 6.7;

            var degOffsetRange =
              (this.viewData.orbitConfig.degData.maxOffset -
                this.viewData.orbitConfig.degData.minOffset) /
              100;
            var degSpinRange =
              (this.viewData.orbitConfig.degData.maxDeg -
                this.viewData.orbitConfig.degData.minDeg) /
              100;
            var keyframeDegRaw =
              ((dataAlt - this.viewData.orbitConfig.degData.minOffset) /
                degOffsetRange) *
                degSpinRange -
              this.viewData.orbitConfig.degData.maxDeg;

            var keyframeDeg =
              (this.viewData.guiwidth - 1280) / 64 + Math.abs(keyframeDegRaw);

            if (dataDir != "left") {
              var keyFrame0 = "-" + keyframeDeg;
              var keyFrame100 = keyframeDeg;
            } else {
              var keyFrame0 = keyframeDeg;
              var keyFrame100 = "-" + keyframeDeg;
            }

            var displayAltRaw = dataAlt - 100;
            var displayAlt = Math.round(displayAltRaw * 1) / 1;
            var displaySpe = Math.round(dataSpe * 1) / 1;

            // Filing the data
            this.satData
              .find((x) => x.id === catid)
              .satellites.push({
                name: current.satname,
                id: current.satid,
                birth: current.launchDate,
                satlat: current.satlat,
                satlng: current.satlng,
                satalt: sataltround,
                timestamp: theTime,
                dataalt: dataAlt,
                displayalt: displayAlt,
                dataspe: dataSpe,
                displayspe: displaySpe,
                datadir: dataDir,
                datadeg: dataDeg,
                orbittype: orbitType,
                saticon: satIcon,
                keyframe0: keyFrame0,
                keyframe100: keyFrame100,
                catname: catName,
              });

            if (orbitType != "geosat") {
              // Creating the movment key keyframes
              var style = document.createElement("style");
              style.type = "text/css";
              style.className = "animation-catid-" + catid;
              style.innerHTML =
                "@-webkit-keyframes orbit-" +
                current.satid +
                " {0% {transform: rotate(" +
                keyFrame0 +
                "deg);} 100% {transform: rotate(" +
                keyFrame100 +
                "deg);}}";
              document.getElementsByTagName("head")[0].appendChild(style);
            }
          });

          // How meny satellites were found? Lets add this to the btnData
          this.btnData.find((x) => x.id === catid).satcount =
            data.info.satcount;

          // Last of all, update the query quota as of this request
          this.otherData.queryquota = data.info.transactionscount;
        },
      });

      $.ajax({
        type: "GET",
        url:
          "https://us1.locationiq.com/v1/reverse.php?key=fc4cf0d9cfb68e&lat=" +
          this.userData.lat +
          "&lon=" +
          this.userData.lon +
          "&format=json",
        dataType: "json",
        success: function (data) {
          this.userData.house = data.address.house_number;
          this.userData.road = data.address.road;
          this.userData.city = data.address.county;
          this.userData.region = data.address.state;
          this.userData.country = data.address.country;
          this.userData.address =
            data.address.road + ", " + data.address.county;
        },
      });
    }
  },

  locationSearch: function () {
    var geoLookup = encodeURIComponent(this.userData.address);

    $.ajax({
      type: "GET",
      url:
        "https://us1.locationiq.com/v1/search.php?key=fc4cf0d9cfb68e&q=" +
        geoLookup +
        "&format=json",
      dataType: "json",
      success: function (data) {
        var latround = Math.round(data[0].lat * 10000) / 10000;
        var lonround = Math.round(data[0].lon * 10000) / 10000;
        this.userData.lat = latround;
        this.userData.lon = lonround;

        $.ajax({
          type: "GET",
          url:
            "https://us1.locationiq.com/v1/reverse.php?key=fc4cf0d9cfb68e&lat=" +
            latround +
            "&lon=" +
            lonround +
            "&format=json",
          dataType: "json",
          success: function (data) {
            this.userData.house = data.address.house_number;
            this.userData.road = data.address.road;
            this.userData.city = data.address.county;
            this.userData.region = data.address.state;
            this.userData.country = data.address.country;
            this.userData.address =
              data.address.road + ", " + data.address.county;
          },
        });
      },
    });
  },
};
