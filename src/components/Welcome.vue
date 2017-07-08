<template>
  <transition name>
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
  </transition>
</template>

<script>
  // import axios from 'axios';
  export default {
    data() {
      return {
        // imgSrc: '../assets/images/welcome.jpg',
        isHide: false
      };
    },
    created() {
      // this.fetchImgSrc();

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
      // fetchImgSrc() {
      //   axios.get('api7/prefetch-launch-images/1080*1920')
      //     .then(response => {
      //       console.log(response);
  
      //       let remoteImgSrc = response.data.creatives[0].url;

      //       if (remoteImgSrc === null || remoteImgSrc === '' || remoteImgSrc === undefined) {
      //         this.imgSrc = '../assets/images/welcome.jpg';
      //       } else {
      //         this.imgSrc = this.attachImageUrl(remoteImgSrc);
      //       }
      //     })
      //     .catch(error => {
      //       console.log(error);
      //       this.imgSrc = '../assets/images/welcome.jpg';
      //     });
      // },
      // 修改图片链接
      // attachImageUrl: function(srcUrl) {
      //   if (srcUrl !== undefined) {
      //     return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
      //   }
      // }
    }
  };
</script>

<style lang="sass">
@import "../assets/sass/components/Welcome.sass";
</style>
