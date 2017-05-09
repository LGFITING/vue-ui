<template class="Order">
 <div>
     <div>
         <h5 class="title"><a href="javascript:void(0);">sass样式</a></h5>
     </div>
     <div class="wrapper">
     <div class="lg-left-menu">
         <ul>
             <li v-for="(item,index) in items" @click="currentPage(index)">
             <span>{{item}}</span>
             </li>
         </ul>
     </div>
     <div class="lg-show-right" v-for="pic in pics" v-show="pic.state">
         <ul>
             <li>
                 <router-link :to="{ name: 'details', params: { detailsId: pic.from }}">
                    <img :src="pic.from" alt="">
                </router-link>
             </li>
         </ul>
     </div>
    </div>
   <mt-spinner type="snake" color="#26a2ff" class="loading" :size="40" v-show="loading"></mt-spinner>
   <mt-tabbar  v-model="active">
     <mt-tab-item id="home">
       <router-link to="/home">home</router-link>
     </mt-tab-item>
     <mt-tab-item id="orders">
       <router-link to="/order">orders</router-link>
     </mt-tab-item>
     <mt-tab-item id="personal">
         <router-link to="/personal">personal</router-link>
     </mt-tab-item>
   </mt-tabbar>
 </div>
</template>

<script type="text/javascript">
  export default
  {
    data(){
      return{
        loading:false,
        active:'orders',
        items:['1','2','3','4','5','6'],
        pics:[
            {from:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2965628390,441666516&fm=117&gp=0.jpg',state:true,id:0},
            {from:'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1382096677,1831266580&fm=73',state:false,id:1},
            {from:'https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=4284849427,3707712328&fm=73',state:false,id:2},
            {from:'https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=3483772192,975092753&fm=85&s=3BC517662A21732459A7806D0300E06B',state:false,id:3},
            {from:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4270987298,3418831235&fm=23&gp=0.jpg',state:false,id:4},
            {from:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1735211263,558401961&fm=23&gp=0.jpg',state:false,id:5},
        ]
      }
    },
    mounted(){

    },
    methods:{
        currentPage(index){
            let vm = this;
            for(let i = 0;i<vm.pics.length;i++){
                vm.pics[i].state = false;
            }
            vm.pics[index].state = true;
        }
    }
  }
</script>
<style lang='scss' scoped>
@charset "UTF-8";
$border-color:#46C95E;
$padding:10px 4px;
$border:1px solid #46C95E;
@mixin title($color:#46C95E){
    text-align: center;
    color:$color;
    padding:10px 0;
    border:{
        bottom:1px solid $border-color;
    }
};
.title{
    a{
        color: #46C95E;
         &:hover{
            color:#000;
        }
    }
    @include title;
}

.lg-left-menu{
    border:1px solid $border-color;
    display: inline-block;
    border:{
        left:none;
        bottom:none;
    }
    width: 30%;
    height: auto;
    margin-top:10px;
    ul{
        width: 100%;
        li{
            text-align: center;
            padding: 10px;
            border: {
                bottom:$border;
            }
        }
    }
}

.lg-show-right{
    margin-top:10px;
    border: $border;
    display: inline-block;
    width: 67.7%;
    float: right;
    height: auto;
    ul{
        li{
            list-style: none;
            img{
                width: 46%;
                height: auto;
                float: left;
                margin:4px;
            }
        }
    }
}
</style>
