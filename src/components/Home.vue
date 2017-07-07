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
  <button type="button" name="button" @click="update">立即获得DOM节点（发生在视图mounted前）</button>
  <p id="up">{{ message }}</p>
  </div>
  <h3>计算属性立即生效和同步更新</h3>
  <input type="text" name="" value="" v-model="firstName">
  <input type="text" name="" value="" v-model="lastName">
  <input type="text" name="" value="" v-model="fullName">
  <h3>WATCH当data变化时，watch生效</h3>
  <h3 @click="changeArray">点击改变数组元素视图更新$set</h3>
  <div class="">
    <ul>
      <li v-for="(item,index) in setArray" :key="item.id" @click="currentId(index)" ref="getRef"  :class="{ 'cActive': classActive===index }" >{{index}}&nbsp;&nbsp;{{item}}</li>
    </ul>
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
        message:'更新前',
        firstName: 'L',
        lastName: 'G',
        fullName:'',
        setArray:[1,2,3],
        classActive:false
      }
    },
    computed: {
      ...mapGetters({
        getResult:'getCount'
      }),
        // fullName: function () {
        //   return this.firstName + ' ' + this.lastName
        // }
    },
    components:{
    'my-banner':banner
    },
    watch: {
      firstName: function (to,from) {
            this.fullName = to + ' ' + this.lastName
          },
          lastName: function (val) {
            this.fullName = this.firstName + ' ' + val
          }
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
      ]),
      update(){
        this.message = '更新完成'
        var value = document.getElementById("up");
        this.$nextTick(function(){
          alert(value.innerHTML)
        })
        alert(value.innerHTML)
      },
      changeArray() {
        console.log(this.setArray[1])
        let changeEl = 4;
        this.$set(this.setArray,2,changeEl)
      },
      currentId(index) {
        //用$ref可获取dom节点
         console.log(this.$refs.getRef[index].innerHTML)
        //  this.$refs.getRef[index].style.background="black"
         alert(index)
         this.classActive = index;
      }
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
    /*主要是这个属性*/
    display: table-cell; 
    vertical-align: middle;
    text-align: center;
    margin: auto;
}
li:hover{
  background: gray;
  cursor: pointer;
}
.cActive{
  background:black;
}
</style>
