<template>
  <v-container>
    <v-card>
      <v-img
        :src="require('@/assets/404.svg')"
        class="grey lighten-2"
        max-height="600"
        width="100%"
      />
      <v-row
        class="fill-height pa-3"
        align="center"
      >
        <v-col
          offset-md="5"
        >
          <h1 class="display-3 font-weight-light">
            Error 404
          </h1>

          <div class="subheading text-uppercase pl-2 mb-4">
            Invalid url
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'Error404',

    beforeCreate () {
      document.title = this.$route.name
    },
  }
</script>

<style scoped>

</style>
