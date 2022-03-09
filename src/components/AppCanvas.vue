<template>
  <section>
    <CanvasBackground></CanvasBackground>
    <ul v-for="(group, index) in satelliteStore.satelliteGroups" :key="index">
      <CanvasSatellite
        v-for="(satellite, index) in group.sats"
        :key="index"
        :satellite="satellite"
      ></CanvasSatellite>
    </ul>
  </section>
</template>

<script>
import CanvasBackground from "./CanvasBackground.vue";
import CanvasSatellite from "./CanvasSatellite.vue";
import { satelliteStore } from "../store.js";
export default {
  name: "AppCanvas",
  components: {
    CanvasBackground,
    CanvasSatellite,
  },
  data() {
    return {
      satelliteStore,
    };
  },
};
</script>

<style scoped lang="scss">
section {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 90vh;
  width: 66.6666vw;
  transition: 0.5s;
  background: white;
  color: cadetblue;

  & > ul {
    position: absolute;
    left: 50%;
    top: 200vh;
    height: 0;
    width: 0;
    z-index: 1;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (max-width: 768px) {
      top: 209vh;
    }

    &.sat-hover {
      .asat {
        opacity: 0.5;
        &.sat-hover {
          opacity: 1;
        }
      }
    }
  }
}
</style>
