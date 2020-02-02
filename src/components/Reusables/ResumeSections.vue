<template>
  <v-layout
    text-center
    wrap
    :class="{'ml-0 mr-0': $vuetify.breakpoint.smAndDown, 'ml-6 mr-6': $vuetify.breakpoint.mdAndUp}"
  >
    <v-flex md6 xs12>
      <transition mode="out-in" name="fade">
        <p
          v-if="remainingFontVisible"
          class=" text-left headline font-weight-regular"
          :class="gradient"
        >{{date}}</p>
      </transition >
    </v-flex>

    <v-flex md6 xs12>
      <transition mode="out-in" name="fade">
        <p v-if="remainingFontVisible" class="text-left .body-1 font-weight-bold">
          <span class="white--text">{{location}}</span>
          <br />
          <span class="grey--text">{{stationHeading}}</span>
        </p>
      </transition>

      <transition mode="out-in" name="fade">
        <p
          v-if="remainingFontVisible"
          class="grey--text text-left .body-1 font-weight-regular"
        >{{stationBody}}</p>
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
    }
  },
  computed: {},
  data: () => ({
    remainingFontVisible: false
  }),
  mounted: function() {
    this.toggleFontVisible();
  },
  props: ["date", "stationHeading", "stationBody", "location","gradient"]
};
</script>



<style scoped>


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>