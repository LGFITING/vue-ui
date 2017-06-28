import inActions from '../actions'
const state = {
  count:0
}

const mutations = {
  addCount(state) {
    state.count++
  }
}

const actions = inActions.actions;
const listData = {
  state,
  mutations,
  actions
}
export default {
  listData
}
