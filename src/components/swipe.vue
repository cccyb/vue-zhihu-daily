<template>
  <div class="swipe">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="topStory in topStories" :key="topStory.id" @click.native="viewDetail(topStory.id)" >
        <img :src="'http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=' + topStory.image" :alt="topStory.title" :data-id="topStory.id" >
        <span class="top-story-title" :data-id="topStory.id">{{topStory.title}}</span>
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
      axios.get('/news/latest')
        .then(response => {
          this.topStories = response.data.top_stories;
        })
        .catch(error => {
          console.log(error);
        });
    },
    methods: {
      viewDetail: function(id) {
        // 跳转到对应id的文章详情页
        router.push({ name: 'newsDetail', params: { id: id } });
      }
    }
  };
</script>

<style lang="sass">
@import "../assets/sass/components/Swipe.sass";
</style>
