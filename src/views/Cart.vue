<template>
  <v-container>
    <p class="pt-5 text-h4 font-weight-medium text-center">Cart</p>
    <v-row>
      <v-col cols="9">
        <ItemList />
        <ItemList />
        <ItemList />
      </v-col>
      <v-col cols="3">
        <Proceed />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// TODO
// List items in cart
// Add or substract items
import ItemList from "../components/cart/ItemList";
import Proceed from "../components/cart/Proceed";
export default {
  name: "Cart",
  components: {
    ItemList,
    Proceed,
  },
};
</script>

<style>
</style>