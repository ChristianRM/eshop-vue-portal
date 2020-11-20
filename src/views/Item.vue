<template>
  <v-container fluid>
    <v-row class="pt-10">
      <v-col :key="n" cols="1">
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
      <v-col cols="">
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="450"
          max-width="450"
          src="https://picsum.photos/id/11/500/300"
          aspect-ratio="1"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>