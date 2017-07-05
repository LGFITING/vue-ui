<template>
<div class="">
  <input type="text" name="" :value="b">
</div>
</template>

<script>
export default {
  data(){
    return {
      b:"接受来自a的数据"
    }
  },
  mounted(){
    this.$root.$on("a-msg", function (a) {
                 this.b = a;
          }.bind(this));
  }
}
</script>

<style lang="css">
</style>
