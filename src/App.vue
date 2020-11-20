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
import AppBar from './components/app/AppBar'
import Footer from '@/components/app/Footer.vue'
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
