<template>
  <div class="news-list">
    <ul class="list">
      <li class="list-item" v-for="story in stories" :key="story.id">
        <span class="item-title">{{story.title}}</span>
        <img class="item-image" :src="'http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=' + story.images[0]" :alt="story.title">
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        stories: {}
      };
    },
    created() {
      // 获取最新新闻
      axios.get('/news/latest')
        .then(response => {
          this.stories = response.data.stories;
          console.log(this.stories);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };
</script>

<style lang="sass">
.list
  .list-item
    height: 90px;
    margin: 0 15px;
    border-bottom: 1px solid #f5f5f5;
    .item-title
      display: inline-block;
      width: 70%;
      padding-top: 15px;
      line-height: 20px;
    .item-image
      width: 75px;
      height: 60px;
      float: right;
      padding-top: 15px;
</style>
