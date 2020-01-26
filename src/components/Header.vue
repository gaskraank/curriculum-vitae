    <template>
  <v-app-bar app color="black" dark>
    <v-spacer />
    <v-spacer></v-spacer>

    <div class=" align-center">
      <transition name="fade">
        <v-img
          v-if="appBarVisible"
          alt="Baybora Guelec"
          class=
          contain
          src="../../public/logo.png"
          width="85"
        />
      </transition>
    </div>

    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>

    <transition name="fade">
      <v-btn
        v-if="appBarVisible"
        color="grey"
        href="https://www.linkedin.com/in/baybora-gülec-60465a160"
        target="_blank"
        text
      >
        <span class="mr-0 text">LinkedIN</span>
      </v-btn>
    </transition>
    <transition name="fade">
      <v-btn
        v-if="appBarVisible"
        color="grey"
        href="https://www.xing.com/profile/Baybora_Guelec"
        target="_blank"
        text
      >
        <span class="mr-0 text">XING</span>
      </v-btn>
    </transition>

      <transition name="fade">
      <v-btn
        v-if="appBarVisible"
        color="grey"
        href="https://github.com/gaskraank"
        target="_blank"
        text
      >
        <span class="mr-0 text">GitHub</span>
      </v-btn>
  </transition>
    <transition name="fade">
      <v-btn v-if="appBarVisible" color="grey"  target="_blank" text>
        <span class="mr-0 text">bayboragulec@gmail.com</span>
      </v-btn>
    </transition>
    <v-spacer />

    <v-spacer />

  </v-app-bar>
</template>
      
    
    <script>
export default {
  name: "Header",
  methods: {
    toggleAppBarVisible() {
      setTimeout(() => {
        this.appBarVisible = true;
      }, 1500);
    }
  },
  data: () => ({
    appBarVisible: false
  }),
  mounted: function() {
    this.toggleAppBarVisible();
  }
};
</script>
    
   <style scoped>
.v-btn:before {
  color: black !important;
}
.text:hover {
  color: white;
  transition: color 0.5s linear; /* vendorless fallback */
  -o-transition: color 0.5s linear; /* opera */
  -ms-transition: color 0.5s linear; /* IE 10 */
  -moz-transition: color 0.5s linear; /* Firefox */
  -webkit-transition: color 0.5s linear; /*safari and chrome */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>