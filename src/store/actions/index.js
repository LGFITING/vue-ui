//用常量代替
import type from '../mutation-types'
const actions = {
  addCount ({ commit }) {
    commit(type.getCount,{amount:10})
  }
}
export default {
  actions
}

//非常量代替
// const actions = {
//   addCount ({ commit }) {
//     commit('addCount')
//   }
// }
// export default {
//   actions
// }
