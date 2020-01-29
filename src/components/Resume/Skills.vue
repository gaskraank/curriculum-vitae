<template>
  <v-container>
    <v-layout text-center wrap>
      <v-layout
        text-center
        wrap
        :class="{'ml-0 mr-0': $vuetify.breakpoint.smAndDown, 'ml-6 mr-6': $vuetify.breakpoint.mdAndUp}"
      >
        <v-flex md12 xs12>
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

        </v-flex>
                <v-flex class="mb-6" md6 xs12>

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
          <transition mode="out-in" name="fade">

        <v-flex mb-2 md3 xs4>
          <v-card  v-if="remainingFontVisible" color="black" max-width="200px">
           <v-icon color="#5368d6"
              :class="{'display-1': $vuetify.breakpoint.smAndDown, 'display-4': $vuetify.breakpoint.mdAndUp}"
            >mdi-language-javascript</v-icon>
            <v-spacer />
            <v-card-title
              :class="{'body-2': $vuetify.breakpoint.smAndDown}"
              class="  justify-center gradient-2"
            ><p class="gradient-2">JavaScript</p></v-card-title>
          </v-card>
        </v-flex>
                     </transition >

        <v-flex mb-2 md3 xs4>
          <v-card  color="black" max-width="200px">
            <v-icon
            color="#5368d6"
              :class="{'display-1': $vuetify.breakpoint.smAndDown, 'display-4': $vuetify.breakpoint.mdAndUp}"
            >mdi-language-python</v-icon>
            <v-spacer />
            <v-card-title
              :class="{'body-2': $vuetify.breakpoint.smAndDown}"
              class="justify-center gradient-2"
            ><p class="gradient-2">Python</p></v-card-title>
          </v-card>
        </v-flex>
        <v-flex mb-2 md3 xs4>
          <v-card  color="black" max-width="200px">
            <v-icon
            color="#5368d6"
              :class="{'display-1': $vuetify.breakpoint.smAndDown, 'display-4': $vuetify.breakpoint.mdAndUp}"
            >mdi-language-cpp</v-icon>
            <v-spacer />
            <v-card-title
              :class="{'body-2': $vuetify.breakpoint.smAndDown}"
              class="justify-center gradient-2"
            ><p class="gradient-2">Embedded</p></v-card-title>
          </v-card>
        </v-flex>
        <v-flex md3 />

        <v-flex mb-2 md3 xs4>
          <v-card dark color="black" max-width="200px">
            <v-icon
            color="#5368d6"
              :class="{'display-1': $vuetify.breakpoint.smAndDown, 'display-4': $vuetify.breakpoint.mdAndUp}"
            >mdi-language-css3</v-icon>
            <v-spacer />
            <v-card-title
              :class="{'body-2': $vuetify.breakpoint.smAndDown}"
              class="justify-center gradient-2"
            ><p class="gradient-2">CSS3</p></v-card-title>
          </v-card>
        </v-flex>
        <v-flex mb-2 md3 xs4>
          <v-card dark  max-width="200px" color="black" max-height="200px">
            <v-icon color="#5368d6"
              :class="{'display-1': $vuetify.breakpoint.smAndDown, 'display-4': $vuetify.breakpoint.mdAndUp}"
            >mdi-language-csharp</v-icon>
            <v-spacer />
            <v-card-title 
              :class="{'body-2': $vuetify.breakpoint.smAndDown}"
              class="justify-center gradient-2"
            ><p class="gradient-2">Visual C#</p></v-card-title>
          </v-card>
        </v-flex>

        <v-flex mb-2 md3 xs4>
          <v-card dark class="black" max-width="200px">
            <v-icon
            color="#5368d6"
              :class="{'display-1': $vuetify.breakpoint.smAndDown, 'display-4': $vuetify.breakpoint.mdAndUp}"
            >mdi-language-html5</v-icon>
            <v-spacer />
            <v-card-title
              :class="{'body-2': $vuetify.breakpoint.smAndDown}"
              class="justify-center gradient-2"
            ><p class="gradient-2">HTML5</p></v-card-title>
          </v-card>
        </v-flex>
        <v-flex md3 />
        <v-flex class="mt-12" md12 xs12>
          <v-layout>
            <transition mode="out-in" name="fade">
              <p
                v-if="remainingFontVisible"
                class="gradient-2 text-left headline font-weight-regular"
              >Technologies</p>
            </transition>
          </v-layout>
        </v-flex>

        <v-flex mb-2 md3 xs4>
          <v-card dark class='black grey--text max-width="200px"'>
            <v-icon
            color="#5368d6"
              :class="{'display-1': $vuetify.breakpoint.smAndDown, 'display-4': $vuetify.breakpoint.mdAndUp}"
            >mdi-cloud</v-icon>
            <v-spacer />
            <v-card-title
              :class="{'mt-2 body-2': $vuetify.breakpoint.smAndDown}"
              class="justify-center "
            ><p class="gradient-2">Cloud</p></v-card-title>
          </v-card>
        </v-flex>

        <v-flex mb-2 md3 xs4>
          <v-card class='black slategrey' max-width="200px" max-height="200px">
            <p
              :class="{'headline ': $vuetify.breakpoint.smAndDown, 'mt-5 display-3': $vuetify.breakpoint.mdAndUp}"
              
            class='slategrey'>UI/UX</p>
            <v-spacer />
            <v-card-title
              :class="{'body-2': $vuetify.breakpoint.smAndDown}"
              class="justify-center"
            ><p class="gradient-2">Frontend</p></v-card-title>
          </v-card>
        </v-flex>

        <v-flex mb-2 md3 xs4>
          <v-card  
          color="black
          " max-width="200px">
            <v-icon
            color="#5368d6"
              :class="{'display-1': $vuetify.breakpoint.smAndDown, 'display-4': $vuetify.breakpoint.mdAndUp}"
              class="slategrey"
            >mdi-azure</v-icon>
            <v-spacer />
            <v-card-title
              :class="{'body-2 mt-2': $vuetify.breakpoint.smAndDown}"
              class=" justify-center"
            ><p class="gradient-2">CI/CD</p></v-card-title>
          </v-card>
        </v-flex>
                <v-flex md-3 xs-3/>

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
.text {
  -webkit-mask-image: linear-gradient(blue, green);
}
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

.gradient-0 {
  background: -webkit-linear-gradient(45deg, #005990, #00e190);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-mask-image: linear-gradient(45deg, #005990, #00e190);

    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif !important; /* this was it */
}

.gradient-1 {
  background: -webkit-linear-gradient(45deg, #dd5e89, #f7bb97);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif !important; /* this was it */
}
.gradient-2 {
    background: white;
  background: -webkit-linear-gradient(45deg, #4568dc, #b06ab3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif !important; /* this was it */
}
.gradient-4 {
   background: red;
    background: -webkit-linear-gradient(left, orange , yellow, green, cyan, blue, violet);
    background: -o-linear-gradient(right, orange, yellow, green, cyan, blue, violet);
    background: -moz-linear-gradient(right, orange, yellow, green, cyan, blue, violet);
    background: linear-gradient(to right, orange , yellow, green, cyan, blue, violet);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.slategrey{
    color: #5368d6;
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