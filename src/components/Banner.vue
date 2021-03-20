<template>
  <v-card
    dark
    flat
    tile
    elevation="2"
  >
    <v-parallax
      :src="background"
      class="grey lighten-2"
      :height="height || 340"
      width="100%"
    >
      <v-row
        class="fill-height pa-3"
        align="center"
      >
        <v-col
          cols="12"
          md="7"
          offset-md="2"
        >
          <h1 class="display-3 font-weight-light">
            {{ name }}
          </h1>

          <div class="subheading  pl-2 mb-4">
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
    components: {},
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
      height: {
        type: String,
        required: false,
        default: '340',
      },
    },
  }
</script>
