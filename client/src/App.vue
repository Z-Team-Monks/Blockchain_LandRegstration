<template>
  <div id="app">
    <Navigation />
    <router-view />
    <TheFooter />
  </div>
</template>

<script>
import Web3 from 'web3';

// import Web12 from './libs/web3'
import Navigation from "./components/Nav.vue";
import TheFooter from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Navigation,
    TheFooter,
  },
  created() {
  },
};
</script>

<style>
</style>
