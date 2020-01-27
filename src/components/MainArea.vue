<template>
  <div>
    <v-content>
      <v-container fill-height>
        <v-layout
          text-center
          wrap
          :class="{'ml-1 mr-1': $vuetify.breakpoint.smAndDown, 'ml-6 mr-6': $vuetify.breakpoint.mdAndUp}"
        >
          <v-flex xs12>
            <transition name="jade" mode="in-out">
              <p
                v-if="counter==0"
                :class="bigFont"
                class="gradient-0 text-md-left floating font-weight-bold"
              >{{heading}}</p>
              <p
                v-if="counter==1"
                :class="bigFont"
                class="gradient-1 text-md-left floating font-weight-bold"
              >{{heading}}</p>
              <p
                v-if="counter==2"
                :class="bigFont"
                class="gradient-2 text-md-left floating font-weight-bold"
              >{{heading}}</p>
            </transition>
          </v-flex>
          <v-flex md6 xs12>
            <transition name="fade">
              <p v-if="remainingFontVisible" class="text-left display-1 font-weight-regular">
                Imagine all the people
                <br />living life in peace.
              </p>
            </transition>
          </v-flex>
          <v-spacer />
          <br />
          <v-flex md6 xs12>
            <transition name="fade">
              <p
                v-if="remainingFontVisible"
                class="grey--text text-left .body-1 font-weight-regular"
              >
                Hi, my name is Baybora. I'm a software developer with a mechatronical engineering background.
                I love beautiful designed products, so I started getting into UI/UX & Design. You can look through my career and my resume and also get in contact with me.
              </p>
            </transition>
          </v-flex>
          <br />
          <v-flex mt-8 wrap md12 xs12>
            <transition name="fade">
              <v-toolbar v-if="remainingFontVisible" color="black">
                <v-spacer />
                <v-chip-group v-model="selection" mandatory>
                  <v-chip
                    v-for="section in sections"
                    :key="section.section"
                    :active-class="section.gradient"
                    :value="section.section"
                    class="black"
                  >{{section.section}}</v-chip>
                </v-chip-group>
                <v-spacer />
              </v-toolbar>
            </transition>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-content>
      <v-container fill-height>
        <transition name="slide-fade">
          <Career v-show="selection == 'Career'" />
        </transition>
        <transition name="slide-fade">
          <Education v-show="selection == 'Education'" />
        </transition>
                <transition name="slide-fade">
          <Skills v-show="selection == 'Skills'" />
        </transition>
                <transition name="slide-fade">
          <About v-show="selection == 'About'" />
        </transition>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import Career from "./Resume/Career";
import Education from "./Resume/Education";
import Skills from "./Resume/Skills";
import About from "./Resume/About";

export default {
  name: "MainArea",
  components: {
    Career,
    Education,
    Skills,
    About
  },
  methods: {
    toggleFontVisible() {
      setTimeout(() => {
        this.counter = 0;
      }, 500);
      setTimeout(() => {
        this.remainingFontVisible = true;
      }, 1500);
    },
    changeHeading() {
      setInterval(() => {
        this.fontVisible = false;
        this.counter++;
        if (this.counter > 2) this.counter = 0;
        this.heading = this.headings[this.counter];
        this.gradient = "gradient-" + this.counter;
        this.fontVisible = true;
      }, 5000);
    }
  },
  computed: {
    // a computed getter
    bigFont: function() {
      /* eslint no-console: ["error", { allow: ["warn", "error"] }] */
      console.warn(this.$vuetify.breakpoint.mdAndUp);
      if (this.$vuetify.breakpoint.mdAndUp) {
        return "big-font";
      } else {
        return "display-4";
      }
    }
  },
  data: () => ({
    fontVisible: false,
    remainingFontVisible: false,
    counter: -1,
    heading: "Product.",
    headings: ["Product.", "UI/UX.", "Design."],
    gradient: "gradient-0",
    gradients: ["gradient-0", "gradient-1", "gradient-2", "gradient-3"],

    selection: "Career",
    sections: [
      { section: "Career", gradient: "chip-gradient-0" },
      { section: "Education", gradient: "chip-gradient-1" },
      { section: "Skills", gradient: "chip-gradient-2" },
      { section: "About", gradient: "chip-gradient-3" }
    ]
  }),
  mounted: function() {
    this.toggleFontVisible();
    this.changeHeading();
  }
};
</script>



<style scoped>
.big-font {
  font-size: 30vh !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-100px);
}

.jade-enter-active,
.jade-leave-active {
  transition: opacity 0.5s;
}
.jade-enter, .jade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.floating {
  animation-name: floating;
  animation-duration: 3s;
  transition: opacity 3s;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.chip-gradient-0 {
  background: -webkit-linear-gradient(45deg, #005990, #00e190);
}

.chip-gradient-1 {
  background: -webkit-linear-gradient(45deg, #dd5e89, #f7bb97);
}
.chip-gradient-2 {
  background: -webkit-linear-gradient(45deg, #4568dc, #b06ab3);
}
.chip-gradient-3 {
  background: -webkit-linear-gradient(45deg, #005990, #00e190);
}

@keyframes floating {
  from {
    transform: translate(0, 15px);
  }
  65% {
    transform: translate(0, 0px);
  }
}
</style>

<style>
.gradient-0 {
  background: -webkit-linear-gradient(45deg, #005990, #00e190);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif !important; /* this was it */
}

.gradient-1 {
  background: -webkit-linear-gradient(45deg, #dd5e89, #f7bb97);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif !important; /* this was it */
}
.gradient-2 {
  background: -webkit-linear-gradient(45deg, #4568dc, #b06ab3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif !important; /* this was it */
}
</style>