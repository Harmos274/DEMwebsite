<template>
  <v-container
    v-cloak
    style="height: 100%"
    @drop.prevent="registerDrop"
    @dragover.prevent
  >
    <h1>Upload</h1>
    <p>Drag and drop your images to upload it !</p>
    <file-input @change="registerFiles" />
    <v-text-field
      v-model="albumName"
      counter
      maxlength="255"
      outlined
      label="Album name"
    />
    <v-btn
      outlined
      block
      :disabled="isEmpty"
      @click="upload($event)"
    >
      Upload
    </v-btn>
    <v-row align="center">
      <v-col
        v-for="(file, i) in files"
        :key="i"
        cols="12"
      >
        <image-preview
          :name="file.name"
          :url="file.url"
          @removed="files.splice(i, 1)"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex'
  import FormData from 'form-data'
  import axios from 'axios'
  import { baseApiUrl } from '@/store'

  export default {
    name: 'Upload',

    components: {
      FileInput: () => import('@/components/upload/FileInput'),
      ImagePreview: () => import('@/components/upload/ImagePreview'),
    },

    data () {
      return {
        files: [],
        albumName: '',
      }
    },

    computed: {
      ...mapState(['user']),

      isEmpty: ({ files }) => files.length === 0,
    },
    beforeCreate () {
      document.title = this.$route.name
    },
    methods: {
      registerFiles (files) {
        files.forEach((file) => {
          if (file.type.startsWith('image/')) {
            this.files.push({
              name: this.getFileName(file),
              url: URL.createObjectURL(file),
            })
          }
        })
      },

      registerDrop (e) {
        this.registerFiles(e.dataTransfer.files)
      },

      upload (e) {
        e.stopPropagation()
        const data = new FormData()
        const files = this.files

        if (this.albumName) {
          data.append('title', this.albumName)
        }
        const config = {
          method: 'post',
          url: `${baseApiUrl}/album`,
          headers: {
            Authorization: 'Bearer ' + this.user.token,
          },
          data: data,
        }

        axios(config).then(response => {
          if (response.status === 200) {
            const albumId = response.data.data.id

            files.forEach(file => fetch(file.url)
              .then(res => res.blob())
              .then(blob => {
                const reader = new FileReader()
                reader.onload = evt => {
                  const image64 = evt.target.result
                  const data = new FormData()

                  data.append('image', image64.substr(image64.indexOf(',') + 1))
                  data.append('type', 'base64')
                  data.append('title', file.name)
                  data.append('album', albumId)

                  const config = {
                    method: 'post',
                    url: `${baseApiUrl}/image`,
                    headers: {
                      Authorization: 'Bearer ' + this.user.token,
                    },
                    data: data,
                  }
                  axios(config).catch(error => console.log(error))
                }
                reader.readAsDataURL(blob)
              }))
          }
        }).catch(error => console.log(error))
        this.albumName = ''
        this.files = []
      },

      getFileName (file) {
        let name = file.name
        const dotPos = name.lastIndexOf('.')

        if (dotPos !== -1) {
          name = name.slice(0, dotPos)
        }
        return name
      },
    },
  }
</script>
