import * as types from './mutation-types'

const namespaced = true

const initialState = {
  screenWidth: 0,
  mobile: false,
  mobilePhone: false,
  menu: false
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
  [types.TOGGLE_MENU] (state) {
    state.menu = !state.menu
    console.log(state.menu)
  }
}

const actions = {
  setWidth: ({ commit }, width) => {
    commit(types.SET_SCREEN_WIDTH, width)
    if (width < 960) {
      commit(types.SET_MOBILE, true)
    } else {
      commit(types.SET_MOBILE, false)
    }

    if (width < 420) {
      commit(types.SET_MOBILE_PHONE, true)
    } else {
      commit(types.SET_MOBILE_PHONE, false)
    }
  },
  toggleMenu: ({ commit }) => {
    commit(types.TOGGLE_MENU)
  }
}

const getters = {
  screenWidth (state) {
    return state.screenWidth
  },
  mobile (state) {
    return state.mobile
  },
  mobilePhone (state) {
    return state.mobilePhone
  },
  menu (state) {
    return state.menu
  }
}

export default {
  namespaced,
  state: initialState,
  mutations,
  actions,
  getters
}
