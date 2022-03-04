<template>
  <section id="SidebarControls">
    <div class="wrapper">
      <div class="inner">
        <div class="control-group">
          <ToggleSwitch></ToggleSwitch>
          <ToggleSwitch></ToggleSwitch>
        </div>
        <div class="control-group">
          <SelectorList></SelectorList>
        </div>
        <div class="control-group">
          <LocationControls></LocationControls>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ToggleSwitch from "./ToggleSwitch.vue";
import SelectorList from "./SelectorList.vue";
import LocationControls from "./LocationControls.vue";
export default {
  name: "SidebarControls",
  props: {
    msg: String,
  },
  components: {
    ToggleSwitch,
    SelectorList,
    LocationControls,
  },
};
</script>

<style scoped lang="scss">
#SidebarControls {
  position: fixed;
  display: table;
  bottom: 0;
  left: 66.6666vw;
  height: 100vh;
  width: 33.3333vw;
  background: cadetblue;
  color: white;
  transition: 0.5s;

  .wrapper {
    display: table-cell;
    vertical-align: middle;

    .inner {
      max-height: 90vh;
      padding: 5vh 0;
      display: inline-block;
      width: 100%;
      max-height: 80vh;
      padding: 10vh 0;
      overflow-y: scroll;

      &::-webkit-scrollbar {
        width: 20px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  }
}
</style>
