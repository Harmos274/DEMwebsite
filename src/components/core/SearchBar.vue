<template>
  <v-text-field
    append-icon="mdi-magnify"
    flat
    hide-details
    solo-inverted
    style="max-width: 400px;"
    clearable
    @click:clear="clearQuery($event)"
    @change="onInput($event)"
  />
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  export default {
    name: 'SearchBar',
    computed: {
      ...mapState(['user']),
    },
    methods: {
      ...mapActions(['searchForPictures', 'getUserPictures']),

      clearQuery (e) {
        e.stopPropagation()

        if (this.$route.name !== 'Home') { this.$router.push({ name: 'Home' }) }
        this.getUserPictures(this.user)
      },

      onInput (query) {
        if (this.$route.name !== 'Home') { this.$router.push({ name: 'Home' }) }
        if (query) {
          this.searchForPictures({ user: this.user, query: query })
        } else {
          this.getUserPictures(this.user)
        }
      },
    },
  }
</script>

<style scoped>

</style>
