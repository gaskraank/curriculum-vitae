<template>
    <v-layout text-center wrap ml-6 mr-6>
    
      <v-flex md6 xs12>
        <transition name="fade">
          <p class="gradient-0 text-md-left headline font-weight-regular">{{date}}</p>
        </transition>
      </v-flex>

      <v-flex md6 xs12>
        <transition name="fade">
          <p
            class="grey--white text-md-left .body-1 font-weight-bold"
          >{{stationHeading}}</p>
        </transition>

        <transition name="fade">
          <p class="grey--text text-md-left .body-1 font-weight-regular">
            {{stationBody}}
          </p>
        </transition>
      </v-flex>
    </v-layout>
</template>

<script>
export default {
  name: "ResumeSection",
  methods: {},
  computed: {},
  data: () => ({}),
  mounted: function() {},
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
</style>