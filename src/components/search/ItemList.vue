<template>
  <v-container>
    <v-row>
      <v-col v-for="n in 24" :key="n" cols="12">
        <v-card color="success" height="200"></v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>