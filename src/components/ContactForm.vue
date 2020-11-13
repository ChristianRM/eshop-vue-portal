<template>
  <v-card class="pa-4 ma-6">
    <v-form class="pl-10 pr-10 ma-5" ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-textarea
        v-model="textarea"
        :items="items"
        :rules="[(v) => !!v || 'Item is required']"
        label="Issue"
        required
      ></v-textarea>

      <v-btn color="success"> Send </v-btn>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: "ContactForm",
};
</script>

<style>
</style>