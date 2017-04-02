<template>
  <div class="swipe">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="topStory in topStories" :key="topStory.id" @click.native="viewDetail(topStory.id)" >
        <img :src="attachImageUrl(topStory.image)" :alt="topStory.title">
        <span class="top-story-title">{{topStory.title}}</span>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  import axios from 'axios';
  import router from '../router';
  export default {
    data() {
      return {
        topStories: {}
      };
    },
    created() {
      // 获取最热新闻
      axios.get('api/news/latest')
        .then(response => {
          this.topStories = response.data.top_stories;
        })
        .catch(error => {
          console.log(error);
        });
    },
    methods: {
      // 跳转到对应id的文章详情页
      viewDetail: function(id) {
        router.push({ name: 'newsDetail', params: { id: id } });
      },
      // 修改图片链接
      attachImageUrl: function(srcUrl) {
        if (srcUrl !== undefined) {
          return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
        }
      }
    }
  };
</script>

<style lang="sass">
@import "../assets/sass/components/Swipe.sass";
</style>
