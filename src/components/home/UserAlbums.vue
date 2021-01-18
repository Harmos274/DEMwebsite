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
    name: 'HomePosts',

    components: {
      Feed: () => import('@/components/Feed'),
    },
    computed: {
      ...mapState(['user']),
    },
    mounted () {
      this.getUserPictures(this.user)
    },
    methods: {
      ...mapActions(['getUserPictures']),
    },
  }
</script>
