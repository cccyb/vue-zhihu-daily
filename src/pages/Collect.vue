<template>
  <div class="collect">
    <mt-header fixed title="收藏">
      <mt-button icon="back" slot="left" @click="back"></mt-button>
    </mt-header>
    <ul class="list" ref="collectList">
      <li class="list-item" v-for="story in this.$store.state.collectStories" :key="story.id" @click="viewDetail(story.id)">
				<span class="item-title">{{story.title}}</span>
				<div class="image-wrapper">
					<img class="item-image" v-lazy.collectList="attachImageUrl(story.images[0])" :alt="story.title">
					<i class="icon iconfont icon-duotu multipic" v-if="story.multipic">多图</i>
				</div>
			</li>
    </ul>
  </div>
</template>

<script>
  import router from '../router';
  export default {
    data() {
      return {
      };
    },
    created() {
    },
    methods: {
      // 返回
      back() {
        router.push({ name: 'index' });
      },
      // 修改图片链接
      attachImageUrl: function(srcUrl) {
        if (srcUrl !== undefined) {
          return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
        }
      },
      // 查询新闻详情
      viewDetail(id) {
        this.$store.dispatch('changeCurrentNewsId', id);
        this.$store.dispatch('changeNewsType', 2);
        router.push({ name: 'newsDetail', params: { id: id } });
      }
    }
  };
</script>

<style lang="sass" scoped>
@import "../assets/sass/pages/Collect.sass";
</style>
