import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#59728b',
        secondary: '#083759',
      },
      dark: {
        primary: '#64819e',
        secondary: '#083759',
      },
    },
  },
})
