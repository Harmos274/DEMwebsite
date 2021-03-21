<template>
  <v-sheet
    color="transparent"
  >
    <v-slide-group
      class="pa-1"
    >
      <v-slide-item
        v-for="(people, index) in crew"
        :key="index"
        v-slot="{ active, toggle }"
      >
        <v-card
          :color="active ? 'grey lighten-4' : 'grey lighten-5'"
          class="ma-2"
          height="300"
          flat
          tile
          light
          width="300"
          @click="toggle"
        >
          <v-img
            :src="require(`@/assets/heads/${people.picture}`)"
            height="200px"
          />
          <v-card-title>
            {{ people.name }}
          </v-card-title>

          <v-card-subtitle>
            {{ people.role.join(', ') }}
          </v-card-subtitle>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
  export default {
    name: 'SlideCrew',
    data () {
      return {
        crew: require('@/assets/crew.json'),
      }
    },
  }
</script>

<style scoped>

</style>
