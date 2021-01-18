<template>
  <v-menu
    left
    min-width="200px"
    tile
    bottom
    :close-on-content-click="false"
    origin="top right"
    transition="slide-y-transition"
  >
    <template
      v-slot:activator="{ on, attrs }"
    >
      <v-btn
        icon
        v-bind="attrs"
        v-on="on"
      >
        <v-avatar>
          <profile-picture />
        </v-avatar>
      </v-btn>
    </template>
    <v-list>
      <v-list-item>
        <v-list-item-avatar>
          <profile-picture />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>
            {{ user.name }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <!--      <v-list-item>-->
      <!--        <v-btn-->
      <!--          text-->
      <!--          block-->
      <!--          @click="logUsr($event)"-->
      <!--        >-->
      <!--          Profile-->
      <!--        </v-btn>-->
      <!--      </v-list-item>-->
      <v-list-item>
        <theme-switcher />
      </v-list-item>
      <v-list-item>
        <v-btn
          color="red lighten-2"
          text
          block
          @click="disconnect()"
        >
          Logout
        </v-btn>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'ProfileBtn',

    components: {
      ProfilePicture: () => import('@/components/core/ProfilePicture'),
      ThemeSwitcher: () => import('@/components/core/LightDarkSwitch'),
    },
    computed: {
      ...mapState(['user']),
    },
    mounted () {
      if (!this.user.profile_picture) {
        this.updateProfilePicture(this.user)
      }
    },
    methods: {
      ...mapActions(['updateProfilePicture']),

      disconnect () {
        this.$router.push({ name: 'Login' })
      },
    },
  }
</script>

<style scoped>
</style>
