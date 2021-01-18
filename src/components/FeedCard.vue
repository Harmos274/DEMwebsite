<template>
  <v-col
    cols="12"
    :md="size === 2 ? 6 : size === 3 ? 4 : undefined"
  >
    <base-card
      :height="350"
      color="grey lighten-1"
      dark
      @click="favUnfav($event)"
    >
      <v-img
        :src="getCover(value)"
        height="100%"
        gradient="rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)"
      >
        <v-row
          class="fill-height text-right ma-0"
        >
          <v-col cols="12">
            <v-chip
              v-if="value.account_url"
              label
              class="mx-0 mb-2 text-uppercase"
              color="grey darken-3"
              text-color="white"
              small
              @click.stop=""
            >
              {{ value.account_url }}
            </v-chip>
            <v-chip
              label
              class="mx-1 mb-2 text-uppercase"
              color="grey darken-3"
              text-color="white"
              small
              @click.stop=""
            >
              <div class="pr-1">
                {{ value.views }}
              </div>
              <v-icon
                aria-hidden="true"
                color="grey darken-1"
              >
                mdi-eye
              </v-icon>
            </v-chip>

            <h3 class="title font-weight-bold mb-2">
              {{ value.title }}
            </h3>

            <div class="caption">
              {{ dateTime.date }} <br> {{ dateTime.time }}
            </div>
          </v-col>

          <v-col align-self="end">
            <v-chip
              class="text-uppercase ma-0"
              color="primary"
              label
              small
              @click.stop=""
            >
              More
            </v-chip>
            <v-chip
              class="text-uppercase ml-1"
              color="primary"
              label
              small
              @click="favUnfavButton($event)"
            >
              <v-icon>mdi-heart{{ outlined() }}</v-icon>
            </v-chip>
          </v-col>
        </v-row>
      </v-img>
    </base-card>
  </v-col>
</template>

<script>
  import { mapState } from 'vuex'
  import { baseApiUrl } from '@/store'

  export default {
    name: 'FeedCard',

    props: {
      size: {
        type: Number,
        required: true,
      },
      value: {
        type: Object,
        default: () => ({}),
      },
    },
    data () {
      return {
        liked: this.value.favorite,
        clicks: 0,
        timer: null,
        delay: 200,
      }
    },
    computed: {
      ...mapState(['user']),

      dateTime () {
        const d = new Date(0)

        d.setUTCSeconds(this.value.datetime)
        return { date: d.toDateString(), time: d.toLocaleTimeString() }
      },
    },
    methods: {
      getCover (val) {
        const imgurImgUrl = 'https://i.imgur.com'

        if (val.cover) {
          return `${imgurImgUrl}/${val.cover}.jpg`
        } else if (val.id) {
          return `${imgurImgUrl}/${val.id}.jpg`
        }
      },

      outlined () {
        if (!this.liked) {
          return '-outline'
        }
        return ''
      },

      favUnfav (event) {
        event.stopPropagation()

        this.clicks++
        if (this.clicks === 1) {
          const self = this
          this.timer = setTimeout(function () {
            window.location.href = self.value.link
            self.clicks = 0
          }, this.delay)
        } else {
          this.clicks = 0
          clearTimeout(this.timer)
          this.liked = !this.liked
          this.setFavorite()
        }
      },

      favUnfavButton (event) {
        event.stopPropagation()
        this.liked = !this.liked
        this.setFavorite()
      },

      setFavorite () {
        const axios = require('axios')
        const FormData = require('form-data')
        const data = new FormData()

        const config = {
          method: 'post',
          url: `${baseApiUrl}/album/${this.value.id}/favorite`,
          headers: {
            Authorization: `Bearer ${this.user.token}`,
          },
          data: data,
        }

        axios(config)
          .then()
          .catch((error) => {
            console.log(error)
          })
      },
    },
  }
</script>

<style>
.v-image__image {
  transition: .3s linear;
}
</style>
