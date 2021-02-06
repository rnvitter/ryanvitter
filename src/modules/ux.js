import * as types from './mutation-types'

const namespaced = true

const initialState = {
  screenWidth: 0,
  mobile: false,
  mobilePhone: false,
  tab: 'Apps'
}

const mutations = {
  [types.SET_SCREEN_WIDTH] (state, width) {
    state.screenWidth = width
  },
  [types.SET_MOBILE] (state, isMobile) {
    state.mobile = isMobile
  },
  [types.SET_MOBILE_PHONE] (state, isMobile) {
    state.mobilePhone = isMobile
  },
  [types.SET_TAB] (state, tab) {
    state.tab = tab
  }
}

const actions = {
  setTab: ({ commit }, tab) => {
    commit(types.SET_TAB, tab)
  },
  setWidth: ({ commit }, width) => {
    commit(types.SET_SCREEN_WIDTH, width)
    if (width < 800) {
      commit(types.SET_MOBILE, true)
    } else {
      commit(types.SET_MOBILE, false)
    }

    if (width < 420) {
      commit(types.SET_MOBILE_PHONE, true)
    } else {
      commit(types.SET_MOBILE_PHONE, false)
    }
  }
}

const getters = {
  mobile (state) {
    return state.mobile
  },
  mobilePhone (state) {
    return state.mobilePhone
  },
  screenWidth (state) {
    return state.screenWidth
  },
  tab (state) {
    return state.tab
  }
}

export default {
  namespaced,
  state: initialState,
  mutations,
  actions,
  getters
}
