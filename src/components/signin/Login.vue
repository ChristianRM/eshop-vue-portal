<template>
  <v-form class="pa-12" ref="form" v-model="valid" lazy-validation>
    <div class="text-h4 font-weight-medium text-center">
      <p>Login</p>
    </div>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      :counter="10"
      :rules="passwordRules"
      :type="'password'"
      label="Password"
      required
    ></v-text-field>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
      Log In
    </v-btn>
  </v-form>
</template>
Name
<script>
export default {
  name: "Login",
  data: () => ({
    valid: true,
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) =>
        (v && v.length <= 10) || "Password must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>