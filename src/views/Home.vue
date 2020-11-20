<template>
  <div class="home">
    <Carousel></Carousel>
    <FeaturedItems class="mt-1"/>
    <BrowseCategories class="mt-1"/>
    <Extra/>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/home/Carousel.vue'
import FeaturedItems from '@/components/home/FeaturedItems.vue'
import BrowseCategories from '@/components/home/BrowseCategories.vue'
import Extra from '@/components/home/Extra.vue'


export default {
  name: 'Home',
  components: {
    Carousel,
    FeaturedItems,
    BrowseCategories,
    Extra
  }
}
</script>
