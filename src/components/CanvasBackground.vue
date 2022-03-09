<template>
  <div>
    <div class="earth">
      <i><font-awesome-icon icon="map-marker-alt" /></i>
    </div>
    <div class="color"></div>
    <div class="stars"></div>
    <div class="stars2"></div>
    <div class="stars3"></div>
  </div>
</template>

<script>
export default {
  name: "CanvasBackground",
  props: {
    settings: String,
  },
};
</script>

<style scoped lang="scss">
@import "../scss/_stars.scss";
.earth {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 90vw;
  height: 40vw;
  background: #fff;
  color: #fff;
  transform: translate(-50%, 90%);
  border-radius: 100%;
  z-index: -1;

  i {
    position: absolute;
    font-size: 50px;
    transform: translateY(-65px);
  }
}

.color {
  background-image: radial-gradient(#5f9da0 15%, rgba(95, 157, 160, 0) 65%);
  position: absolute;
  height: 250%;
  width: 150%;
  top: 0;
  left: -25%;
  z-index: -5;
}
.glaze {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  top: 0;
  position: absolute;
  z-index: -1;
  opacity: 0;
  transition: 3s;
}
.start .glaze.zero,
.boxonefull .glaze.one,
.boxtwofull .glaze.two,
.boxthreefull .glaze.three,
.boxfourfull .glaze.four {
  opacity: 1;
}
.glaze.zero {
  background: linear-gradient(
    rgba(0, 70, 255, 0.6),
    #fff,
    rgba(0, 255, 193, 0.45)
  );
}
.glaze.semi {
  background: rgba(255, 255, 255, 0);
}
.glaze.one {
  background: rgba(0, 173, 255, 0.5);
}
.glaze.two {
  background: linear-gradient(rgba(26, 171, 1, 0.59), rgba(43, 255, 158, 0.35));
}
.glaze.three {
  background: linear-gradient(rgba(250, 255, 0, 0.4), rgba(255, 177, 0, 0.3));
}
.glaze.four {
  background: rgba(255, 255, 255, 0.4);
}
.boxonesemi .glaze.semi,
.boxtwosemi .glaze.semi,
.boxthreesemi .glaze.semi,
.boxfoursemi .glaze.semi,
.bkgstart .glaze.semi {
  opacity: 1;
}
</style>
