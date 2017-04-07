<template>
  <div class="welcome" :class="{ hide: isHide }">
    <div class="img-wrap">
      <img src="../assets/images/welcome.jpg" alt="" width="100%" height="100%">
      <span class="author">Kimon&nbsp;&nbsp;Maritz</span>
    </div>
    <div class="text-wrap">
      <div class="logo"></div>
      <div class="text">
        <span class="title">知乎日报</span>
        <span class="bio">每天三次，每次七分钟</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isHide: false
      };
    },
    created() {
      let isFirstLoad = this.$store.state.isFirstLoad;
      if (isFirstLoad) {
        // 3.5秒后隐藏欢迎界面
        setTimeout(() => {
          this.isHide = true;
        }, 3500);
      } else {
        this.isHide = true;
      }
    },
    methods: {
    }
  };
</script>

<style lang="sass">
@import "../assets/sass/components/Welcome.sass";
</style>
