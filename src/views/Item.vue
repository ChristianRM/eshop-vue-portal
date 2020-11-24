<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">
        <ItemPictures />
      </v-col>
      <v-col cols="6">
        <ItemDescription />
        <ItemActions />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8" align-self="center">
        <h3>Product reviews</h3>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <ItemReviews class="mb-5" v-for="item in reviews" :key="item.id" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ItemPictures from "@/components/item/ItemPictures.vue";
import ItemDescription from "@/components/item/ItemDescription.vue";
import ItemActions from "@/components/item/ItemActions.vue";
import ItemReviews from "@/components/item/ItemReviews.vue";

export default {
  name: "Item",
  components: {
    ItemPictures,
    ItemDescription,
    ItemActions,
    ItemReviews,
  },
  data: () => ({
    reviews: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
  }),
};
</script>

<style>
</style>