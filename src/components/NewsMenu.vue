<template>
  <div class="news-menu">
    <ul class="menu-wrap">
      <li class="menu-item" @click="goBack">
        <i class="icon iconfont icon-back"></i>
      </li>
      <li class="menu-item" @click="goNext">
        <i class="icon iconfont icon-moreunfold"></i>
      </li>
      <li class="menu-item" @click="thumbUp" :class="{'dianzan-active': isDianzan}">
        <i class="icon iconfont icon-dianzan"></i>
        <span class="dianzan-number">{{this.$store.state.popularity}}</span>
      </li>
      <li class="menu-item" @click="showMenu">
        <i class="icon iconfont icon-fenxiang"></i>
      </li>
      <li class="menu-item" @click="showComment">
        <i class="icon iconfont icon-pinglun"></i>
        <span class="comments-number">{{this.$store.state.comments}}</span>
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
  data() {
    return {
      isDianzan: false, // 是否已点赞
      popupVisible: false // 分享组件是否展示
    };
  },
  created() {
    this.fetchStoryExtra();
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'reloadId'
  },
  methods: {
    // 获取新闻额外信息
    fetchStoryExtra: function() {
      axios.get('api/story-extra/' + this.$store.state.id)
      .then(response => {
        this.$store.state.long_comments = response.data.long_comments;
        this.$store.state.popularity = response.data.popularity;
        this.$store.state.short_comments = response.data.short_comments;
        this.$store.state.comments = response.data.comments;
      })
      .catch(error => {
        console.log(error);
      });
    },
    // 返回上一页事件
    goBack: function() {
      let type = this.$store.state.newsType;
      if (type === 0) {
        router.push({ name: 'index' });
      } else if (type === 1) {
        let currentThemeId = this.$store.state.currentThemeId;
        router.push({ name: 'themeDetail', params: { id: currentThemeId } });
      } else if (type === 2) {
        router.push({ name: 'collect' });
      }
    },
    // 点赞事件
    thumbUp: function() {
      if (!this.isDianzan) {
        this.$store.state.popularity++;
      } else {
        this.$store.state.popularity--;
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
    },
    // 载入下一篇新闻点击事件
    goNext: function() {
      router.push({ name: 'newsDetail', params: { id: this.$store.state.nextId } });
    },
    // 刷新路由属性中的id，重载页面
    reloadId: function() {
      this.$emit('reloadId');
      this.fetchStoryExtra();
    },
    // 查看评论界面
    showComment: function() {
      router.push({ name: 'comment', params: { id: this.$store.state.id } });
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
