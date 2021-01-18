<template>
  <v-card>
    <div class="d-flex flex-no-wrap justify-space-between">
      <div class="d-flex flex-no-wrap justify-space-between">
        <v-avatar
          tile
          size="75"
        >
          <v-img :src="url">
            <template v-slot:placeholder>
              <v-icon>
                mdi-image
              </v-icon>
            </template>
          </v-img>
        </v-avatar>
        <v-card-title>{{ name }}</v-card-title>
      </div>
      <v-card-actions>
        <v-btn
          icon
          color="red"
          @click="$emit('removed')"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
  export default {
    props: {
      url: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
  }
</script>
