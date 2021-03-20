<template>
  <v-container>
    <banner
      name="Deus Ex Machina Prod"
      :background="require('@/assets/articles/court.jpg')"
      subtitle="Production de contenu vidéo depuis 2018"
    />
    <v-container>
      <h1 class="text-h3 font-weight-light mt-5">
        Introduction
      </h1>
      <p class="text-body-1 my-12 text-justify">
        <strong>Deus Ex Machina Prod</strong> est né en région Nouvelle-Aquitaine au seins même du Lycée Gustave Eiffel à Bordeaux.
        À la base un club cinéma étudiant, nous avons décidé de transformer le club en association à la fin de nos années
        de lycéens.
      </p>
      <h1 class="text-h3 font-weight-light mt-5">
        Notre équipe
      </h1>
      <slide-group class="my-5" />
    </v-container>
  </v-container>
</template>

<script>
  import Banner from '../components/Banner'
  import SlideGroup from '@/components/about/SlideGroup'

  export default {
    name: 'About',

    components: {
      SlideGroup,
      Banner,
    },
    beforeCreate () {
      document.title = this.$route.name
    },
  }
</script>
