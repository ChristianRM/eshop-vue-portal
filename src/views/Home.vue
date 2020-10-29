<template>
  <div class="home">
    <Carousel></Carousel>
    <FeaturedItems class="mt-1"/>
    <BrowseCategories class="mt-1"/>
    <FAQ/>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue'
import FeaturedItems from '@/components/FeaturedItems.vue'
import BrowseCategories from '@/components/BrowseCategories.vue'
import FAQ from '@/components/FAQ.vue'


export default {
  name: 'Home',
  components: {
    Carousel,
    FeaturedItems,
    BrowseCategories,
    FAQ
  }
}
</script>
