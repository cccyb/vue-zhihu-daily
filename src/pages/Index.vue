<template>
  <div class="index">
    <sidebar :isShowSidebar="isShowSidebar" v-on:hideSidebar="toggleSidebar"></sidebar>
    <header>
      <i class="icon iconfont icon-fenlei" @click="toggleSidebar"></i>
      <span class="hot-news">今日热闻</span>
    </header>
    <swipe></swipe>
    <newsList></newsList>
  </div>
</template>
<script>
import Swipe from '../components/Swipe';
import NewsList from '../components/NewsList';
import Sidebar from '../components/Sidebar';

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
    'swipe': Swipe,
    'newsList': NewsList,
    'sidebar': Sidebar
  },
  methods: {
    // 切换侧边栏显示状态
    toggleSidebar() {
      this.isShowSidebar = !this.isShowSidebar;
    }
  }
};
</script>
<style lang="sass" scoped>
@import "../assets/sass/pages/Index.sass";
</style>
