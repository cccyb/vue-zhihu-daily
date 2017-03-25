<template>
<div class="comment">
  <div class="head">{{this.$store.state.comments}}条点评</div>
  <long-comment></long-comment>
  <short-comment></short-comment>
  <div class="foot">
    <i class="icon iconfont icon-back" @click="backToDetail"></i>
    <i class="icon iconfont icon-bianxie" @click="writeComment">写评论</i>
  </div>
</div>
</template>
<script>
import router from '../router';
import LongComment from '../components/LongComment';
import ShortComment from '../components/ShortComment';
export default {
  methods: {
    // 返回文章详情
    backToDetail() {
      router.go(-1);
    },
    // 写点评
    writeComment() {
      router.push({ name: 'writeComment', params: { id: this.$store.state.id } });
    }
  },
  components: {
    'long-comment': LongComment,
    'short-comment': ShortComment
  }
};
</script>
<style lang="sass" scoped>
@import "../assets/sass/pages/Comment.sass";
</style>
