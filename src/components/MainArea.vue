<template>
<div>
<v-content>
  <v-container  fill-height>
    <v-layout  text-center wrap ma-6>
            <v-flex  xs12>

        <transition name="jade" mode="in-out">
          <p v-if="counter==0"  :class="bigFont" class=" gradient-0 text-md-left floating  font-weight-bold ">{{heading}}</p>
          <p v-if="counter==1"  :class="bigFont" class="gradient-1 text-md-left floating font-weight-bold ">{{heading}}</p>
          <p v-if="counter==2"  :class="bigFont" class="gradient-2  text-md-left floating font-weight-bold ">{{heading}}</p>
        </transition>
            </v-flex>
      <v-flex  md6 xs12>
        <transition name="fade" >
          <p v-if="remainingFontVisible" class="text-md-left display-1 font-weight-regular">
            Imagine all the people
            <br />living life in peace.
          </p>
        </transition>
      </v-flex>
      <v-spacer/>
    <br>
            <v-flex md6  xs12>
        <transition name="fade" >
          <p  v-if="remainingFontVisible"  class="grey--text text-md-left  .body-1 font-weight-regular">
            Hi, my name is Baybora. I'm a software developer with a mechatronical engineering background. 
            I love beautiful designed products, so I started getting into UI/UX & Design. You can look through my career and my resume and also get in contact with me.
          </p>
        </transition>
      </v-flex>
          <br>

        <v-flex  mt-8 wrap md12  xs12>
        <transition name="fade" >
 
        <v-tool-bar  v-if="remainingFontVisible"   color="primary">

<v-chip-group
          v-model="selection"
          active-class="chip-gradient"
          mandatory
        >
                          <v-spacer/>

          <v-chip class="black" >Career</v-chip>
          <v-chip class="black">Education</v-chip>
          <v-chip class="black">Skills</v-chip>
          <v-chip class="black">About</v-chip>
                                    <v-spacer/>

        </v-chip-group>

      </v-tool-bar>
        </transition>
      </v-flex>

    </v-layout>
  </v-container>
</v-content>


  </div>

</template>

<script>
export default {
  name: "MainArea",
  methods: {
    toggleFontVisible() {
      setTimeout(() => {
        this.counter = 0
      }, 500);
      setTimeout(() => {
        this.remainingFontVisible = true;
      }, 1500);
    },
    changeHeading()
    {
      setInterval(() =>
      { 
        this.fontVisible = false
        this.counter++;
        if(this.counter >2) this.counter = 0
        this.heading = this.headings[this.counter]
        this.gradient = "gradient-" + this.counter
        this.fontVisible = true
      }, 5000);
    }
  },
  computed: {
    // a computed getter
    bigFont: function () {
              /* eslint no-console: ["error", { allow: ["warn", "error"] }] */
console.warn(this.$vuetify.breakpoint.mdAndUp)
     if(this.$vuetify.breakpoint.mdAndUp)
      {
        return "big-font"
      }
      else{
                return "display-3"

      }
    }
  },
  data: () => ({
    fontVisible: false,
    remainingFontVisible: false,
    counter: -1,
    heading: "Product.",
    headings: ["Product.", "UI/UX.", "Design."],
    gradient: "gradient-0"
  }),
  mounted: function() {
    this.toggleFontVisible();
    this.changeHeading();
  }
};
</script>



<style scoped>
.gradient-0 {
  background: -webkit-linear-gradient(45deg, #005990, #00e190);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif !important; /* this was it */
}

.chip-gradient {
    background: -webkit-linear-gradient(45deg, #005990, #00e190);
}

.gradient-1 {
  background: -webkit-linear-gradient(45deg, #dd5e89, #f7bb97);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif !important; /* this was it */
}
.gradient-2 {
  background: -webkit-linear-gradient(45deg, #4568dc, #b06ab3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif !important; /* this was it */
}

.big-font{
  font-size: 20vh !important;
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


.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}




.floating {  
    animation-name: floating;
    animation-duration: 3s;
      transition: opacity 3s;

}

@keyframes floating {
    from { transform: translate(0,  15px); }
    65%  { transform: translate(0, 0px); }
}
</style>