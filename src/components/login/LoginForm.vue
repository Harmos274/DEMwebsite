<template>
  <v-card
    flat
    class="mx-auto"
    max-width="800px"
  >
    <v-img
      :src="require('@/assets/logoImgur.png')"
      max-height="500px"
    />

    <v-card-title>
      Connect with imgur
    </v-card-title>
    <v-card-subtitle>
      Please give access to Epicture
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        text
        color="green lighten-2"
        class="align-center"
        @click="imgurLogin($event)"
      >
        Connect
      </v-btn>
      <v-spacer />
    </v-card-actions>
  </v-card>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'LoginForm',

    computed: {
      ...mapState(['client']),
    },

    methods: {
      imgurLogin (e) {
        e.stopPropagation()
        const authUrl = 'https://api.imgur.com/oauth2/authorize'

        window.location.href = authUrl + '?client_id=' + this.client.id + '&response_type=token&state=epicture'
      },
    },
  }
</script>
