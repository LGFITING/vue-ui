let myMixin = {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      alert('hello from mixin!')
    }
  }
}
export default myMixin;