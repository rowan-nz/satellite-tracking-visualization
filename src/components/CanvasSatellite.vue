<template>
  <li>
    <div
      :style="{
        animation: `orbit-${satellite.id} ${satellite.dataspe}s linear infinite`,
      }"
    >
      <div
        class="asat"
        :class="satellite.datadir + ' ' + satellite.orbittype"
        :style="{ bottom: satellite.dataalt + 'vh' }"
      >
        <i v-if="satellite.saticon" :class="satellite.saticon"></i>

        <div class="title">
          <p class="name">{{ satellite.satname }}</p>
        </div>

        <div class="infobox">
          <p>{{ satellite.satname }}</p>
          <p>Launched: {{ satellite.launchDate }}</p>
          <p>Latitude: {{ satellite.satlat }}</p>
          <p>Longitude: {{ satellite.satlng }}</p>
          <p>Altitude: {{ satellite.satalt }} km</p>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import getMath from "../services/getMath.js";
export default {
  name: "CanvasSatellite",
  props: {
    satellite: Object,
  },
  data() {
    return {
      math: {},
    };
  },
  created() {
    this.math = getMath(this.satellite.satalt);
  },
};
</script>

<style scoped lang="scss">
item {
  .asat {
    position: absolute;
    transition: 0.3s;
    transform: translateX(-50%);

    &::after {
      content: "";
      position: absolute;
      display: block;
      width: 175px;
      height: 175px;
      border-radius: 100px;
      background-image: radial-gradient(white 15%, rgba(95, 157, 160, 0) 65%);
      transition: 0.3s;
      transform: scale(0) translate(-50%, -50%);
      top: 50%;
      left: 50%;
      opacity: 0;
      z-index: -1;
      transform-origin: top left;
    }

    &.low,
    &.med {
      .infobox {
        bottom: 100%;
        top: auto;
        padding: 0 0 15px 0;
      }
    }

    & > i {
      font-size: 40px;
      transition: 0.3s;
      &.fa-satellite::before {
        transform: rotate(-45deg);
        display: block;
      }
    }

    .title {
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      transition: 0.3s;

      p {
        font-size: 16px;
        white-space: nowrap;
        margin: 0;
      }
    }

    .infobox {
      position: absolute;
      transition: 0.3s;
      transform: scale(0) translateX(-50%);
      left: 50%;
      padding-top: 15px;
      top: 100%;
      transform-origin: left;

      p {
        margin: 5px 0;
        font-size: 14px;
        line-height: 22px;
        background: #5f9da0;
        color: #fff;
        padding: 5px 10px;
        white-space: nowrap;
      }
    }
  }

  &:hover {
    z-index: 1;
    position: relative;

    .asat {
      &::after {
        transform: scale(1) translate(-50%, -50%);
        opacity: 0.5;
      }

      .title {
        opacity: 0;
      }

      & > i {
        transform: scale(1.3);
      }
    }

    .infobox {
      transform: scale(1) translateX(-50%);
    }
  }
}
</style>
