<template>
  <v-row>
    <v-col cols="2">
        <ItemFilter />
    </v-col>
    <v-col cols="9">
      <ItemList />
    </v-col>
  </v-row>
</template>

<script>
// Todo
// Grid/List View
// Side filtering
// Sort by newest/price lo-hi/reviews?
// V-card f/e item
import ItemList from "@/components/search/ItemList.vue";
import ItemFilter from "@/components/search/ItemFilter.vue";

export default {
  name: "SearchItems",
  components: {
    ItemList,
    ItemFilter
  },
};
</script>

<style>
</style>