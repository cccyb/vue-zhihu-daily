<template>
  <div class="news-list">
    <ul class="list">
      <li class="list-item" v-for="story in stories" :key="story.id">
        <span class="item-title">{{story.title}}</span>
        <div class="image-wrapper">
          <img class="item-image" :src="'http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=' + story.images[0]" :alt="story.title">
          <i class="icon iconfont icon-duotu multipic" v-if="story.multipic">多图</i>
        </div>
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
    .image-wrapper
      position: relative;
      float: right;
      padding-top: 15px;
      .item-image
        width: 75px;
        height: 60px;
      .multipic
        display: block;
        position: absolute;
        right: 0;
        bottom: 2px;
        width: 40px;
        height: 16px;
        font-size: 12px;
        color: #fff;
        background: #000;
        opacity: .7;
        text-align: center;
        line-height: 16px;
</style>
