<template>
  <div class="wrap" :class="[isShowSidebar ? 'show' : '']">
    <div class="sidebar">
      <div class="top">
        <img src="../assets/images/avatar.png" alt="" class="avatar">
        <span class="name">陈钰博</span>
      </div>
      <div class="menubar">
        <div @click="goCollect">
          <i class="icon iconfont icon-shoucang"></i><br>
          <span>收藏</span>
        </div>
        <div>
          <i class="icon iconfont icon-xiaoxi"></i><br>
          <span>消息</span>
        </div>
        <div>
          <i class="icon iconfont icon-shezhi"></i><br>
          <span>设置</span>
        </div>
      </div>
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li class="menu-item" v-for="item in data" @click="themeDetail(item.id)">
            <i class="icon iconfont icon-shouyeshouye" v-if="item.id === -1"></i>
            {{item.name}}
            <i class="icon iconfont icon-more"></i>
          </li>
        </ul>
      </div>
      <div class="foot-menu">
        <i class="icon iconfont icon-lixianwenjian">&nbsp;&nbsp;离线</i>
        <i class="icon iconfont icon-yejianmoshi">&nbsp;&nbsp;夜间</i>
      </div>
    </div>
    <div class="mask" @click="hideSidebar"></div>
  </div>
</template>
<script>
import axios from 'axios';
import BScroll from 'better-scroll';
import router from '../router';

export default {
  props: {
    isShowSidebar: {
      type: Boolean
    }
  },
  data() {
    return {
      data: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    // 隐藏侧边栏
    hideSidebar() {
      this.$emit('hideSidebar');
    },
    // 获取路由参数上的id新闻具体内容
    fetchData: function() {
      axios.get('api/themes')
      .then(response => {
        this.data = response.data.others;

        this.data.unshift({
          color: 0,
          thumbnail: '',
          description: '首页',
          id: -1,
          name: '首页'
        });

        this.$nextTick(() => {
          this.menuScroll = new BScroll(this.$refs.menuWrapper, {
            click: true
          });
        });
      })
      .catch(error => {
        console.log(error);
      });
    },
    // 跳转主题详情页
    themeDetail(id) {
      if (id === -1) { // 首页
        this.hideSidebar();
      } else { // 不是首页
        this.$store.dispatch('changeCurrentThemeId', id);
        router.push({ name: 'themeDetail', params: { id: id } });
      }
    },
    // 跳转收藏页
    goCollect() {
      router.push({ name: 'collect' });
    }
  }
};
</script>
<style lang="sass" scoped>
@import "../assets/sass/components/Sidebar.sass";
</style>
