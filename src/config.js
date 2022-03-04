export default () => {
  return {
    viewData: {
      graphics: true,
      fullviewport: false,
      openmenu: false,
      bodyclass: "",
      winwidth: "",
      winheight: "",
      guiwidth: "",
      guiheight: "",
      smallscreen: "",
      ssview: false,
      orbitConfig: {
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
      },
    },

    userData: {
      lat: "-43.5036",
      lon: "172.5948",
      alt: "0",
      viewAng: "50",
      address: "",
    },

    btnData: [
      {
        name: "cubesats",
        displayName: "Cube Sats",
        saticon: "far fa-stop-circle",
        id: "32",
        satcount: "",
        satloading: false,
      },
      {
        name: "amateur-radio",
        displayName: "Amateur Radio",
        saticon: "fas fa-broadcast-tower",
        id: "18",
        satcount: "",
        satloading: false,
      },
      {
        name: "disaster-monitoring",
        displayName: "Disaster Monitoring",
        saticon: "fas fa-fire-alt",
        id: "8",
        satcount: "",
        satloading: false,
      },
      {
        name: "geostationary",
        displayName: "Geostationary",
        saticon: "fas fa-satellite",
        id: "10",
        satcount: "",
        satloading: false,
      },
      {
        name: "iss",
        displayName: "ISS",
        saticon: "fas fa-rocket",
        id: "2",
        satcount: "",
        satloading: false,
      },
      {
        name: "military",
        displayName: "Military",
        saticon: "fas fa-shield-alt",
        id: "30",
        satcount: "",
        satloading: false,
      },
      {
        name: "starlink",
        displayName: "Starlink",
        saticon: "fas fa-star",
        id: "52",
        satcount: "",
        satloading: false,
      },
      {
        name: "experimental	",
        displayName: "Experimental",
        saticon: "fas fa-bomb",
        id: "19",
        satcount: "",
        satloading: false,
      },
      {
        name: "space-earth-science",
        displayName: "Space & Earth Science",
        saticon: "fas fa-flask",
        id: "26",
        satcount: "",
        satloading: false,
      },
      {
        name: "tv",
        displayName: "TV",
        saticon: "fas fa-satellite-dish",
        id: "34",
        satcount: "",
        satloading: false,
      },
      {
        name: "weather",
        displayName: "Weather",
        saticon: "fas fa-wind",
        id: "3",
        satcount: "",
        satloading: false,
      },
      {
        name: "gps-operational",
        displayName: "GPS Operational",
        saticon: "fas fa-compass",
        id: "20",
        satcount: "",
        satloading: false,
      },
      {
        name: "gps-constellation",
        displayName: "GPS Constellation",
        saticon: "far fa-compass",
        id: "50",
        satcount: "",
        satloading: false,
      },
    ],

    satData: [],

    otherData: {
      queryquota: "0",
    },
  };
};
