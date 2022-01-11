<template>
  <div id="app">
    <Navigation />
    <router-view />
    <TheFooter />
  </div>
</template>

<script>
import Navigation from "./components/Nav.vue";
import TheFooter from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Navigation,
    TheFooter,
  },
};
</script>

<style>
</style>
