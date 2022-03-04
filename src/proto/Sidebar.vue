<template>
  <section id="interface" class="interface">
    <!-- <div class="mobilebtn" v-if="viewData.smallscreen" v-on:click="openMenu()">
    <i class="fas fa-bars"></i>
  </div>

  <div class="vcenter">
    <div class="vscroll">

      <div class="interface-group switchers toggler">
        <div class="switch">
          <p>View Mode</p>
          <p><input v-on:click="activable($event) & openMenu()" type="checkbox" v-model="viewData.graphics"></input></p>
        </div>
        <div class="switch">
          <p>Fullscreen</p>
          <p><input v-on:click="activable($event) & fullscreen()" type="checkbox" v-model="viewData.fullscreen"></input></p>
        </div>
      </div>

      <div class="interface-group sat-selectors">

        <ul>
          <li v-for="button in btnData">
            <button v-on:click="addSats($event)" v-bind:class="( button.satcount !== '' )?'active':''" :data-catid="button.id" :class="button.active"><i v-if="button.saticon" :class="button.saticon"></i> {{ button.displayName }} <span v-if="button.satcount !== ''">{{ button.satcount }}</span><i v-if="button.satloading" class="satloading fas fa-circle-notch"></i></button>
          </li>
          <li>
            <button v-on:click="removeAll">Remove All</button>
          </li>
        </ul>

      </div>

      <div class="interface-group location-search">
        <p class="useraddress"><input v-model="userData.address"></input><button v-on:click="locationSearch"><i class="fas fa-map-marker-alt"></i></button></p>
      </div>

      <div class="interface-group location-config">
        <p>Latitude <input class="userlat" v-model="userData.lat"></input></p>
        <p>Longitude <input class="userlon" v-model="userData.lon"></input></p>
        <p>Altitude <input class="useralt" v-model="userData.alt"></input></p>
        <p>Above Angle <input class="userang" v-model="userData.viewAng"></input></p>
      </div>

      <div class="interface-group trythis">
        <p><button v-on:click="solarFlip" ><i class="fas fa-sun"></i>Vist The Solar System</button></p>
      </div>

      <div class="interface-group credits">
        <div>
          <p><a href="https://wovenit.nz/" target="_blank"><img src="../img/logo.png"></a></p>
        </div>
      </div>

    </div>
  </div> -->
  </section>
</template>

<script>
export default {
  name: "InterFace",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss"></style>
