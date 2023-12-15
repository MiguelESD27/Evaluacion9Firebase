<!-- /src/components/Home.vue -->

<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-img
          src="https://background-image-url.jpg"
          alt="Heroes of the Storm Background"
          aspect-ratio="2.75"
        >
          <v-overlay :opacity="0.6" color="black"></v-overlay>
        </v-img>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="purple darken-1 white--text">
      <v-col>
        <v-container>
          <v-row>
            <v-col>
              <v-btn @click="goToHeroes" color="orange darken-3">
                Ver héroes
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    goToHeroes() {
      this.$router.push({ name: 'heroes' });
    },
  },
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
