<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      label="Nom"
      :rules="nameRules"
      required
      outlined
      dense
    />

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
      dense
      outlined
    />
    <v-textarea
      v-model="text"
      label="Texte"
      :rules="textRules"
      required
      outlined
    />

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      depressed
      @click="validate"
    >
      Envoyer
    </v-btn>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      email: '',
      text: '',
      emailRules: [
        v => !!v || 'Un e-mail est requis',
        v => /.+@.+\..+/.test(v) || "L'email doit être valide",
      ],
      nameRules: [
        v => !!v || 'Un nom est requis',
      ],
      textRules: [
        v => !!v || 'Un message est requis',
      ],

    }),
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
    },
  }
</script>

<style scoped>

</style>
