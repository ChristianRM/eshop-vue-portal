<template>
  <v-container class="mb-8">
    <v-row dense>
      <v-col cols="6">
        <v-card color="accent" height="250">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline"> Any question? </v-card-title>

              <v-card-subtitle
                >Be sure to check our FAQ, you can find info on common questions
                and walkthrough with many issues.</v-card-subtitle
              >
              <v-spacer />
              <v-card-actions>
                <v-btn outlined> Learn more </v-btn>
              </v-card-actions>
            </div>
            <div>
              <v-avatar class="ma-3" size="230" tile>
                <v-img
                  src="https://i2.wp.com/jlcollinsnh.com/wp-content/uploads/2014/01/girl-shrugging-shoulders.jpg"
                ></v-img>
              </v-avatar>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card color="warning" height="250">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline"> Return policy </v-card-title>

              <v-card-subtitle
                >We got your back, E-SHOP&trade; cares for both the customer and
                seller. Read how we help you avoid and endure any kind of issue
                you can have when using our platform.</v-card-subtitle
              >

              <v-card-actions>
                <v-btn outlined> Learn more </v-btn>
              </v-card-actions>
            </div>
            <div>
                <v-avatar class="ma-3" size="230" tile>
                <v-img
                  src="https://homesmart.com/wp-content/uploads/sites/2/2017/04/relaxed-guy.jpg"
                ></v-img>
              </v-avatar>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "FAQ",
};
</script>