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
    sections: [
      {
        date: "October 19 - now",
        location: "Silicon Valley, Sunnyvale California",
        headings:
          "Mercedes-Benz Research & Development North America Inc.",
        body: "Master thesis candidate @ Speech and Digital Assistants in Silicon Valley Headquarters for Mercedes-Benz North America Inc. Mainly doing frontend development, UI/UX for internal & future external products for data collection. Designed a chat-bot for simulating the digital in-car assistant in a WebApp.  "
      }
    ]
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