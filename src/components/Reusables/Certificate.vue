<template>
  <v-layout
    text-center
    wrap
  >
    <v-flex md6 xs12>
      <transition mode="out-in" name="fade">
        <p
          v-if="remainingFontVisible"
          class=" text-left headline font-weight-regular"
          :class="gradient"
        >{{certificateName}}</p>
      </transition >
    </v-flex>

    <v-flex md6 xs12>
      <transition mode="out-in" name="fade">
        <p v-if="remainingFontVisible" class="text-left .body-1 font-weight-bold">
          <span class="white--text">Certificate ID {{certificateNumber}}</span> 
          <br />
          <a target="_blank" :href="certificateUrl" class="grey--text">Show Certificate</a>
        </p>
      </transition>

      <transition mode="out-in" name="fade">
        <p
          v-if="remainingFontVisible"
          class="grey--text text-left .body-1 font-weight-regular"
        >{{certificateDescription}}</p>
      </transition>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "Certificate",
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
  props: ["certificateName","certificateDescription", "certificateNumber","gradient", "certificateUrl"]
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