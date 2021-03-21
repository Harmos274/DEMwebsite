<template>
  <v-container>
    <banner
      name="Deus Ex Machina Prod"
      :background="require('@/assets/articles/court.jpg')"
      subtitle="Production de contenu vidéo depuis 2018"
    />
    <v-container>
      <h1 class="text-h3 font-weight-light mt-12">
        Introduction
      </h1>
      <p class="text-body-1 mt-12 text-justify">
        <strong>Deus Ex Machina Prod</strong> est né en région Nouvelle-Aquitaine au sein même du Lycée Gustave Eiffel à Bordeaux.
        À la base un club cinéma étudiant, nous avons décidé de transformer le club en association à la fin de nos années
        de lycéens.
      </p>
      <p class="text-body-1 text-justify mb-12">
        Au départ composé quasi exclusivement de membres originaux du club, nous avons été rejoints avec le temps par de
        nouvelles têtes. Étudiants dans différents milieux allant du cinéma jusqu'à la biologie et l'informatique, la
        divergence de nos modes de pensée a prouvé à maintes reprises son efficacité lors de la réalisation d'un tournage
        ou l'écriture d'un scénario.
      </p>

      <h1
        class="text-h3 font-weight-light"
      >
        Évènements
      </h1>
      <slide-event class="my-5" />

      <h1 class="text-h3 font-weight-light mt-12">
        Membres
      </h1>
      <slide-crew class="my-5" />
    </v-container>
  </v-container>
</template>

<script>
  import Banner from '../components/Banner'
  import SlideCrew from '@/components/about/SlideCrew'
  import SlideEvent from '@/components/about/SlideEvent'
  export default {
    name: 'About',

    components: {
      SlideEvent,
      SlideCrew,
      Banner,
    },
    beforeCreate () {
      document.title = this.$route.name
    },
  }
</script>
