<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <v-card>
          <div class="d-flex flex-no-wrap">
            <div>
              <v-avatar class="ma-3" size="125" tile>
                <v-img
                  :src="item.src"
                ></v-img>
              </v-avatar>
            </div>
            <div class="text-justify">
              <v-card-title>Product</v-card-title>
              <v-card-subtitle 
                >{{ item.description | truncate(400, '...')}}</v-card-subtitle
              >
            </div>
            <v-spacer></v-spacer>
            <div class="fill-height body-1 deep-purple--text font-weight-black align-self-center">
              $5.99
            </div>
            <v-card-actions class="col-xs-2 pr-4">
              <div>
                <p class="pb-10">Qty</p>
              </div>
              <div>
                <v-select
                  class="px-3"
                  solo
                  :items="qty"
                  v-model="select"
                ></v-select>
                <v-btn class="warning">Update</v-btn>
              </div>
            </v-card-actions>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ItemList",
  data: () => ({
    qty: [1, 2, 3, 4],
    select: 1,
    item: {
      src:  'https://cdn.pixabay.com/photo/2019/11/30/19/52/trees-4664060_960_720.jpg',
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                molestiae sunt iure, dolor atque veniam illum laboriosam. Optio
                blanditiis odio aut hic quis quasi! Vel accusamus fuga
                consectetur maxime debitis. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Adipisci voluptate iure et eaque
                provident libero soluta fugit temporibus consequuntur,
                perspiciatis veniam vitae sed vel doloremque nisi voluptatem
                eligendi sunt rerum?`

    }
  }),
};
</script>

<style>
</style>