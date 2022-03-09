<template>
  <li>
    <button :class="{ active: active }" @click="toggleCategory()">
      <i><font-awesome-icon :icon="category.icon" /></i>{{ category.name }}
    </button>
  </li>
</template>

<script>
import getN2YO from "../services/getN2YO.js";
import { satelliteStore } from "../store.js";
export default {
  name: "SidebarCategory",
  props: {
    category: Object,
  },
  data() {
    return {
      active: false,
      loading: false,
      satelliteStore,
    };
  },
  methods: {
    toggleCategory() {
      this.active = !this.active;
      if (this.active) {
        this.loading = true;
        getN2YO(this.category.id).then((result) => {
          this.loading = false;
          this.satelliteStore.addSatellites(this.category.id, result);
        });
      } else {
        this.satelliteStore.removeSatellites(this.category.id);
      }
    },
  },
};
</script>

<style scoped lang="scss">
li {
  margin: 5px;
  display: inline-block;

  & > button {
    margin: 0;
    box-shadow: none;
    background: cadetblue;
    padding: 10px 20px;
    border: 2px solid;
    color: white;
    font-size: 18px;
    border-radius: 10px;
    text-transform: uppercase;
    transition: 0.3s;
    cursor: pointer;
    font-family: "Open Sans", sans-serif;

    &.active {
      background: #fff;
      color: #5f9da0;
    }

    & > i {
      margin-right: 5px;
    }
  }
}
</style>
