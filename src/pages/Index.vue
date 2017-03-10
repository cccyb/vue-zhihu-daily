<template>
  <div class="index">
    <v-header></v-header>
    <swipe></swipe>
    <newsList></newsList>
  </div>
</template>
<script>
  import Header from '../components/Header';
  import Swipe from '../components/Swipe';
  import NewsList from '../components/NewsList';

  export default {
    components: {
      'v-header': Header,
      'swipe': Swipe,
      'newsList': NewsList
    }
  };
</script>
<style lang="sass">

</style>
