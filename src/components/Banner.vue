<template>
  <v-card
    dark
    outlined
    elevation="8"
  >
    <v-parallax
      :src="background"
      class="grey lighten-2"
      height="340"
      width="100%"
    >
      <v-row
        class="fill-height pa-3"
        align="center"
      >
        <v-col
          cols="12"
          md="7"
          offset-md="5"
        >
          <h1 class="display-3 font-weight-light">
            {{ name }}
          </h1>

          <div class="subheading text-uppercase pl-2 mb-4">
            {{ subtitle }}
          </div>
        </v-col>
      </v-row>
    </v-parallax>
  </v-card>
</template>

<script>
  export default {
    name: 'HomeBanner',
    components: {
    },
    props: {
      name: {
        type: String,
        required: false,
        default: '',
      },
      subtitle: {
        type: String,
        required: false,
        default: '',
      },
      background: {
        type: String,
        required: true,
      },
    },
  }
</script>
