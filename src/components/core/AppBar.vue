<template>
  <v-app-bar
    app
    flat
  >
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="toggleDrawer"
    />
    <v-container class="mx-auto py-0">
      <v-row align="center">
        <v-img
          :src="require('@/assets/logo.svg')"
          class="mr-5 hidden-sm-and-down"
          contain
          height="48"
          width="48"
          max-width="48"
          @click="$vuetify.goTo(0)"
        />
        <v-btn
          v-for="(link, i) in links"
          :key="i"
          class="hidden-sm-and-down"
          text
          @click="onClick($event, link)"
        >
          {{ link.text }}
        </v-btn>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
  import {
    mapGetters,
    mapMutations,
  } from 'vuex'

  export default {
    name: 'CoreAppBar',

    components: {
    },
    computed: {
      ...mapGetters(['links']),
    },
    methods: {
      ...mapMutations(['toggleDrawer']),

      onClick (e, route) {
        e.stopPropagation()

        if (route.href === this.$router.history.current.path) {
          return
        }
        this.$router.push({ path: route.href })
      },
    },
  }
</script>
