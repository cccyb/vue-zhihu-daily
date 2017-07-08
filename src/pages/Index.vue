<template>
  <div class="index">
    <welcome></welcome>
    <sidebar v-if="isShowSidebar" v-on:hideSidebar="toggleSidebar"></sidebar>
    <mt-loadmore :top-method="loadTop" :topDistance="40" ref="loadmore">
      <header>
        <i class="icon iconfont icon-fenlei" @click="toggleSidebar"></i>
        <span class="hot-news">今日热闻</span>
      </header>
      <swipe></swipe>
      <newsList ref="newsList"></newsList>
    </mt-loadmore>
  </div>
</template>

<script>
import Welcome from '../components/Welcome';
import Swipe from '../components/Swipe';
import NewsList from '../components/NewsList';
import Sidebar from '../components/Sidebar';
import 'scrolling-element'; // profill 'document.scrollingElement'

export default {
  data() {
    return {
      isShowSidebar: false
    };
  },
  created() {
    this.isShowSidebar = false;
  },
  components: {
    'welcome': Welcome,
    'swipe': Swipe,
    'newsList': NewsList,
    'sidebar': Sidebar
  },
  methods: {
    // 切换侧边栏显示状态
    toggleSidebar() {
      // 侧边栏显示时设置底部列表不能滑动
      let scrollTop;
      
      if (!this.isShowSidebar) { // 禁止滑动
        scrollTop = document.scrollingElement.scrollTop;
        document.body.style.position = 'fixed';
        document.body.style.top = -scrollTop + 'px';
      } else { // 取消滑动限制
        document.body.style.position = '';
        document.scrollingElement.scrollTop = scrollTop;
      }

      this.isShowSidebar = !this.isShowSidebar;
    },
    // 下拉刷新数据
    loadTop() {
      this.$refs.newsList.$emit('refresh');
      this.$refs.loadmore.onTopLoaded();
    }
  }
};
</script>

<style lang="sass" scoped>
@import "../assets/sass/pages/Index.sass";
</style>
