<template>
  <v-app-bar app color="primary" hide-on-scroll dark height="80">
    <v-container>
      <v-row>
        <v-btn color="info" height="60">
          <div class="d-flex align-center">
            <v-icon color="warning">mdi-shopping</v-icon>
            <v-toolbar-title>E-SHOP</v-toolbar-title>
          </div>
        </v-btn>
        <v-spacer></v-spacer>
        <div>
          <v-autocomplete
            v-model="select"
            :loading="loading"
            :items="items"
            :search-input.sync="search"
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
        <div class="d-flex align-center navlink">
          <v-icon color="warning">mdi-login</v-icon>
          <v-toolbar-title>Login/Register</v-toolbar-title>
        </div>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
};
</script>

<style>
.navlink {
  cursor: pointer;
}
</style>