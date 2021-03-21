<template>
  <v-app>
    <core-app-bar />
    <core-drawer />

    <core-view />
    <!--    <core-footer />-->
  </v-app>
</template>

<script>
  import CoreDrawer from '@/components/core/Drawer'
  import CoreAppBar from '@/components/core/AppBar'
  import CoreView from '@/components/core/View'

  export default {
    name: 'App',
    components: {
      CoreAppBar,
      CoreDrawer,
      CoreView,
    },
  }
</script>
