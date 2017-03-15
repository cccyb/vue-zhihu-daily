<template>
<div class="long-comment">
  <div class="box"></div>
  <div class="long-comment-number" v-show="this.comments.length !== 0">{{this.$store.state.long_comments}}条长评</div>
  <ul class="comment-list">
    <i class="icon iconfont icon-shafa"></i>
    <li class="comment-item" v-for="comment in this.comments">
      <img :src="attachImageUrl(comment.avatar)" :alt="comment.author" class="avatar">
      <div class="comment-content">
        <span class="author">{{comment.author}}</span>
        <i class="icon iconfont icon-dianzan">{{comment.likes}}</i>
        <p class="text">{{comment.content}}</p>
        <p class="reply" :class="{hideReply: isReplyShow}" v-if="comment.reply_to !== 'undifined'">
          <span class="reply-author">//{{comment.reply_to.author}}:</span>
          {{comment.reply_to.content}}
        </p>
        <span class="date">{{changeTime(comment.time)}}</span>
        <span class="expand" v-if="comment.reply_to !== 'undifined'">{{expandText}}</span>
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
      isReplyShow: false // 回复是否展开
    };
  },
  created() {
    this.fetchData();
  },
  computed: {
    expandText: function() {
      return this.isReplyShow ? '收起' : '展开';
    }
  },
  methods: {
    // 获取长评数据
    fetchData: function() {
      axios.get('/story/' + this.$store.state.id + '/long-comments')
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
    },
    // 切换回复
    toggleReply: function() {
      this.isReplyShow = !this.isReplyShow;
    }
  }
};
</script>
<style lang="sass">
@import "../assets/sass/components/LongComment.sass";
</style>
