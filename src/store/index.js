import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stories: [], // 新闻内容数组
    ids: [], // 新闻id数组
    id: '', // 当前新闻详情的id
    nextId: '', // 下一篇新闻的id
    isFirstLoad: true, // 是否是第一次进入首页
    collectIds: [], // 收藏新闻数组id
    isCollect: false, // 当前文章是否已收藏
    comments: 0, // 评论总数
    long_comments: 0, // 长评论总数
    short_comments: 0, // 短评论总数
    popularity: 0 // 点赞总数
  },
  getters: {
    collectText: state => {
      return state.isCollect ? '取消收藏' : '收藏';
    } 
  },
  mutations: {
    // 新增新闻内容
    addNews(state, payload) {
      state.stories = state.stories.concat(payload.stories);
      state.ids = state.ids.concat(payload.ids);
    },
    // 修改是否是第一次进入首页
    changeLoadState(state) {
      state.isFirstLoad = !state.isFirstLoad;
    },
    // 修改当前新闻详情页面id
    changeCurrentNewsId(state, id) {
      state.id = id;
      let index = state.ids.indexOf(id);
      state.nextId = state.ids[++index];
    },
    // 收藏新闻
    toggleCollect(state) {
      let index = state.collectIds.indexOf(state.id);
      if (index < 0) {
        state.collectIds.push(state.id);
      } else {
        state.collectIds.splice(index, 1);
      }
      state.isCollect = !state.isCollect;
    },
    // 判断当前收藏状态
    judgeCollectState(state) {
      if (state.collectIds.indexOf(state.id) < 0) {
        state.isCollect = false;
      } else {
        state.isCollect = true;
      }
    }
  }
});
