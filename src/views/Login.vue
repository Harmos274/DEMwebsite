<template>
  <div id="login">
    <v-container>
      <login-form />
    </v-container>
  </div>
</template>

<script>

  import { mapActions } from 'vuex'

  export default {
    name: 'Login',

    components: {
      LoginForm: () => import('@/components/login/LoginForm'),
    },
    mounted () {
      this.logout()
    },
    beforeCreate () {
      document.title = this.$route.name
    },
    methods: {
      ...mapActions(['logout']),
    },
  }
</script>

<style scoped>

</style>
