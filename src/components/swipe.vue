<template>
  <div class="swipe">
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <a href="#"><img src="../assets/images/1.jpg" alt="1">小事 · 爱无能</a>
      </mt-swipe-item>
      <mt-swipe-item>
        <a href="#"><img src="../assets/images/2.jpg" alt="1"></a>
      </mt-swipe-item>
      <mt-swipe-item>
        <a href="#"><img src="../assets/images/3.jpg" alt="1"></a>
      </mt-swipe-item>
      <mt-swipe-item>
        <a href="#"><img src="../assets/images/4.jpg" alt="1"></a>
      </mt-swipe-item>
      <mt-swipe-item>
        <a href="#"><img src="../assets/images/5.jpg" alt="1"></a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {
  };
</script>

<style lang="sass">
.swipe
  height: 220px;
  img
    width: 100%;
</style>
