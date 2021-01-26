<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    temporary
  >
    <v-list>
      <v-list-item
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
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

    <template v-slot:append>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <theme-switcher align="center" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </template>
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
      ThemeSwitcher: () => import('@/components/core/LightDarkSwitch'),
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

        if (item.to === '/') {
          this.$vuetify.goTo(0)
          this.setDrawer(false)
          return
        }
        if (item.to || !item.href) {
          return
        }
        this.$router.push({ path: item.href })
        this.setDrawer(false)
      },
    },
  }
</script>
