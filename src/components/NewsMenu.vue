<template>
  <div class="news-menu">
    <ul class="menu-wrap">
      <li class="menu-item" @click="goBack">
        <i class="icon iconfont icon-back"></i>
      </li>
      <li class="menu-item">
        <i class="icon iconfont icon-moreunfold"></i>
      </li>
      <li class="menu-item" @click="thumbUp" :class="{'dianzan-active': isDianzan}">
        <i class="icon iconfont icon-iconfontdianzan"></i>
        <span class="dianzan-number">{{popularity}}</span>
      </li>
      <li class="menu-item" @click="showMenu">
        <i class="icon iconfont icon-fenxiang"></i>
      </li>
      <li class="menu-item">
        <i class="icon iconfont icon-pinglun"></i>
        <span class="comments-number">4</span>
      </li>
    </ul>
    <mt-popup
      v-model="popupVisible"
      popup-transition="popup-fade"
      position="bottom">
      <share @cancel="hideMenu"></share>
    </mt-popup>
  </div>
</template>
<script>
import router from '../router';
import Share from './Share';
import axios from 'axios';
export default {
  props: {
    id: Number
  },
  data() {
    return {
      long_comments: 0, // 长评论总数
      popularity: 0, // 点赞总数
      short_comments: 0, // 短评论总数
      comments: 0, // 评论总数
      isDianzan: false, // 是否已点赞
      popupVisible: false // 分享组件是否展示
    };
  },
  created() {
    this.fetchStoryExtra();
  },
  methods: {
    // 获取新闻额外信息
    fetchStoryExtra: function() {
      axios.get('/story-extra/' + this.id)
      .then(response => {
        this.long_comments = response.data.long_comments;
        this.popularity = response.data.popularity;
        this.short_comments = response.data.short_comments;
        this.comments = response.data.comments;
      })
      .catch(error => {
        console.log(error);
      });
    },
    // 返回首页点击事件
    goBack: function() {
      router.push({ name: 'index' });
    },
    // 点赞事件
    thumbUp: function() {
      if (!this.isDianzan) {
        this.popularity ++;
      } else {
        this.popularity --;
      }
      this.isDianzan = !this.isDianzan;
    },
    // 展示分享菜单事件
    showMenu: function() {
      this.popupVisible = true;
    },
    // 隐藏分享组件
    hideMenu: function() {
      this.popupVisible = false;
    }
  },
  components: {
    'share': Share
  }
};
</script>
<style lang="sass">
@import "../assets/sass/components/NewsMenu.sass";
</style>
