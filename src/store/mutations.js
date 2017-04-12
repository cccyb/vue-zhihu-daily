import * as types from './mutation-types';

export default {
  // 新增新闻内容
  [types.ADD_NEWS] (state, payload) {
    state.stories = state.stories.concat(payload.stories);
    state.ids = state.ids.concat(payload.ids);
  },
  // 刷新首页新闻内容
  [types.REFRESH_NEWS] (state) {
    state.stories = [];
  },
  // 修改是否是第一次进入首页
  [types.CHANGE_LOAD_STATE] (state) {
    state.isFirstLoad = !state.isFirstLoad;
  },
  // 修改当前新闻详情页面id
  [types.CHANGE_CURRENT_NEWS_ID] (state, id) {
    state.id = id;
    let index = state.ids.indexOf(id);
    state.nextId = state.ids[++index];
  },
  // 收藏新闻
  [types.TOGGLE_COLLECT] (state) {
    let index = state.collectIds.indexOf(state.id);
    if (index < 0) {
      state.collectIds.push(state.id);
      state.stories.map((item) => {
        if (item.id === state.id) {
          state.collectStories.push(item);
        }
      });
    } else {
      state.collectIds.splice(index, 1);
      state.collectStories.splice(index, 1);
    }
    state.isCollect = !state.isCollect;
  },
  // 判断当前收藏状态
  [types.JUDGE_COLLECT_STATE] (state) {
    if (state.collectIds.indexOf(state.id) < 0) {
      state.isCollect = false;
    } else {
      state.isCollect = true;
    }
  },
  // 修改新闻类型
  [types.CHANGE_NEWS_TYPE] (state, type) {
    state.newsType = type;
  },
  // 改变当前主题id
  [types.CHANGE_CURRENT_THEME_ID] (state, id) {
    state.currentThemeId = id;
  }
};
