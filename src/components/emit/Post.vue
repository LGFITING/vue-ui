<template>
  <div class="">
    <button type="button" name="button" @click="send">{{a}}</button>
  </div>
</template>

<script>
export default {
data(){
  return{
    a:"a组件data"
  }
},
methods:{
  send(){
    this.$root.$emit("a-msg", this.a);
  }
}
}

</script>

<style lang="css">
</style>
