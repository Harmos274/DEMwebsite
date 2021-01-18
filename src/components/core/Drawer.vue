<template>
  <v-navigation-drawer
    v-if="$route.name !== 'Login'"
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
        <v-list-group
          :value="true"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-avatar>
              <profile-picture />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ user.name }}</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item>
            <v-list-item-content>
              <theme-switcher align="start" />
            </v-list-item-content>
          </v-list-item>
          <!--          <v-list-item>-->
          <!--            <v-list-item-content>-->
          <!--              <v-list-item-title v-text="'Profile'" />-->
          <!--            </v-list-item-content>-->
          <!--          </v-list-item>-->
          <v-list-item @click="$router.push({name: 'Login'})">
            <v-list-item-content>
              <v-list-item-title
                class="red--text"
                v-text="'Disconnect'"
              />
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import {
    mapGetters,
    mapMutations,
    mapState,
  } from 'vuex'

  export default {
    name: 'CoreDrawer',

    components: {
      ProfilePicture: () => import('@/components/core/ProfilePicture'),
      ThemeSwitcher: () => import('@/components/core/LightDarkSwitch'),
    },
    computed: {
      ...mapGetters(['links']),
      ...mapState(['user']),

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
