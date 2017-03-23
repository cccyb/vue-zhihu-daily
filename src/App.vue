<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
    this.$store.commit('initSize', {
      width: window.screen.width,
      height: window.screen.height
    });
  }
};
</script>

<style>
</style>
