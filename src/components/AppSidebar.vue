<template>
  <section>
    <div>
      <ul>
        <li>
          <SidebarViews></SidebarViews>
        </li>
        <li>
          <ul>
            <SidebarCategory
              v-for="(category, index) in categoriesStore"
              v-bind:key="index"
              :category="category"
            ></SidebarCategory>
          </ul>
        </li>
        <li>
          <SidebarLocation></SidebarLocation>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import SidebarViews from "./SidebarViews.vue";
import SidebarCategory from "./SidebarCategory.vue";
import SidebarLocation from "./SidebarLocation.vue";
import { categoriesStore } from "../store.js";
export default {
  name: "AppSidebar",
  props: {
    settings: String,
  },
  components: {
    SidebarViews,
    SidebarCategory,
    SidebarLocation,
  },
  data() {
    return {
      categoriesStore,
    };
  },
};
</script>

<style scoped lang="scss">
section {
  position: fixed;
  display: table;
  bottom: 0;
  left: 66.6666vw;
  height: 100vh;
  width: 33.3333vw;
  background: cadetblue;
  color: white;
  transition: 0.5s;

  & > div {
    display: table-cell;
    vertical-align: middle;

    & > ul {
      display: inline-block;
      width: 100%;
      max-height: 80vh;
      padding: 10vh 0;
      overflow-y: scroll;
      list-style: none;

      &::-webkit-scrollbar {
        width: 20px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.1);
      }

      & > li {
        margin: 10vh auto;
        width: 90%;

        & > ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
      }
    }
  }
}
</style>
