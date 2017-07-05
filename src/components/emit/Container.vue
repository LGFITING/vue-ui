<template>
  <div class="">
  <h4>{{c}}</h4>
  <data-post></data-post>
  <data-recieve></data-recieve>
  </div>
</template>

<script>
import dataPost from './Post.vue'
import dataRecieve from './Recieve.vue'
export default {
  data(){
    return{
      c:"组件传递载体"
    }
  },
  components:{
    dataPost,
    dataRecieve
  }
}
</script>

<style lang="css">
</style>
