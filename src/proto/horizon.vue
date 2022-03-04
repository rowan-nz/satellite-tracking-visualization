<template>
  <section>
    <!-- <section
    v-if="viewData.graphics != true"
    id="viewport"
    class="viewport viewport-info"
  >
    <div class="vtable">
      <div class="vcenter">
        <div class="vscroll">
          <div class="satellites">
            <div
              v-for="satGroup in satData"
              class="sat-group"
              :class="satGroup.name"
            >
              <div v-for="satellite in satGroup.satellites" class="satellite">
                <div class="infobox">
                  <div class="flipper">
                    <div class="front">
                      <i
                        v-if="satellite.saticon"
                        :class="satellite.saticon"
                      ></i>
                      <p class="name">{{ satellite.name }}</p>
                      <p>Sat ID: {{ satellite.id }}</p>
                      <p>Launched: {{ satellite.birth }}</p>
                      <p>Latitude: {{ satellite.satlat }}</p>
                      <p>Longitude: {{ satellite.satlng }}</p>
                      <p>Altitude: {{ satellite.satalt }} km</p>
                    </div>

                    <div class="back">
                      <i
                        v-if="satellite.saticon"
                        :class="satellite.saticon"
                      ></i>
                      <div class="center">
                        <p class="name">Calulated GUI</p>
                        <p>Orbit Type: {{ satellite.orbittype }}</p>
                        <p v-if="satellite.orbittype != 'other'">
                          GUI Height: {{ satellite.displayalt }}vh
                        </p>
                        <p
                          v-if="
                            satellite.orbittype != 'other' &&
                            satellite.orbittype != 'geosat'
                          "
                        >
                          GUI Speed: {{ satellite.displayspe }}s
                        </p>
                        <p v-if="satellite.orbittype == 'geosat'">
                          GUI Location: {{ satellite.datadeg }}deg
                        </p>
                        <p v-if="satellite.orbittype != 'other'">
                          Movment: {{ satellite.datadir }}
                        </p>
                        <p>Timestamp: {{ satellite.timestamp }}</p>
                        <p
                          class="message"
                          v-if="satellite.orbittype == 'other'"
                        >
                          This satilite is not currently included in the GUI ({{
                            satellite.satalt
                          }})
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
    v-if="viewData.graphics"
    id="viewport"
    class="viewport viewport-graphics"
  >
    <div class="wallpaper">
      <div v-if="viewData.smallscreen != true" class="you">
        <i class="fas fa-map-marker-alt"></i>
      </div>

      <div class="stars"></div>

      <div class="backgrounds">
        <div class="background"></div>
        <div class="stars-bkg">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>
      </div>
    </div>

    <div class="satellites">
      <div v-for="satGroup in satData" class="sat-group" :class="satGroup.name">
        <div v-for="satellite in satGroup.satellites" class="satellite">
          <div
            class="spin"
            :style="{
              animation:
                'orbit-' +
                satellite.id +
                ' ' +
                satellite.dataspe +
                's linear infinite',
              transform: 'rotate(' + satellite.datadeg + 'deg)',
            }"
          >
            <div
              class="asat"
              :class="satellite.datadir + ' ' + satellite.orbittype"
              :style="{ bottom: satellite.dataalt + 'vh' }"
            >
              <i v-if="satellite.saticon" :class="satellite.saticon"></i>

              <div class="title">
                <p class="name">{{ satellite.name }}</p>
              </div>

              <div class="infobox">
                <p>{{ satellite.name }}</p>
                <p>Launched: {{ satellite.birth }}</p>
                <p>Latitude: {{ satellite.satlat }}</p>
                <p>Longitude: {{ satellite.satlng }}</p>
                <p>Altitude: {{ satellite.satalt }} km</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </section>
</template>

<script>
export default {
  name: "ViewPort",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss"></style>
