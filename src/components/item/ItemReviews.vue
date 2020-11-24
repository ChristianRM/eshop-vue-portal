<template>
  <v-card class="mx-auto" max-width="800">
    <v-card-title>User Name</v-card-title>
    <v-card-subtitle>
      <v-row justify="center my-n6">
        <v-col>
          <v-rating
            v-model="rating"
            background-color="orange lighten-3"
            color="orange"
            small
          ></v-rating>
        </v-col>
        <v-col align-self="center"> 12/12/2020 </v-col>
      </v-row>
    </v-card-subtitle>
    <v-card-text>
      Originally got a broken headphone but got sent a new one so good customer
      service. Sound quality is good for the price range. Great bass, eh treble,
      and noice cancelation does decently good. FYI they tried paying me for a 5
      star review so take that as you will Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Dolore soluta veniam, totam architecto quae,
      accusamus numquam sapiente magnam, aliquid vero sequi ullam voluptatum
      explicabo eos. Eveniet, quis? Nisi, ipsam hic?
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ItemReviews",
  data: () => ({
    rating: 4,
  }),
};
</script>

<style>
</style>