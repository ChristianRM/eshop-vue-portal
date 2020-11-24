<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="1" align-self="center">
          <p>Qty</p>
      </v-col>
      <v-col cols="1">
        <v-select :items="select" v-model="select"></v-select>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-btn color="error" class="mr-4">Add to cart</v-btn>
      <v-btn color="warning"> Buy now </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ItemActions",
  data: () => ({
    items: [1,2,3,4],
    select: 1,
  }),
};
</script>

<style>
</style>