<template>
    <v-layout text-center wrap
    :class="{'ml-0 mr-0': $vuetify.breakpoint.smAndDown, 'ml-6 mr-6': $vuetify.breakpoint.mdAndUp}"
     >
    
      <v-flex md6 xs12>
        <transition name="fade">
          <p v-if="remainingFontVisible" 
          class="gradient-0 text-md-left headline font-weight-regular">{{date}}</p>
        </transition>
      </v-flex>

      <v-flex md6 xs12>
        <transition  name="fade">
          <p v-if="remainingFontVisible"
            class="grey--white text-md-left .body-1 font-weight-bold"
          >{{stationHeading}}</p>
        </transition>

        <transition name="fade">
          <p  v-if="remainingFontVisible"
          class="grey--text text-md-left .body-1 font-weight-regular">
            {{stationBody}}
          </p>
        </transition>
      </v-flex>
    </v-layout>
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
    },
  },
  computed: {
  },
  data: () => ({
        remainingFontVisible: false,

  }),
  mounted: function() {this.toggleFontVisible()},
  props: ['date', 'stationHeading', 'stationBody']
};
</script>



<style scoped>
.gradient-0 {
  background: -webkit-linear-gradient(45deg, #005990, #00e190);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif !important; /* this was it */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>