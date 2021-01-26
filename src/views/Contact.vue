<template>
  <div id="home">
    <user-albums>
      <banner
        :background="require('@/assets/articles/blurcamera.jpg')"
        name="Commandes"
        subtitle="Par mail ou nos réseaux"
      />
      <v-container class="mt-sm-3">
        <v-row justify="space-between">
          <v-col
            cols="12"
            md="6"
          >
            <v-card
              outlined
              min-height="100%"
            >
              <v-card-title>
                Réseaux sociaux
              </v-card-title>
              <v-card-text>
                <v-row class="ma-4">
                  <v-col>
                    <v-icon
                      color="red"
                      size="60"
                    >
                      mdi-youtube
                    </v-icon>
                  </v-col>
                </v-row>
                <v-row class="ma-4">
                  <v-col>
                    <v-icon
                      color="blue"
                      size="60"
                    >
                      mdi-facebook
                    </v-icon>
                  </v-col>
                </v-row>
                <v-row class="ma-4">
                  <v-col>
                    <v-icon
                      color="brown"
                      size="60"
                    >
                      mdi-instagram
                    </v-icon>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-card outlined>
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
    </user-albums>
  </div>
</template>

<script>
  import UserAlbums from '@/components/home/UserAlbums'
  import Banner from '@/components/Banner'
  import Forms from '@/components/contact/Forms'

  export default {
    name: 'Contact',

    components: {
      UserAlbums,
      Banner,
      Forms,
    },
    beforeCreate () {
      document.title = this.$route.name
    },
  }
</script>
