<template>
<v-container>
    <v-layout text-center wrap ml-6 mr-6>

      <ResumeSections v-bind:key="content.date" v-for="content in sections" :date='content.date' :stationHeading='content.headings' :stationBody='content.body' />
     
    </v-layout>
</v-container>
</template>

<script>
import ResumeSections from './ResumeSections'
export default {
  name: "Career",
  components: {ResumeSections},
  methods: {},
  computed: {},
  data: () => ({
      sections : [
          
    {date: 'October 19 - now', headings: 'Mercedes-Benz Research & Development North America Inc., Silicon Valley California', body: 'aosdjasodasfpias'},
    {date: 'October 18 - October 19', headings: 'Mercedes-Benz Cars AG, Sindelfingen, Baden-Württemberg', body: 'The department of UX/UI @ Mercedes-Benz is developing the digital in-car assistant called #HeyMercedes. In this team I worked in the area of user and situation-adaptive speech generation in the design and implementation of a prototype for speech recognition and speech generation.'},
    {date: 'March 18 - October 18', headings: 'Mercedes-Benz Research & Development North America Inc., Detroit Michigan', body: 'Internship at the department of testing and certification for the cars S-Class/E-Class Hybrid and Electric. Supported the Team with automated CAN/FlexRay/LIN-Tests. Additionally developed a new device for test automation on base of an Arduino in car-networking. '}]

  }),
  mounted: function() {}
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