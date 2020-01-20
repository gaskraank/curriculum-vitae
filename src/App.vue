<template>
  <v-app  style="background: black">
    <Header />

    <v-content >
      <MainArea/>
    </v-content>
  </v-app>
</template>

<script>
import MainArea from './components/MainArea';
import Header from './components/Header'
export default {
  name: 'App',

  components: {
    MainArea,
    Header
  },

  data: () => ({
    //
  }),
};
</script>





<style>
#app {
  font-family: 'Futura', Helvetica, Arial, sans-serif; /* this was it */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;


}



</style>