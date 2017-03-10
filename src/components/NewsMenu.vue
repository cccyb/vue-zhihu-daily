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
        <span class="dianzan-number">{{dianzan_number}}</span>
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
export default {
  data() {
    return {
      dianzan_number: 21, // 点赞数
      isDianzan: false, // 是否点赞
      popupVisible: false
    };
  },
  methods: {
    // 返回首页点击事件
    goBack: function() {
      router.push({ name: 'index' });
    },
    // 点赞事件
    thumbUp: function() {
      if (!this.isDianzan) {
        this.dianzan_number ++;
      } else {
        this.dianzan_number --;
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
