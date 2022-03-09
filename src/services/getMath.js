export default (satelliteAltitude) => {
  let dataDir = null;
  let dataAlt = null;
  let orbitType = null;
  let dataSpe = null;
  let keyFrame0 = null;
  let keyFrame100 = null;
  const orbitConfig = {
    lowOrbit: {
      maxTag: 19000,
      minTag: "",
      minKM: 7000,
      maxKM: 15000,
      minVH: 130,
      maxVH: 140,
    },
    geoOrbit: {
      maxTag: 37500,
      minTag: 34500,
      minKM: 35500,
      maxKM: 36500,
      minVH: 157,
      maxVH: 163,
    },
    medOrbit: {
      maxTag: 60000,
      minTag: 19000,
      minKM: 20000,
      maxKM: 60000,
      minVH: 140,
      maxVH: 175,
    },
    highOrbit: {
      maxTag: 200000,
      minTag: 70000,
      minKM: 150000,
      maxKM: 200000,
      minVH: 180,
      maxVH: 185,
    },
    vhighOrbit: {
      maxTag: 5000000,
      minTag: 200000,
      minKM: 200000,
      maxKM: 4000000,
      minVH: 188,
      maxVH: 195,
    },
    issOrbit: {
      maxTag: "",
      minTag: 200000,
      minKM: 200000,
      maxKM: 100000000000000000000000000000000,
      minVH: 205,
      maxVH: 205,
    },
    degData: {
      maxOffset: 200,
      minOffset: 120,
      maxDeg: 30,
      minDeg: 18,
    },
  };
  // Set a random direction, left or right
  var dataAniRaw = Math.random() >= 0.5;
  dataDir = dataAniRaw === true ? "left" : "right";

  // Mathing out the relative height
  var sataltround = Math.round(satelliteAltitude * 1) / 1;

  // Low Orbit Math ---
  var lowRangeOrbitKM = orbitConfig.lowOrbit.maxKM - orbitConfig.lowOrbit.minKM;
  var lowRangeOrbitVH = orbitConfig.lowOrbit.maxVH - orbitConfig.lowOrbit.minVH;
  var low =
    Math.round(
      (lowRangeOrbitVH *
        ((sataltround - orbitConfig.lowOrbit.minKM) / lowRangeOrbitKM) +
        orbitConfig.lowOrbit.minVH) *
        10000
    ) / 10000;

  // Geostationary Orbit Math ---
  var geoRangeOrbitKM = orbitConfig.geoOrbit.maxKM - orbitConfig.geoOrbit.minKM;
  var geoRangeOrbitVH = orbitConfig.geoOrbit.maxVH - orbitConfig.geoOrbit.minVH;
  var geo =
    Math.round(
      (geoRangeOrbitVH *
        ((sataltround - orbitConfig.geoOrbit.minKM) / geoRangeOrbitKM) +
        orbitConfig.geoOrbit.minVH) *
        10000
    ) / 10000;

  // Medium Earth Orbit Math ---
  var medRangeOrbitKM = orbitConfig.medOrbit.maxKM - orbitConfig.medOrbit.minKM;
  var medRangeOrbitVH = orbitConfig.medOrbit.maxVH - orbitConfig.medOrbit.minVH;
  var med =
    Math.round(
      (medRangeOrbitVH *
        ((sataltround - orbitConfig.medOrbit.minKM) / medRangeOrbitKM) +
        orbitConfig.medOrbit.minVH) *
        10000
    ) / 10000;

  // High Orbit Math ---
  var highRangeOrbitKM =
    orbitConfig.highOrbit.maxKM - orbitConfig.highOrbit.minKM;
  var highRangeOrbitVH =
    orbitConfig.highOrbit.maxVH - orbitConfig.highOrbit.minVH;
  var high =
    Math.round(
      (highRangeOrbitVH *
        ((sataltround - orbitConfig.highOrbit.minKM) / highRangeOrbitKM) +
        orbitConfig.highOrbit.minVH) *
        10000
    ) / 10000;

  // Vhigh Orbit Math ---
  var vhighRangeOrbitKM =
    orbitConfig.vhighOrbit.maxKM - orbitConfig.vhighOrbit.minKM;
  var vhighRangeOrbitVH =
    orbitConfig.vhighOrbit.maxVH - orbitConfig.vhighOrbit.minVH;
  var vhigh =
    Math.round(
      (vhighRangeOrbitVH *
        ((sataltround - orbitConfig.vhighOrbit.minKM) / vhighRangeOrbitKM) +
        orbitConfig.vhighOrbit.minVH) *
        10000
    ) / 10000;

  // ISS Orbit Math ---
  var issRangeOrbitKM = orbitConfig.issOrbit.maxKM - orbitConfig.issOrbit.minKM;
  var issRangeOrbitVH = orbitConfig.issOrbit.maxVH - orbitConfig.issOrbit.minVH;
  var iss =
    Math.round(
      (issRangeOrbitVH *
        ((sataltround - orbitConfig.issOrbit.minKM) / issRangeOrbitKM) +
        orbitConfig.issOrbit.minVH) *
        10000
    ) / 10000;

  dataAlt = 0;

  // Is it geostationary, low earth or really high?
  if (
    sataltround > orbitConfig.geoOrbit.minTag &&
    sataltround < orbitConfig.geoOrbit.maxTag
  ) {
    orbitType = "geosat";
    dataDir = "no";
    dataAlt = geo;
  } else if (sataltround < orbitConfig.lowOrbit.maxTag) {
    orbitType = "low";
    dataAlt = low;
  } else if (
    sataltround > orbitConfig.medOrbit.minTag &&
    sataltround < orbitConfig.geoOrbit.minTag
  ) {
    orbitType = "med";
    dataAlt = med;
  } else if (
    sataltround > orbitConfig.geoOrbit.maxTag &&
    sataltround < orbitConfig.medOrbit.maxTag
  ) {
    orbitType = "med";
    dataAlt = med;
  } else if (
    sataltround > orbitConfig.highOrbit.minTag &&
    sataltround < orbitConfig.highOrbit.maxTag
  ) {
    orbitType = "high";
    dataAlt = high;
  } else if (
    sataltround > orbitConfig.vhighOrbit.minTag &&
    sataltround < orbitConfig.vhighOrbit.maxTag
  ) {
    orbitType = "vhigh";
    dataAlt = vhigh;
  } else if (sataltround > orbitConfig.issOrbit.minTag) {
    orbitType = "iss";
    dataAlt = iss;
  } else {
    orbitType = "other";
    dataAlt = 0;
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
    dataSpe = lowSpeed;
  } else if (orbitType == "med") {
    dataSpe = medSpeed;
  } else if (orbitType == "high") {
    dataSpe = highSpeed;
  } else if (orbitType == "vhigh") {
    dataSpe = vhighSpeed;
  } else if (orbitType == "iss") {
    dataSpe = issSpeed;
  } else {
    dataSpe = vhighSpeed;
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

  var degOffsetRange =
    (orbitConfig.degData.maxOffset - orbitConfig.degData.minOffset) / 100;
  var degSpinRange =
    (orbitConfig.degData.maxDeg - orbitConfig.degData.minDeg) / 100;
  var keyframeDegRaw =
    ((dataAlt - orbitConfig.degData.minOffset) / degOffsetRange) *
      degSpinRange -
    orbitConfig.degData.maxDeg;

  var keyframeDeg = (window.innerWidth - 1280) / 64 + Math.abs(keyframeDegRaw);

  if (dataDir != "left") {
    keyFrame0 = "-" + keyframeDeg;
    keyFrame100 = keyframeDeg;
  } else {
    keyFrame0 = keyframeDeg;
    keyFrame100 = "-" + keyframeDeg;
  }

  var displayAltRaw = dataAlt - 100;
  var displayAlt = Math.round(displayAltRaw * 1) / 1;
  var displaySpe = Math.round(dataSpe * 1) / 1;

  return {
    timestamp: String(theTime),
    datadir: String(dataDir),
    orbittype: String(orbitType),
    satalt: Number(sataltround),
    dataalt: Number(dataAlt),
    displayalt: Number(displayAlt),
    dataspe: Number(dataSpe),
    displayspe: Number(displaySpe),
    keyframe0: Number(keyFrame0),
    keyframe100: Number(keyFrame100),
  };
};
