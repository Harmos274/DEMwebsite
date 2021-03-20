import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

// import FormData from 'form-data'

Vue.use(Vuex)

const vuexStorage = new VuexPersist({
  key: 'sourcelink',
  storage: window.sessionStorage,
})

export default new Vuex.Store({
  plugins: [vuexStorage.plugin],
  state: {
    drawer: false,
    items: [
      {
        text: 'À propos de nous',
        href: '/about',
        drawerIcon: 'mdi-information',
      },
      {
        text: 'Portfolio',
        href: '/portfolio',
        drawerIcon: 'mdi-video-vintage',
      },
      {
        text: 'Nous contacter',
        href: '/contact',
        drawerIcon: 'mdi-email',
      },
    ],
  },
  getters: {
    links: (state) => {
      return state.items
    },
    client: (state) => {
      return state.client
    },
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer),
  },
  actions: {
  },
})
