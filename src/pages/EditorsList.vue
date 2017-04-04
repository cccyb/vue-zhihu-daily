<template>
<div class="editors-list">
  <header>
    <i class="icon iconfont icon-back" @click="back"></i>
    <span class="text">主编</span>
  </header>
  <ul class="list" ref="editorList">
    <li class="item" v-for="item in data" @click="viewEditorProfile(item.id, item.name)">
      <div class="wrap">
        <img v-lazy.editorList="attachImageUrl(item.avatar)" alt="">
        <span class="name">{{item.name}}</span>
        <span class="bio">{{item.bio}}</span>
        <i class="icon iconfont icon-more"></i>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
import axios from 'axios';
import router from '../router';
export default {
  data() {
    return {
      data: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    // 或许指定id主题下的编辑信息
    fetchData() {
      axios.get('api/theme/' + this.$route.params.id)
        .then(response => {
          this.data = response.data.editors;
        });
    },
    // 返回上一页
    back() {
      router.go(-1);
    },
    // 修改图片链接
    attachImageUrl: function(srcUrl) {
      if (srcUrl !== undefined) {
        return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
      }
    },
    // 跳转查看编辑详情页
    viewEditorProfile(id, name) {
      router.push({ name: 'editor', params: { editorId: id, editorName: name } });
    }
  }
};
</script>

<style lang="sass" scoped>
@import "../assets/sass/pages/EditorsList.sass";
</style>
