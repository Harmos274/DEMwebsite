<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <slot />
      </v-col>

      <feed-card
        v-for="(picture, i) in paginatedPictures"
        :key="picture.id"
        :size="layout[i]"
        :value="picture"
      />
    </v-row>

    <v-row align="center">
      <v-col cols="3">
        <base-btn
          v-if="page !== 1"
          class="ml-0"
          square
          title="Previous page"
          @click="page--"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </base-btn>
      </v-col>

      <v-col
        v-if="pages > 0"
        class="text-center subheading"
        cols="6"
      >
        PAGE {{ page }} OF {{ pages }}
      </v-col>

      <v-col
        class="text-right"
        cols="3"
      >
        <base-btn
          v-if="pages > 1 && page < pages"
          class="mr-0"
          square
          title="Next page"
          @click="page++"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </base-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  // Utilities
  import {
    mapState,
  } from 'vuex'

  export default {
    name: 'Feed',

    components: {
      FeedCard: () => import('@/components/FeedCard'),
    },

    data: () => ({
      layout: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      page: 1,
    }),

    computed: {
      ...mapState(['posts', 'user']),

      pages () {
        return Math.ceil(this.posts.length / 12)
      },

      paginatedPictures () {
        const start = (this.page - 1) * 12
        const stop = this.page * 12

        return this.posts.slice(start, stop)
      },
    },
    watch: {
      page () {
        window.scrollTo(0, 0)
      },
    },
  }
</script>
