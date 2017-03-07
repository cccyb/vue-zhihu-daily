<template>
  <div class="swipe">
    <span class="hot-news">今日热闻</span>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="topStory in topStories" :key="topStory.id">
        <img :src="'http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=' + topStory.image" :alt="topStory.id">
        <span class="top-story-title">{{topStory.title}}</span>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        topStories: {}
      };
    },
    created() {
      // 获取最热新闻
      axios.get('/news/latest')
        .then(response => {
          this.topStories = response.data.top_stories;
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

</script>

<style lang="sass">
.swipe 
  height: 220px;
  color: #fff;
  font-size: 20px;
  .hot-news 
    position: absolute;
    left: 50%;
    top: 15px;
    margin-left: -48px;
    z-index: 1;
  img 
    position: absolute;
    bottom: -75px;
    width: 100%;
  .top-story-title
    position: absolute;
    z-index: 2;
    bottom: 0;
    padding: 30px 20px;
    line-height: 25px;
</style>
