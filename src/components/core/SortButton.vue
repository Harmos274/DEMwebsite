<template>
  <v-container>
    <v-btn
      color="primary"
      class="mr-2 mt-1"
      depressed
      @click="reverseDateSorting($event)"
    >
      Date
      <v-icon class="ml-3">
        mdi-chevron-{{ filters.date.valueOf() }}
      </v-icon>
    </v-btn>
  </v-container>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import { sortType } from '@/store'

  export default {
    name: 'SortButton',

    computed: {
      ...mapState(['filters']),
    },
    methods: {
      ...mapMutations(['sortByDate']),

      reverseDateSorting (e) {
        e.stopPropagation()

        if (this.filters.date === sortType.ASCENDANT) {
          this.sortByDate(sortType.DESCENDANT)
        } else if (this.filters.date === sortType.DESCENDANT) {
          this.sortByDate(sortType.ASCENDANT)
        }
      },
    },
  }
</script>

<style scoped>

</style>
