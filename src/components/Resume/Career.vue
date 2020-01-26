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
  name: "Career",
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
      },
      {
        date: "October 18 - October 19",
        location: "Sindelfingen, Baden-Württemberg",
        headings: "Mercedes-Benz Cars AG",
        body:
          "The department of UX/UI @ Mercedes-Benz is developing the digital in-car assistant called #HeyMercedes. In this team I worked in the area of user and situation-adaptive speech generation in the design and implementation of a prototype for speech recognition and speech generation."
      },
      {
        date: "March 18 - October 18",
        location: "Detroit, Michigan",
        headings: "Mercedes-Benz Research & Development North America Inc.",
        body:
          "Internship at the department of testing and certification for the cars S-Class/E-Class Hybrid and Electric. Supported the Team with automated CAN/FlexRay/LIN-Tests. Additionally developed a new device for test automation on base of an Arduino in car-networking. "
      },
      {
        date: "October 17 - March 18",
        location: "Stuttgart, Baden-Württemberg",
        headings:"Mercedes-Benz Cars AG",
        body:
          "Bachelor's Thesis at the electric powertrain department of the Vans segment of Mercedes-Benz. For the integration of a new CAN-Network architecture I developed a tool for automated software generation from specifications. Additionaly created a mini-Hardware-in-the-Loop together with automated test cases, to validate the software."
      },
      {
        date: "April 17 - October 17",
        location: "Stuttgart, Baden-Württemberg",
        headings:"Mercedes-Benz Cars AG",
        body:
          "Development of a Microcontroller based Headunit-Component to display CAN-Signals from the Central Powertrain Controller. I developed the full product which inherited designing the electrical circuits, the UI/UX and the C++ Codebase for an Arduino Due. "
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