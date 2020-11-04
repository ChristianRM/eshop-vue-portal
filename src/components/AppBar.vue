<template>
  <v-app-bar app color="primary" hide-on-scroll dark height="80">
    <v-container>
      <v-row>
        <v-btn color="info" height="60" to="/">
          <div class="d-flex align-center">
            <v-icon color="warning">mdi-shopping</v-icon>
            <v-toolbar-title>E-SHOP</v-toolbar-title>
          </div>
        </v-btn>
        <v-spacer></v-spacer>
        <div>
          <v-autocomplete
            prepend-inner-icon="mdi-magnify"
            cache-items
            flat
            hide-no-data
            hide-details
            label="Looking for something?"
            solo-inverted
            rounded
            append-icon=""
          ></v-autocomplete>
        </div>
        <v-spacer></v-spacer>
        <v-btn to="/signin" height="60">
          <div class="d-flex align-center navlink" :to="route">
            <v-icon color="warning">mdi-login</v-icon>
            <v-toolbar-title>Login/Register</v-toolbar-title>
          </div>
        </v-btn>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
  data: () => ({}),
};
</script>

<style>
.navlink {
  cursor: pointer;
}
</style>