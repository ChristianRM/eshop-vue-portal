<template>
  <v-carousel cycle height="500" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.sale">
      <v-row class="fill-height" align="end" justify="center">
        <div class="display-3 font-weight-medium pb-10">
          <v-sheet
            :class="`${colors[i]}`"
            class="mx-auto transition-swing rounded-lg px-1 cursor"
            elevation="12"
            >{{ slide.order }}
          </v-sheet>
        </div>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
import storeSale from "../../assets/store-sale.webp";
import hatsSale from "../../assets/hats-sale.jpg";
import clothingSale from "../../assets/clothing-sale.jpg";
import bookSale from "../../assets/book-sale.webp";
import blackfridaySale from "../../assets/black-friday-sale.webp";

export default {
  name: "Carousel",
  data() {
    return {
      colors: [
        "indigo",
        "orange darken-3",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: [
        {
          sale: storeSale,
          order: "Just browsing? Check these cool items!",
        },
        {
          sale: hatsSale,
          order: "Hats on sale, this week",
        },
        {
          sale: clothingSale,
          order: "Popular clothing items",
        },
        {
          sale: bookSale,
          order: "Books, books, books",
        },
        {
          sale: blackfridaySale,
          order: "Black friday sale",
        },
      ],
    };
  },
};
</script>