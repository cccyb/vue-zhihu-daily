<template>
  <div class="write-comment">
    <div class="header">
      <i class="icon iconfont icon-back" @click="backToComment"></i>
      <span class="header-text">写点评</span>
      <span class="header-release" @click="release">发布</span>
    </div>
    <div class="warning-text">
      不友善言论会被删除，深度讨论会被优先展示
    </div>
  </div>
</template>

<script>
import router from '../router';
export default {
  methods: {
    // 返回评论
    backToComment() {
      router.go(-1);
    },
    // 发布评论
    release() {
      alert('发布评论');
    }
  }
};
</script>

<style lang="sass">
@import "../assets/sass/pages/WriteComment.sass";
</style>
