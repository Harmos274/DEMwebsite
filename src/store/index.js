import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

// import FormData from 'form-data'

Vue.use(Vuex)

const vuexStorage = new VuexPersist({
  key: 'sourcelink',
  storage: window.sessionStorage,
})

export const sortType = {
  ASCENDANT: 'up',
  DESCENDANT: 'down',
}

export default new Vuex.Store({
  plugins: [vuexStorage.plugin],
  state: {
    posts: [],
    drawer: false,
    client: {
      id: 'f88190ea07c39e5',
      secret: '13dc0010ffb94537b57bd6ded0a0d0edb702e1d7',
    },
    filters: {
      date: sortType.DESCENDANT,
    },
    user: {
      name: null,
      id: null,
      token: null,
      refresh_token: null,
      profile_picture: null,
    },
    items: [
      {
        text: 'À propos de nous',
        href: '/about',
        drawerIcon: 'mdi-home',
      },
      {
        text: 'Portfolio',
        href: '/portfolio',
        drawerIcon: 'mdi-heart',
      },
      {
        text: 'Nous contacter',
        href: '/contact',
        drawerIcon: 'mdi-upload',
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
    setPPUrl: (state, url) => (state.user.profile_picture = url),

    setUser: (state, newuser) => {
      state.user.name = newuser.name
      state.user.id = newuser.id
      state.user.token = newuser.token
      state.user.refresh_token = newuser.refresh_token
    },

    setDrawer: (state, payload) => (state.drawer = payload),

    toggleDrawer: state => (state.drawer = !state.drawer),

    setPosts: (state, newposts) => (state.posts = newposts),

    clearPosts: (state) => (state.posts = []),

    sortByDate: (state, prop = sortType.DESCENDANT) => {
      if (prop === sortType.DESCENDANT) {
        state.filters.date = sortType.DESCENDANT
        state.posts.sort((a, b) => b.datetime - a.datetime)
      } else if (prop === sortType.ASCENDANT) {
        state.filters.date = sortType.ASCENDANT
        state.posts.sort((a, b) => a.datetime - b.datetime)
      }
    },
  },
  actions: {
  },
})
