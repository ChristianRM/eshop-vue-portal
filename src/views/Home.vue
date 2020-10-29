<template>
  <div class="home">
    <Carousel></Carousel>
    <FeaturedItems class="mt-1"></FeaturedItems>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Carousel from '@/components/Carousel.vue'
import FeaturedItems from '@/components/FeaturedItems.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Carousel,
    FeaturedItems,
    Footer
  }
}
</script>
