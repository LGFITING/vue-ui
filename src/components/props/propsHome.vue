<template>
  <div class="propsHome">
     <mt-button type="primary">{{propsData}}</mt-button>
     <get-props :propsData="propsData"></get-props>
  </div>
</template>
<script>
import getProps from './getProps.vue'
    export default{
        data(){
            return{
                propsData:'fromHome'
            }
        },
        components:{
            getProps
        }
    }
</script>
<style>

</style>
