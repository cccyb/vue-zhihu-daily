<template>
  <div class="news-detail">
    <div class="top-wrapper">
      <img :src="attachImageUrl(this.data.image)" :alt="this.data.title">
      <span class="top-title">{{data.title}}</span>
      <span class="image-source">图片：{{this.data.image_source}}</span>
    </div>
    <div class="body-wrap" v-html="this.data.body"></div>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        id: '',
        data: {}
      };
    },
    created() {
      // 获得新闻id
      this.id = this.$route.params.id;

      // 获取指定id新闻具体内容
			axios.get('/news/' + this.id)
				.then(response => {
					this.data = this.attachBodyContent(response.data);
				})
				.catch(error => {
					console.log(error);
				});
    },
    methods: {
      // 修改图片链接
      attachImageUrl: function(srcUrl) {
        if (srcUrl !== undefined) {
          return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
        }
      },
      attachBodyContent: function(data) {
        data.body.replace(/src=['"]([^'"]+)[^>]*>/g, '<img src="https://images.weserv.nl/?url=p" />');
        console.log(data.body);
        return data;
      }
    }
  };
</script>
<style lang="sass">
@import "../assets/sass/components/NewsDetail.sass";
</style>
