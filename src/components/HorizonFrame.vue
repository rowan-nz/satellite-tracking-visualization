<template>
  <section id="HorizionFrame"></section>
</template>

<script>
export default {
  name: "ViewPort",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
#HorizionFrame {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 90vh;
  width: 66.6666vw;
  transition: 0.5s;
  background: white;
  color: cadetblue;
}
</style>
