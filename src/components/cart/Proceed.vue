<template>
  <v-card>
    <v-container class="ma-1">
      <v-row>
        <v-col class="headline">
          <p v-if="qty === 1">Subtotal (1 item): $ {{ subtotal }}</p>
          <p v-else>Subtotal ({{ qty }} items): $ {{ subtotal }}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn class="warning">Proceed to checkout</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "Proceed",
  data: () => ({
    qty: 3,
    subtotal: 25.5,
  }),
};
</script>

<style>
</style>