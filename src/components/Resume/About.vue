<template>
  <v-container>
    <v-layout text-center wrap>
                          <v-flex md12 xs12 class="hidden-md-and-up"> 
            <p class="gradient-0 text-left headline font-weight-regular">About Me</p>
          </v-flex>
      <v-flex md4 xs12>
        <v-layout>

          <v-card class="primary lighten-1" max-width="300">
            <v-img
            lazy-src=""
              class="white--text align-end"
              height="300px"
              width="300px"
              src="../../../public/baybora.jpg"
            ></v-img>
            <v-card-title>Baybora Gülec</v-card-title>

            <v-card-subtitle class="pb-0 text-left">Age: 25</v-card-subtitle>

            <v-card-text class="text--primary text-left">
              <div>Stuttgart, Germany</div>

              <div>Software Developer, Product Designer</div>
            </v-card-text>
          </v-card>
        </v-layout>
      </v-flex>

      <v-flex   md8 xs12>
        <v-layout wrap>
          <v-flex md12 xs12 class="hidden-sm-and-down"> 
            <p class="gradient-0 text-left headline font-weight-regular">About Me</p>
          </v-flex>
          <v-flex           :class="{'mt-3': $vuetify.breakpoint.smAndDown}"
 md12 xs12>
            <p
              class="silvergrey--text text-left .body-1 font-weight-regular"
            >I'm a software developer with a mechatronical engineering background. In my current position in Silicon Valley as a Frontend developer I am focussing on designing responsive <span class="gradient-0">UI/UX</span> which are solving real customer problems.

I am working in the automative business, which is in a huge structural change. Not only the shift to electrombility but also the <span class="gradient-0">5G Hypercycle</span> will change the whole industry. I want to be a part of designing the future of mobility where the design of any product is not only data-driven but user-centered. <br> In my spare time I am designing & distributing  jewelry as a side business under the brand  <a class="gradient-0" href="https://atelieraltier.de" target="_blank"> Atelier Altier </a>.</p>
          </v-flex>
          <v-flex md12 xs12>
            <p class="gradient-0 text-left headline font-weight-regular">Brands that inspire me</p>
          </v-flex>
          <v-flex md12 xs12>
            <v-layout wrap>
              <v-flex md3 xs3>
                <v-icon
                  :class="{'display-1': $vuetify.breakpoint.smAndDown, 'display-4 mt-6': $vuetify.breakpoint.mdAndUp}"
                >mdi-apple</v-icon>
              </v-flex>
              <v-flex md3 xs3>
                <v-icon
                  :class="{'display-1': $vuetify.breakpoint.smAndDown, 'display-4 mt-6': $vuetify.breakpoint.mdAndUp}"
                >mdi-google</v-icon>
              </v-flex>

              <v-flex md3 xs3>
                <v-img
                  contain
                  :class="{'small-icon': $vuetify.breakpoint.smAndDown, 'big-icon mt-6': $vuetify.breakpoint.mdAndUp}"
                  src="../../../public/adidas.png"
                ></v-img>
              </v-flex>
              <v-flex md3 xs3>
                <v-img
                  contain
                  :class="{'small-icon': $vuetify.breakpoint.smAndDown, 'big-icon mt-6': $vuetify.breakpoint.mdAndUp}"
                  src="../../../public/porsche.png"
                ></v-img>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Education",
  components: {},
  methods: {},
  computed: {},
  data: () => ({
    gradient: "gradient-1",
    sections: [
      {
        date: "March 18 - March 20",
        location: "University of Applied Sciences Reutlingen",
        headings: "Master of Science, Busines Information Systems. Grade-Ø 1.5",
        body:
          "Master thesis candidate @ Speech and Digital Assistants in Silicon Valley Headquarters for Mercedes-Benz North America Inc. "
      },
      {
        date: "March 14 - March 18",
        location: "University of Applied Sciences Ulm",
        headings:
          "Bachelor of Engineering, Medical/Mechatronical Engineering. Grade-Ø 1.8",
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
.small-icon {
  margin-left: 20px;
  height: 35px;
  width: 40px;
}
.big-icon {
  margin-left: 35px;

  height: 100px;
  width: 100px;
}
</style>