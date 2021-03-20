<template>
  <v-container>
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="2"
        md="1"
      >
        <v-container>
          <v-slider
            v-model="years"
            :class="!$vuetify.breakpoint.xsOnly ? 'year-slider': ''"
            :vertical="!$vuetify.breakpoint.xsOnly"
            :tick-labels="yearsLabel"
            :max="yearsLabel.length - 1"
            step="1"
            ticks="always"
            tick-size="0"
            color="grey darken-3"
            thumb-color="black"
            track-color="lighten-4"
          />
        </v-container>
      </v-col>

      <v-col
        cols="12"
        sm="10"
        md="11"
      >
        <v-container
          class="fill-height"
        >
          <v-row
            justify="start"
            dense
          >
            <v-col
              v-for="(item, i) in yearsProjects"
              :key="i"
              cols="12"
              sm="12"
              md="6"
              lg="6"
              xl="6"
            >
              <project
                :color="item.color"
                :title="item.title"
                :description="item.description"
                :icon="item.icon"
                :images="item.images"
                :year="item.date"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Project from '@/components/portfolio/Projects'
  export default {
    name: 'Portfolio',

    components: {
      Project,
    },
    data () {
      return {
        projects: require('../assets/portfolio.json').sort((a, b) => b.date - a.date),
        years: 0,
      }
    },
    computed: {
      yearsLabel () {
        return [...new Set(this.projects.map(it => it.date).reverse()), 'Tous']
      },
      yearsProjects () {
        if (this.years === this.yearsLabel.length - 1) {
          return this.projects
        }
        return this.projects.filter(it => it.date === this.yearsLabel[this.years])
      },
    },
    created () {
      this.years = this.yearsLabel.length - 1
    },
    beforeCreate () {
      document.title = this.$route.name
    },
  }
</script>

<style scoped>
.year-slider >>> .v-slider{
  position: fixed;
  top: 30vh;
  left: 8vw;
  height: 40vh;
}
</style>
