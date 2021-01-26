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
  import UserAlbums from '@/components/home/UserAlbums'
  import Banner from '@/components/Banner'

  export default {
    name: 'Contact',

    components: {
      UserAlbums,
      Banner,
    },
    beforeCreate () {
      document.title = this.$route.name
    },
  }
</script>
