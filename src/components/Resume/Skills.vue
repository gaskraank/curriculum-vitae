<template>
  <v-container>
    <v-layout text-center wrap>
      <v-layout
        text-center
        wrap
        :class="{'ml-0 mr-0': $vuetify.breakpoint.smAndDown, 'ml-6 mr-6': $vuetify.breakpoint.mdAndUp}"
      >
        <v-flex md6 xs12>
          <v-layout>
            <transition mode="out-in" name="fade">
              <p
                v-if="remainingFontVisible"
                class="gradient-2 text-left headline font-weight-regular"
              >Languages</p>
            </transition>
          </v-layout>
        </v-flex>

        <v-flex class="mb-6" md6 xs12>
          <transition mode="out-in" name="fade">
            <p v-if="remainingFontVisible" class="text-left .body-2 font-weight-bold">
              <span class="white--text">German</span>
              <br />
              <span class="grey--text">native</span>
            </p>
          </transition>

          <transition mode="out-in" name="fade">
            <div id="progress-bar-container">
              <div class="progress-bar-child progress"></div>
              <div class="progress-bar-child shrinker timelapse"></div>
            </div>
          </transition>

          <transition mode="out-in" name="fade">
            <p v-if="remainingFontVisible" class="text-left .body-2 font-weight-bold">
              <span class="white--text">Turkish</span>
              <br />
              <span class="grey--text">native</span>
            </p>
          </transition>

          <transition mode="out-in" name="fade">
            <div id="progress-bar-container">
              <div class="progress-bar-child progress"></div>
              <div class="progress-bar-child shrinker timelapse"></div>
            </div>
          </transition>

          <transition mode="out-in" name="fade">
            <p v-if="remainingFontVisible" class="text-left .body-2 font-weight-bold">
              <span class="white--text">English</span>
              <br />
              <span class="grey--text">fluent</span>
            </p>
          </transition>

          <transition mode="out-in" name="fade">
            <div id="progress-bar-container">
              <div class="progress-bar-child progress"></div>
              <div class="progress-bar-child shrinker" style="width: 10% ;"></div>
            </div>
          </transition>

          <transition mode="out-in" name="fade">
            <p v-if="remainingFontVisible" class="text-left .body-1 font-weight-bold">
              <span class="white--text">French</span>
              <br />
              <span class="grey--text">basics</span>
            </p>
          </transition>

          <transition mode="out-in" name="fade">
            <div id="progress-bar-container">
              <div class="progress-bar-child progress"></div>
              <div class="progress-bar-child shrinker" style="width: 60% ;"></div>
            </div>
          </transition>
        </v-flex>

        <v-flex class="mt-12" md12 xs12>
          <v-layout>
            <transition mode="out-in" name="fade">
              <p
                v-if="remainingFontVisible"
                class="gradient-2 text-left headline font-weight-regular"
              >Programming Skills</p>
            </transition>
          </v-layout>
        </v-flex>

        <v-flex mb-2 md3 xs4>
          <v-card dark class="gradient-0" max-width="200px">
            <v-icon
              :class="{'display-1': $vuetify.breakpoint.smAndDown, 'display-4': $vuetify.breakpoint.mdAndUp}"
            >mdi-language-javascript</v-icon>
            <v-spacer />
            <v-card-title
              :class="{'body-2': $vuetify.breakpoint.smAndDown}"
              class="justify-center"
            >JavaScript</v-card-title>
          </v-card>
        </v-flex>
        <v-flex mb-2 md3 xs4>
          <v-card dark class="gradient-1" max-width="200px">
            <v-icon
              :class="{'display-1': $vuetify.breakpoint.smAndDown, 'display-4': $vuetify.breakpoint.mdAndUp}"
            >mdi-language-python</v-icon>
            <v-spacer />
            <v-card-title
              :class="{'body-2': $vuetify.breakpoint.smAndDown}"
              class="justify-center"
            >Python</v-card-title>
          </v-card>
        </v-flex>
        <v-flex mb-2 md3 xs4>
          <v-card dark class="gradient-2" max-width="200px">
            <v-icon
              :class="{'display-1': $vuetify.breakpoint.smAndDown, 'display-4': $vuetify.breakpoint.mdAndUp}"
            >mdi-language-cpp</v-icon>
            <v-spacer />
            <v-card-title
              :class="{'body-2': $vuetify.breakpoint.smAndDown}"
              class="justify-center"
            >C++ & Arduino</v-card-title>
          </v-card>
        </v-flex>
        <v-flex md3 />

        <v-flex mb-2 md3 xs4>
          <v-card dark class="gradient-0" max-width="200px">
            <v-icon
              :class="{'display-1': $vuetify.breakpoint.smAndDown, 'display-4': $vuetify.breakpoint.mdAndUp}"
            >mdi-language-css3</v-icon>
            <v-spacer />
            <v-card-title
              :class="{'body-2': $vuetify.breakpoint.smAndDown}"
              class="justify-center"
            >CSS3</v-card-title>
          </v-card>
        </v-flex>
        <v-flex mb-2 md3 xs4>
          <v-card dark class="gradient-1" max-width="200px" max-height="200px">
            <v-icon
              :class="{'display-1': $vuetify.breakpoint.smAndDown, 'display-4': $vuetify.breakpoint.mdAndUp}"
            >mdi-language-csharp</v-icon>
            <v-spacer />
            <v-card-title
              :class="{'body-2': $vuetify.breakpoint.smAndDown}"
              class="justify-center"
            >Visual C#</v-card-title>
          </v-card>
        </v-flex>

        <v-flex mb-2 md3 xs4>
          <v-card dark class="gradient-2" max-width="200px">
            <v-icon
              :class="{'display-1': $vuetify.breakpoint.smAndDown, 'display-4': $vuetify.breakpoint.mdAndUp}"
            >mdi-language-html5</v-icon>
            <v-spacer />
            <v-card-title
              :class="{'body-2': $vuetify.breakpoint.smAndDown}"
              class="justify-center"
            >HTML5</v-card-title>
          </v-card>
        </v-flex>
        <v-flex md3 />

        <v-flex mb-2 md3 xs4>
          <v-card dark class="gradient-0" max-width="200px">
            <v-icon
              :class="{'display-1': $vuetify.breakpoint.smAndDown, 'display-4': $vuetify.breakpoint.mdAndUp}"
            >mdi-cloud</v-icon>
            <v-spacer />
            <v-card-title
              :class="{'mt-2 body-2': $vuetify.breakpoint.smAndDown}"
              class="justify-center"
            >Cloud</v-card-title>
          </v-card>
        </v-flex>

        <v-flex mb-2 md3 xs4>
          <v-card dark class="gradient-1" max-width="200px" max-height="200px">
            <p
              :class="{'headline ': $vuetify.breakpoint.smAndDown, 'mt-5 display-3': $vuetify.breakpoint.mdAndUp}"
              class
            >UI/UX</p>
            <v-spacer />
            <v-card-title
              :class="{'body-2': $vuetify.breakpoint.smAndDown}"
              class="justify-center"
            >Frontend</v-card-title>
          </v-card>
        </v-flex>

        <v-flex mb-2 md3 xs4>
          <v-card dark class="gradient-2" max-width="200px">
            <v-icon
              :class="{'display-1': $vuetify.breakpoint.smAndDown, 'display-4': $vuetify.breakpoint.mdAndUp}"
              class
            >mdi-azure</v-icon>
            <v-spacer />
            <v-card-title
              :class="{'body-2 mt-2': $vuetify.breakpoint.smAndDown}"
              class="justify-center"
            >CI/CD</v-card-title>
          </v-card>
        </v-flex>
        <v-flex md3 />
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "ResumeSection",
  methods: {
    toggleFontVisible() {
      setTimeout(() => {
        this.counter = 0;
      }, 500);
      setTimeout(() => {
        this.remainingFontVisible = true;
      }, 1500);
    }
  },
  computed: {},
  data: () => ({
    remainingFontVisible: false
  }),
  mounted: function() {
    this.toggleFontVisible();
  },
  props: ["date", "stationHeading", "stationBody", "location", "gradient"]
};
</script>



<style scoped>
#progress-bar-container {
  width: 50%;
  height: 5%;
  position: relative;
  transform: translateY(-50%);
  border-radius: 35px;
  overflow: hidden;
}

.progress-bar-child {
  width: 100%;
  height: 100%;
}

.progress {
  color: white;
  text-align: center;
  animation-direction: reverse;
  background: #e5405e;
  /* Old browsers */
  background: -moz-linear-gradient(45deg, #005990, #00e190);
  /* FF3.6-15 */
  background: -webkit-linear-gradient(45deg, #005990, #00e190);
  /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(45deg, #005990, #00e190);
}

.shrinker {
  background-color: darkslategrey;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
}

.timelapse {
  animation-name: timelapse;
  animation-fill-mode: forwards;
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.86, 0.6, 0.6, 0.96);
}

@keyframes timelapse {
  0% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
}
</style>