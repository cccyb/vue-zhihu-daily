import * as types from './mutation-types';

export default {
  // 新增新闻内容
  addNews: ({ commit }, payload) => {
    commit(types.ADD_NEWS, payload);
  },
  // 修改是否是第一次进入首页
  changeLoadState: ({ commit }) => {
    commit(types.CHANGE_LOAD_STATE);
  },
  // 刷新首页新闻内容
  refreshNews: ({ commit }) => {
    commit(types.REFRESH_NEWS);
  },
  // 修改当前新闻详情页面id
  changeCurrentNewsId: ({ commit }, id) => {
    commit(types.CHANGE_CURRENT_NEWS_ID, id);
  },
  // 收藏新闻
  toggleCollect: ({ commit }) => {
    commit(types.TOGGLE_COLLECT);
  },
  // 判断当前收藏状态
  judgeCollectState: ({ commit }) => {
    commit(types.JUDGE_COLLECT_STATE);
  },
  // 修改新闻类型
  changeNewsType: ({ commit }, type) => {
    commit(types.CHANGE_NEWS_TYPE, type);
  },
  // 改变当前主题id
  changeCurrentThemeId: ({ commit }, id) => {
    commit(types.CHANGE_CURRENT_THEME_ID, id);
  }
};
