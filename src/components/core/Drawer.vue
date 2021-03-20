<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    temporary
    hide-overlay
    :width="$vuetify.breakpoint.xsOnly ? '100%' : '40%'"
  >
    <v-list-item class="my-4">
      <v-list-item-avatar>
        <v-img :src="require('@/assets/Logo_DEM.gif')" />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>
          Deus Ex Machina Prod
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider />
    <v-list>
      <v-list-item
        v-for="(link, i) in links"
        :key="i"
        @click="onClick($event, link)"
      >
        <v-list-item-icon>
          <v-icon>{{ link.drawerIcon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title
          v-text="link.text"
        />
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import {
    mapGetters,
    mapMutations,
  } from 'vuex'

  export default {
    name: 'CoreDrawer',

    components: {
    },
    computed: {
      ...mapGetters(['links']),

      drawer: {
        get () {
          return this.$store.state.drawer
        },
        set (val) {
          this.setDrawer(val)
        },
      },
    },
    methods: {
      ...mapMutations(['setDrawer']),

      onClick (e, item) {
        e.stopPropagation()
        this.setDrawer(false)

        if (item.to === '/') {
          this.$vuetify.goTo(0)
          return
        }
        if (item.to || !item.href || item.href === this.$router.history.current.path) {
          return
        }

        this.$router.push({ path: item.href })
      },
    },
  }
</script>
