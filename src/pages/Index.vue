<template>
  <div class="index">
    <swipe></swipe>
    <newsList></newsList>
  </div>
</template>
<script>
  import Swipe from '../components/Swipe';
  import NewsList from '../components/NewsList';
  
  export default {
    components: {
      'swipe': Swipe,
      'newsList': NewsList
    }
  };

</script>
<style lang="sass">

</style>
