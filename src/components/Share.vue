<template>
  <div class="share">
    <span class="share-title">分享这篇内容</span>
    <mt-swipe :auto="0">
      <mt-swipe-item>
        <div class="share-item">
          <i class="icon iconfont icon-weixinhaoyou"></i>
          <span>微信好友</span>
        </div>
        <div class="share-item">
          <i class="icon iconfont icon-weixinpengyouquan"></i>
          <span>微信朋友圈</span>
        </div>
        <div class="share-item">
          <i class="icon iconfont icon-QQ"></i>
          <span>QQ</span>
        </div>
        <div class="share-item">
          <i class="icon iconfont icon-weibo"></i>
          <span>新浪微博</span>
        </div>
        <div class="share-item">
          <i class="icon iconfont icon-fuzhi"></i>
          <span>复制链接</span>
        </div>
        <div class="share-item">
          <i class="icon iconfont icon-youdaoyunbiji"></i>
          <span>有道云笔记</span>
        </div>
        <div class="share-item">
          <i class="icon iconfont icon-yinxiangbiji"></i>
          <span>印象笔记</span>
        </div>
        <div class="share-item">
          <i class="icon iconfont icon-tengxunweibo"></i>
          <span>腾讯微博</span>
        </div>
      </mt-swipe-item>
      <mt-swipe-item>
        <div class="share-item">
          <i class="icon iconfont icon-xinxi"></i>
          <span>微信好友</span>
        </div>
        <div class="share-item">
          <i class="icon iconfont icon-instapaper"></i>
          <span>微信朋友圈</span>
        </div>
      </mt-swipe-item>
    </mt-swipe>
    <div class="button" @click="toggleCollect">{{this.$store.getters.collectText}}</div>
    <div class="button" @click="cancel">取消</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  created() {
    this.$store.dispatch('judgeCollectState');
  },
  methods: {
    // 隐藏分享菜单事件
    cancel: function() {
      this.$emit('cancel');
    },
    // 收藏文章
    toggleCollect: function() {
      this.$store.dispatch('toggleCollect');
    }
  }
};
</script>
<style lang="sass">
@import "../assets/sass/components/Share.sass";
</style>
