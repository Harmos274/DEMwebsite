<template>
  <v-app-bar
    app
    flat
    height="80"
    :color="$route.path === '/portfolio' ? '#121212' : 'white'"
  >
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="toggleDrawer"
    />
    <v-container class="mx-auto py-0">
      <v-row
        align="center"
        :justify="$vuetify.breakpoint.smAndDown ? 'center' : 'start'"
        dense
      >
        <v-col cols="auto">
          <v-img
            :src="$route.path !== '/portfolio' ? require('@/assets/Logo_DEM.gif') : require('@/assets/Dark_Logo_DEM.gif')"
            class="mr-5 "
            contain
            height="48"
            width="48"
            max-width="48"
            @click="$vuetify.goTo(0)"
          />
        </v-col>
        <v-col
          v-for="(link, i) in links"
          :key="i"
          cols="auto"
        >
          <v-btn

            class="hidden-sm-and-down"
            text
            @click="onClick($event, link)"
          >
            {{ link.text }}
          </v-btn>
        </v-col>
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
