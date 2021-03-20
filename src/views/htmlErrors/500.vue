<template>
  <v-container>
    <v-sheet>
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
            Error 500
          </h1>

          <div class="subheading text-uppercase pl-2 mb-4">
            Internal server Error
          </div>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script>
  export default {
    name: 'Error500',

    beforeCreate () {
      document.title = this.$route.name
    },
  }
</script>

<style scoped>

</style>
