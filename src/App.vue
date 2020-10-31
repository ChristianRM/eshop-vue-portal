<template>
  <v-app>
    <AppBar/>
    <v-main>
      <v-container class="mb-10">
        <router-view/>
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar'
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',

  components: {
    AppBar,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
