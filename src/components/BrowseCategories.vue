<template>
  <v-container success fluid>
    <p class="text-h4 font-weight-medium text-center">Browse by category</p>
    <v-row dense>
      <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
        <v-card>
            <v-card-title 
                v-text="card.title"
                class="align-end"
                >
            </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "BrowseCategories",
  data: () => ({
    cards: [
      {
        title: "Clothes",
        src:
          "https://5.imimg.com/data5/YJ/BO/MY-10973479/mens-designer-casual-shirt-500x500.jpg",
        flex: 4,
      },
      {
        title: "Videogames",
        src:
          "https://i.gadgets360cdn.com/products/large/1549526400_635_nintendo_switch_db.jpg",
        flex: 4,
      },
      {
        title: "Shoewear",
        src:
          "https://cdn.shopify.com/s/files/1/1104/4168/products/Allbirds_WL_RN_SF_PDP_Natural_Grey_BTY_20df0c58-8d86-4a8b-9b89-b89da7d46780_600x600.png?v=1600891257",
        flex: 4,
      },
      {
        title: "TV's",
        src: "https://media.4rgos.it/s/Argos/9361317_R_SET?$Main768$&w=620&h=620",
        flex: 4,
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 4,
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 4,
      }
    ],
  }),
};
</script>