<template>
  <v-container>
    <v-row>
      <v-col cols="2" />
      <v-col cols="2">
        <v-img 
          :src="`https://picsum.photos/500/300?image=10`"
          :lazy-src="`https://picsum.photos/10/6?image=10`"
          aspect-ratio="1"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col cols="8">
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="800"
          max-width="800"
          src="https://picsum.photos/id/11/500/300"
          aspect-ratio="1"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ItemPictures",
};
</script>

<style>
</style>