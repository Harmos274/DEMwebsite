<template>
  <fav-album>
    <banner
      :background="require('@/assets/articles/mountain.jpg')"
      subtitle="Favorites Elegant"
    />
  </fav-album>
</template>

<script>
  export default {
    name: 'Favorites',

    components: {
      FavAlbum: () => import('@/components/favorites/FavAlbums'),
      Banner: () => import('@/components/Banner'),
    },
    beforeCreate () {
      document.title = this.$route.name
    },
  }
</script>

<style scoped>

</style>
