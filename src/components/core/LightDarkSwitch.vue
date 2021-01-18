<template>
  <v-row
    class="fill-height ma-0"
    :justify="align"
  >
    <v-icon class="mr-2">
      mdi-weather-sunny
    </v-icon>
    <v-switch
      v-model="$vuetify.theme.dark"
    />
    <v-icon class="ml-2">
      mdi-weather-night
    </v-icon>
  </v-row>
</template>

<script>
  export default {
    name: 'LightDarkSwitch',
    props: {
      align: { type: String, default: 'center' },
    },
  }
</script>

<style scoped>

</style>
