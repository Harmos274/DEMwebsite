<template>
  <v-sheet
    flat
    outlined
  >
    <v-carousel
      v-model="carousel"
      hide-delimiters
      cycle
      show-arrows-on-hover
      :height="$vuetify.breakpoint.smAndDown ? '250' : '400'"
    >
      <v-carousel-item
        v-for="(image, i) in images"
        :key="i"
      >
        <v-img
          aspect-ratio="1.778"
          height="100%"
          :src="require(`@/assets/courts/${image}`)"
        >
          <template #placeholder>
            <v-skeleton-loader
              type="image, image"
              tile
            />
          </template>
        </v-img>
      </v-carousel-item>
    </v-carousel>
    <v-card-title
      class="headline"
      @click="show = !show"
    >
      {{ title }}
      <v-spacer />

      <v-btn
        icon
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-title>

    <v-expand-transition>
      <div v-show="show">
        <v-divider />

        <v-card-text>
          {{ description }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-sheet>
</template>

<script>
  export default {
    name: 'Project',
    props: {
      color: { type: String, required: true },
      icon: { type: String, required: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
      images: { type: Array, required: true },
      year: { type: Number, required: true },
    },
    data: function () {
      return {
        show: false,
        carousel: 0,
      }
    },
  }
</script>

<style scoped>

</style>
