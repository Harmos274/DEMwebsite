<template>
  <section id="feed">
    <feed>
      <slot />
    </feed>
  </section>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  export default {
    name: 'FavAlbum',

    components: {
      Feed: () => import('@/components/Feed'),
    },
    computed: {
      ...mapState(['user']),
    },
    mounted () {
      this.getUserFavorites(this.user)
    },
    methods: {
      ...mapActions(['getUserFavorites']),
    },
  }
</script>
