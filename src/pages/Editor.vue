<template>
<div class="editor">
  <header>
    <i class="icon iconfont icon-back" @click="back"></i>
    <div class="text">{{this.$route.params.editorName}}</div>
    <div class="box"></div>
  </header>
  <div class="html-content" v-html="this.data"></div>
</div>
</template>

<script>
import axios from 'axios';
import router from '../router';
export default {
  data() {
    return {
      data: '',
      html: ''
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    // 或许指定id主题下的编辑信息
    fetchData() {
      axios.get('api/editor/' + this.$route.params.editorId + '/profile-page/ios')
        .then(response => {
          response.data = this.attachBodyContent(response.data);
          this.data = response.data;
        });
    },
    // 返回上一页
    back() {
      router.go(-1);
    },
    // 修改返回数据中的body中的图片链接
    attachBodyContent: function(body) {
      return body.replace(/src="http\w{0,1}:\/\//g, 'src="https://images.weserv.nl/?url=');
    }
  }
};
</script>

<style lang="sass" scoped>
@import "../assets/sass/pages/Editor.sass";
</style>
