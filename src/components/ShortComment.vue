<template>
<div class="short-comment">
  <div class="short-comment-number" v-show="this.comments.length !== 0" @click="toggleShortComment">
    {{this.$store.state.short_comments}}条短评
    <i class="icon iconfont" :class="[isShow ? 'icon-updouble' : 'icon-downdouble']"></i>
  </div>
  <ul class="comment-list" :class="{hide: !isShow}">
    <li class="comment-item" v-for="comment in this.comments">
      <img :src="attachImageUrl(comment.avatar)" :alt="comment.author" class="avatar">
      <div class="comment-content">
        <span class="author">{{comment.author}}</span>
        <i class="icon iconfont icon-dianzan">{{comment.likes}}</i>
        <p class="text">{{comment.content}}</p>
        <span class="date">{{changeTime(comment.time)}}</span>
      </div>
    </li>
  </ul>
</div>
</template>
<script>
import axios from 'axios';
import moment from 'moment';
export default {
  data() {
    return {
      comments: [],
      isShow: false // 是否展开短评
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    // 获取短评数据
    fetchData() {
      axios.get('/story/' + this.$store.state.id + '/short-comments')
      .then(response => {
        this.comments = response.data.comments;
      })
      .catch(error => {
        console.log(error);
      });
    },
    // 切换短评展示
    toggleShortComment() {
      this.isShow = !this.isShow;
    },
    // 修改图片链接
    attachImageUrl: function(srcUrl) {
      if (srcUrl !== undefined) {
        return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
      }
    },
    // 转换时间戳
    changeTime: function(time) {
      return moment(time).format('MM-DD HH:mm');
    }
  }
};
</script>
<style lang="sass">
@import "../assets/sass/components/ShortComment.sass";
</style>
