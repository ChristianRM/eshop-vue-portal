<template>
  <v-container info fluid>
    <p class="text-h4 font-weight-medium text-center">Featured Items</p>
    <v-row dense>
      <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
        <v-card>
          <v-img
            :src="card.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <v-card-title v-text="card.title"></v-card-title>
          </v-img>

          <v-card-actions>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-bookmark</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "FeaturedItems",
  data: () => ({
    cards: [
      {
        title: "Clothes",
        src:
          "https://5.imimg.com/data5/YJ/BO/MY-10973479/mens-designer-casual-shirt-500x500.jpg",
        flex: 3,
      },
      {
        title: "Videogames",
        src:
          "https://i.gadgets360cdn.com/products/large/1549526400_635_nintendo_switch_db.jpg",
        flex: 3,
      },
      {
        title: "Shoewear",
        src:
          "https://cdn.shopify.com/s/files/1/1104/4168/products/Allbirds_WL_RN_SF_PDP_Natural_Grey_BTY_20df0c58-8d86-4a8b-9b89-b89da7d46780_600x600.png?v=1600891257",
        flex: 3,
      },
      {
        title: "TV's",
        src: "https://media.4rgos.it/s/Argos/9361317_R_SET?$Main768$&w=620&h=620",
        flex: 3,
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 3,
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 3,
      },
      {
        title: "Pre-fab homes",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 3,
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 3,
      },
    ],
  }),
};
</script>