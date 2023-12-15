<template>
  <v-app-bar app color="blue darken-4">
    <v-app-bar-nav-icon @click.stop="goHome"></v-app-bar-nav-icon>
    <v-toolbar-title>Heroes of the Storm</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push({ name: 'home' });
    },
  },
};
</script>