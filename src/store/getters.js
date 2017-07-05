const getCount = state => {
  return state.listData.count
}
const getMenu = state => {
  return state.listData.items
}
export default {
  getCount,
  getMenu
}
