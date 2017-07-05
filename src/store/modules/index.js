import inActions from '../actions'
import type from '../mutation-types'

const state = {
  count:0,
  items:['粤菜','川菜','火锅','海鲜','小吃','外卖']
}

const mutations = {
  //常量代替，只修改方法名和action中的commit
  [type.getCount](state,payload) {
    state.count+=payload.amount
  }
  //非常量代替
  // addCount(state) {
  //   state.count++
  // }
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
