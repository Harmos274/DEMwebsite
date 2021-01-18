<template>
  <v-file-input
    v-model="files"
    accept="image/*"
    label="Browse"
    multiple
    outlined
    placeholder="Select your images"
    prepend-icon="mdi-image"
    @change="handleChange"
  />
</template>

<script>
  export default {
    data () {
      return {
        files: null,
      }
    },

    methods: {
      handleChange (files) {
        this.files = null

        this.$emit('change', files)
      },
    },
  }
</script>

<style scoped>
  /deep/ .v-text-field__details {
    display: none;
  }
</style>
