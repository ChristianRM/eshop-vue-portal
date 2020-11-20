<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-card>
          <Login class="mt-1"></Login>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <Register class="mt-1" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// TODO
// captcha
import Login from "@/components/signin/Login.vue";
import Register from "@/components/signin/Register.vue";

export default {
  name: "Home",
  components: {
    Login,
    Register,
  },
};
</script>

<style>
</style>