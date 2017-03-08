<template>
	<div class="news-list">
		<ul class="list">
			<li class="list-item" v-for="story in stories" :key="story.id" @click="viewDetail(story.id)">
				<span class="item-title">{{story.title}}</span>
				<div class="image-wrapper">
					<img class="item-image" :src="'http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=' + story.images[0]" :alt="story.title">
					<i class="icon iconfont icon-duotu multipic" v-if="story.multipic">多图</i>
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
				stories: {}
			};
		},
		created() {
			// 获取最新新闻
			axios.get('/news/latest')
				.then(response => {
					this.stories = response.data.stories;
					console.log(this.stories);
				})
				.catch(error => {
					console.log(error);
				});
		},
		methods: {
      viewDetail: function(id) {
        // 跳转到对应id的文章详情页
        router.push({ name: 'newsDetail', params: { id: id } });
      }
    }
	};
</script>

<style lang="sass">
@import "../assets/sass/components/NewsList.sass";
</style>
