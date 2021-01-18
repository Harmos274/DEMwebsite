<template>
  <div id="home">
    <user-albums>
      <banner
        :background="require('@/assets/articles/blurcamera.jpg')"
        subtitle="Imgur Elegant"
      />
    </user-albums>
  </div>
</template>

<script>

  export default {
    name: 'Home',

    components: {
      UserAlbums: () => import('@/components/home/UserAlbums'),
      Banner: () => import('@/components/Banner'),
    },
    beforeCreate () {
      document.title = this.$route.name
    },
  }
</script>
