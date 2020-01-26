<template>
  <v-container>
    <v-layout text-center wrap ml-6 mr-6>
      <ResumeSections
        v-bind:key="content.date"
        v-for="content in sections"
        :date="content.date"
        :stationHeading="content.headings"
        :stationBody="content.body"
        :location="content.location"
        :gradient="gradient"
      />
    </v-layout>
  </v-container>
</template>

<script>
import ResumeSections from "./ResumeSections";
export default {
  name: "Education",
  components: { ResumeSections },
  methods: {},
  computed: {},
  data: () => ({
    gradient: "gradient-1",
    sections: [
      {
        date: "March 2018 - March 2020",
        location: "University of Applied Sciences Reutlingen",
        headings: "Master of Science, Busines Information Systems. Grade-Ø 1.5",
        body:
          "Master thesis candidate @ Speech and Digital Assistants in Silicon Valley Headquarters for Mercedes-Benz North America Inc. "
      },
      {
        date: "March 2014 - March 2018",
        location: "University of Applied Sciences Ulm",
        headings: "Bachelor of Engineering, Medical/Mechatronical Engineering. Grade-Ø 1.8",
        body:
          "Bachelor's Degree in the area of Medical/Mechatronical Engineering. In the studies I had a special focus on electrical and software engineering."
      }
    ]
  }),
  mounted: function() {}
};
</script>



<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>