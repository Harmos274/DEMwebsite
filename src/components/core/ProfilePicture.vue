<template>
  <v-img
    :src="user.profile_picture"
    :alt="user.name"
  >
    <template v-slot:placeholder>
      <v-row
        class="fill-height ma-0"
        align="center"
        justify="center"
      >
        <v-icon>mdi-account-circle</v-icon>
      </v-row>
    </template>
  </v-img>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'ProfilePicture',
    computed: {
      ...mapState(['user']),
    },
  }
</script>

<style scoped>

</style>
