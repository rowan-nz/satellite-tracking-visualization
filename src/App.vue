<template>
  <AppCanvas />
  <AppSidebar />
</template>

<script>
import AppSidebar from "./components/AppSidebar.vue";
import AppCanvas from "./components/AppCanvas.vue";
export default {
  name: "App",
  components: {
    AppCanvas,
    AppSidebar,
  },
};
</script>

<style lang="scss">
body {
  overflow-x: hidden;
  max-width: 100%;
  text-align: center;
  margin: 0;
  font-family: "Open Sans", sans-serif;
}

#app {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

p {
  margin: 30px 0;
  font-size: 22px;
  line-height: 38px;
  font-weight: 300;
}

a {
  text-decoration: none;
  color: inherit;
}

h1,
h2,
h3,
h4,
h5 {
  margin: 20px 0;
  font-weight: 400;
  font-family: "Major Mono Display", monospace;
}
</style>
