<template>
  <div class="news-detail">
    <div class="top-wrapper" v-if="this.$store.state.newsType === 0">
      <img v-lazy="attachImageUrl(this.data.image)" :alt="this.data.title">
      <span class="top-title">{{data.title}}</span>
      <span class="image-source">图片：{{this.data.image_source}}</span>
    </div>
    <div class="body-wrap" v-html="this.data.body"></div>
    <news-menu @reloadId="fetchData"></news-menu>
  </div>
</template>
<script>
import axios from 'axios';
import NewsMenu from '../components/NewsMenu';
export default {
  data() {
    return {
      data: {}
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    // 获取路由参数上的id新闻具体内容
    fetchData: function() {
      // 获得新闻id
      let id = this.$route.params.id;
      axios.get('api/news/' + id)
      .then(response => {
        response.data.body = this.attachBodyContent(response.data.body);
        this.data = response.data;
      })
      .catch(error => {
        console.log(error);
      });

      this.$store.dispatch('changeCurrentNewsId', id);
      this.$store.dispatch('judgeCollectState');
    },
    // 修改图片链接
    attachImageUrl: function(srcUrl) {
      if (srcUrl !== undefined) {
        return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
      }
    },
    // 修改返回数据中的body中的图片链接
    attachBodyContent: function(body) {
      return body.replace(/src="http\w{0,1}:\/\//g, 'src="https://images.weserv.nl/?url=');
    }
  },
  components: {
    'news-menu': NewsMenu
  }
};
</script>
<style lang="sass" scoped>
@import "../assets/sass/pages/NewsDetail.sass";
@import "/static/css/news_qa.auto.css";
</style>
