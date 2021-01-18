<template>
  <div id="oauthcallback" />
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: 'OAuthCallback',

    created () {
      const queryString = location.hash.substring(1)
      const result = queryString.split('&')
        .reduce(function (result, item) {
          const parts = item.split('=')

          result[parts[0]] = parts[1]
          return result
        }, {})

      if (result.state !== 'epicture') {
        this.$router.push({ name: 'Error500' })
      }

      const newuser = {
        name: result.account_username,
        id: result.account_id,
        token: result.access_token,
        refresh_token: result.refresh_token,
      }

      this.setUser(newuser)
      this.$router.push({ name: 'Home' })
    },
    methods: {
      ...mapMutations(['setUser']),
    },
  }
</script>

<style scoped>

</style>
