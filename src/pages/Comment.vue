<template>
<div class="comment">
  <div class="head">{{this.$store.state.comments}}条点评</div>
  <long-comment></long-comment>
  <short-comment></short-comment>
  <div class="foot">
    <i class="icon iconfont icon-back" @click="backToDetail"></i>
    <i class="icon iconfont icon-bianxie">写评论</i>
  </div>
</div>
</template>
<script>
import router from '../router';
import LongComment from '../components/LongComment';
import ShortComment from '../components/ShortComment';
export default {
  methods: {
    backToDetail() {
      router.push({ name: 'newsDetail', params: { id: this.$store.state.id } });
    }
  },
  components: {
    'long-comment': LongComment,
    'short-comment': ShortComment
  }
};
</script>
<style lang="sass">
@import "../assets/sass/components/Comment.sass";
</style>
