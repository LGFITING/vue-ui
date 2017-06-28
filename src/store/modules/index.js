const state = {
  count:0
}

const mutations = {
  addCount(state) {
    state.count++
  }
}

const actions = {
  addCount ({ commit }) {
  commit('addCount')
  }
}

const listData = {
  state,
  mutations,
  actions
}
export default {
  listData
}
