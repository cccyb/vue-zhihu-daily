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
    collectIds: [] // 收藏新闻数组id
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
    // 新增收藏新闻id
    addCollect(state) {
      state.collectIds.push(state.id);
    },
    // 取消收藏新闻id
    cancelCollect(state) {
      let index = state.ids.indexOf(state.id);
      state.collectIds.splice(index, 1);
    }
  }
});
