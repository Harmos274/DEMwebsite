<template>
  <v-container>
    <banner
      :background="require('@/assets/articles/blurcamera.jpg')"
      name="Commandes"
      subtitle="Par mail ou nos réseaux"
    />
    <v-container class="mt-sm-3">
      <v-row
        justify="space-between"
      >
        <v-col
          cols="12"
          md="6"
        >
          <v-card
            flat

            min-height="100%"
          >
            <v-card-title>
              Réseaux sociaux
            </v-card-title>
            <v-card-text>
              <social-networks />
            </v-card-text>
          </v-card>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-card tile>
            <v-card-title>
              Email
            </v-card-title>
            <v-card-text>
              <forms />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
  import Banner from '../components/Banner'
  import Forms from '../components/contact/Forms'
  import SocialNetworks from '@/components/contact/SocialNetworks'

  export default {
    name: 'Contact',

    components: {
      Banner,
      Forms,
      SocialNetworks,
    },
    beforeCreate () {
      document.title = this.$route.name
    },
  }
</script>
