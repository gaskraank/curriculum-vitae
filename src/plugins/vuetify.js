import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);


export default new Vuetify({
    icons: {
      iconfont: 'mdi',
    },
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: "black",
          secondary: "#6575f0"
        },
          light: {
            primary: "#dedfe6",
            secondary: "#a1a4b8"
          }
  
      },
    },
  
  });
  
  