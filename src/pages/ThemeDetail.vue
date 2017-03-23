<template>
  <div class="theme-detail">
    <header>
      <img :src="attachImageUrl(data.image)" alt="">
      <i class="icon iconfont icon-back" @click="backIndex"></i>
      <span class="title">{{data.name}}</span>
      <i class="icon iconfont" :class="[isFocus ? 'icon-jian' : 'icon-jia']" @click="toggleThemeFocus"></i>
    </header>
    <div class="editors" @click="showEditors()">
      <span class="text">主编</span>
      <img v-for="item in data.editors" :src="attachImageUrl(item.avatar)" alt="">
      <i class="icon iconfont icon-more"></i>
    </div>
    <ul class="list">
			<li class="list-item" v-for="story in data.stories" :key="story.id" @click="viewDetail(story.id)">
				<span class="item-title">{{story.title}}</span>
				<div class="image-wrapper" v-if="story.images !== undefined">
					<img class="item-image" :src="attachImageUrl(story.images[0])" :alt="story.title">
				</div>
			</li>
		</ul>
  </div>
</template>

<script>
import router from '../router';
import axios from 'axios';
export default {
  data() {
    return {
      id: '',
      data: {},
      editorIds: [],
      isFocus: true
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.fetchData();
  },
  methods: {
    // 或许指定id主题下的数据
    fetchData() {
      axios.get('/theme/' + this.id)
        .then(response => {
          this.data = response.data;
          this.data.editors.map((item) => {
            this.editorIds.push(item.id);
          });
        });
    },
    // 跳转到对应id的文章详情页
    viewDetail: function(id) {
      this.$store.commit('changeCurrentNewsId', id);
      this.$store.commit('changeNewsType', 1);
      router.push({ name: 'newsDetail', params: { id: id } });
    },
    // 返回首页
    backIndex() {
      router.go(-1);
    },
    // 修改图片链接
    attachImageUrl: function(srcUrl) {
      if (srcUrl !== undefined) {
        return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
      }
    },
    // 切换主题关注
    toggleThemeFocus() {
      this.isFocus = !this.isFocus;
    },
    // 查看编辑列表
    showEditors() {
      router.push({ name: 'editorsList', params: { themeId: this.id } });
    }
  }
};
</script>

<style lang="sass" scoped>
@import "../assets/sass/components/ThemeDetail.sass";
</style>
