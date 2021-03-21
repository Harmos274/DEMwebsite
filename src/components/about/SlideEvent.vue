<template>
  <v-sheet color="transparent">
    <v-row
      justify="start"
      dense
    >
      <v-col
        v-for="(event, index) in events"
        :key="index"
        cols="auto"
      >
        <v-hover v-slot="{hover}">
          <v-card
            flat
            tile
            :color="event.color"
            :dark="event.dark"
          >
            <v-img
              :src="require(`@/assets/events/${event.picture}`)"
              :width="event.width"
            >
              <v-expand-transition>
                <v-card
                  v-if="hover"
                  tile
                  :color="event.color"
                  style="height: 100%;"
                  @click="redirectTo(event.href)"
                >
                  <v-card-title>
                    <v-container>
                      <h3 class="text-h3">
                        {{ event.name }}
                      </h3>
                      {{ event.date }}
                    </v-container>
                  </v-card-title>
                </v-card>
              </v-expand-transition>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
  export default {
    name: 'SlideEvent',
    data () {
      return {
        events: require('@/assets/events.json').sort((a, b) => b.date - a.date),
      }
    },
    methods: {
      redirectTo (href) {
        window.location.href = href
      },
    },
  }
</script>

<style scoped>

</style>
