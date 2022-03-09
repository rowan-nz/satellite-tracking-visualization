import { reactive } from "vue";

export const satelliteStore = reactive({
  satelliteGroups: [],
  addSatellites(id, newSatellites) {
    this.satelliteGroups.push({
      id: id,
      sats: newSatellites,
    });
  },
  removeSatellites(id) {
    this.satelliteGroups = this.satelliteGroups.filter(
      (group) => group.id !== id
    );
  },
});

export const locationStore = reactive({
  lat: "",
  lon: "",
  ang: "",
  address: "",
});

export const categoriesStore = reactive([
  {
    name: "Cube Sats",
    icon: "stop-circle",
    id: "32",
  },
  {
    name: "Amateur Radio",
    icon: "broadcast-tower",
    id: "18",
  },
  {
    name: "Disaster Monitoring",
    icon: "fire-alt",
    id: "8",
  },
  {
    name: "Geostationary",
    icon: "satellite",
    id: "10",
  },
  {
    name: "ISS",
    icon: "rocket",
    id: "2",
  },
  {
    name: "Military",
    icon: "shield-alt",
    id: "30",
  },
  {
    name: "Starlink",
    icon: "star",
    id: "52",
  },
  {
    name: "Experimental",
    icon: "bomb",
    id: "19",
  },
  {
    name: "Space & Earth Science",
    icon: "flask",
    id: "26",
  },
  {
    name: "TV",
    icon: "satellite-dish",
    id: "34",
  },
  {
    name: "Weather",
    icon: "wind",
    id: "3",
  },
  {
    name: "GPS Operational",
    icon: "compass",
    id: "20",
  },
  {
    name: "GPS Constellation",
    icon: "compass",
    id: "50",
  },
]);
