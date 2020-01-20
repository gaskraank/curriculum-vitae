<template>
  <v-container>
    <v-layout text-center wrap>
            <v-flex mb-0 xs12>

        <transition name="jade" >
          <p v-if="fontVisible"  class="floating gradient display-4 font-weight-bold mb-3">Product Design</p>
        </transition>
            </v-flex>
      <v-flex mb-0 xs12>
        <transition name="fade" >
          <p v-if="remainingFontVisible" class="display-3 font-weight-regular">
            Imagine all the people
            <br />living life in peace.
          </p>
        </transition>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "MainArea",
  methods: {
    toggleFontVisible() {
      setTimeout(() => {
        this.fontVisible = true;
      }, 500);
      setTimeout(() => {
        this.remainingFontVisible = true;
      }, 1500);
    }
  },
  data: () => ({
    fontVisible: false,
    remainingFontVisible: false
  }),
  mounted: function() {
    this.toggleFontVisible();
  }
};
</script>



<style scoped>
.gradient {
  font-size: 100px;
  background: -webkit-linear-gradient(45deg, #005990, #00e190);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Futura", Helvetica, Arial, sans-serif !important; /* this was it */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;

}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-100px);

}


.jade-enter-active,
.jade-leave-active {
  transition: opacity 0.5s;

}
.jade-enter, .jade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;

}




.floating {  
    animation-name: floating;
    animation-duration: 3s;
    margin-left: 30px;
    margin-top: 5px;
      transition: opacity 3s;

}

@keyframes floating {
    from { transform: translate(0,  15px); }
    65%  { transform: translate(0, 0px); }
}
</style>