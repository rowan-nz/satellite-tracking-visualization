<template>
  <div>
    <SidebarSwitch
      title="View Mode"
      v-model:checked="switchTestOne"
    ></SidebarSwitch>
    <SidebarSwitch
      title="Full Screen"
      v-model:checked="switchTestTwo"
    ></SidebarSwitch>
  </div>
</template>

<script>
import SidebarSwitch from "./SidebarSwitch.vue";
export default {
  name: "SidebarViews",
  components: {
    SidebarSwitch,
  },
  data() {
    return {
      switchTestOne: true,
      switchTestTwo: true,
    };
  },
};
</script>

<style scoped lang="scss"></style>
