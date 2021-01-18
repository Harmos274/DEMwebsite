<template>
  <base-card dark>
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
            The Epicture
          </h1>

          <div class="subheading text-uppercase pl-2 mb-4">
            {{ subtitle }}
          </div>
          <sort-button />
        </v-col>
      </v-row>
    </v-parallax>
  </base-card>
</template>

<script>
  export default {
    name: 'HomeBanner',
    components: {
      SortButton: () => import('@/components/core/SortButton'),
    },

    props: {
      subtitle: {
        type: String,
        required: true,
      },
      background: {
        type: String,
        required: true,
      },
    },
  }
</script>
