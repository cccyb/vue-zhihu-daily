<template>
<div class="long-comment">
  <div class="box"></div>
  <div class="long-comment-number" v-show="this.comments.length !== 0">{{this.$store.state.long_comments}}条长评</div>
  <ul class="comment-list" ref="longCommentList">
    <i class="icon iconfont icon-shafa"></i>
    <li class="comment-item" v-for="comment in this.comments">
      <img v-lazy.longCommentList="attachImageUrl(comment.avatar)" :alt="comment.author" class="avatar">
      <div class="comment-content">
        <span class="author">{{comment.author}}</span>
        <i class="icon iconfont icon-dianzan">{{comment.likes}}</i>
        <p class="text">{{comment.content}}</p>
        <template v-if="comment.reply_to !== undefined">
          <p class="reply" >
            <span class="reply-author">//{{comment.reply_to.author}}:</span>
            {{comment.reply_to.content}}
         </p>
        </template>
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
      comments: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    // 获取长评数据
    fetchData: function() {
      axios.get('api/story/' + this.$store.state.id + '/long-comments')
      .then(response => {
        this.comments = response.data.comments;
      })
      .catch(error => {
        console.log(error);
      });
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
@import "../assets/sass/components/LongComment.sass";
</style>
