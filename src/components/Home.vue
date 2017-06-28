<template class="Home">
  <div id="">
  <mt-spinner type="snake" color="#26a2ff" class="loading" :size="40" v-show="loading"></mt-spinner>
  <!-- <my-banner></my-banner> -->
  <div class="menu">
    <p>{{ getResult }}</p>
    <button type="button" name="button" @click="addCount">点击加1</button>
  <!-- <mt-tabbar v-model="active" fixed>
    <mt-tab-item id="home">
      <router-link to="/home">首页</router-link>
    </mt-tab-item>
    <mt-tab-item id="orders">
      <router-link to="/order">分类</router-link>
    </mt-tab-item>
    <mt-tab-item id="personal">
        <router-link to="/personal">个人中心</router-link>
    </mt-tab-item>
  </mt-tabbar> -->
  </div>
</div>
</template>
<script type="text/javascript">
 import banner from './Banner.vue';
 import { mapGetters,mapActions } from 'vuex'
  export default{
    name: 'hello',
    data(){
      return{
        active:'home',
        loading:false,
        checked:'',
      }
    },
    computed: {
      ...mapGetters({
        getResult:'getCount'
      })
    },
    components:{
    'my-banner':banner
    },
    beforeCreate(){
        let vm = this;
        vm.loading = true;
    },
    mounted(){

    },
    methods:{
      ...mapActions([
        'addCount'
      ])
    }
  }
</script>
<style scoped>

.Goods{
    width: 100%;
}
.page-lazyload-image{

}
.Goods img{
    width: 60%;
    display: table-cell; //主要是这个属性
    vertical-align: middle;
    text-align: center;
    margin: auto;
}


</style>
