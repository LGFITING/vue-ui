<template class="Order">
 <div>
     <div>
         <h4 class="title"><a href="javascript:void(0);">分类</a></h4>
     </div>
     <div class="wrapper">
     <div class="lg-left-menu">
         <ul>
             <li v-for="(item,index) in items" @click="currentPage(index)" :class="{ 'isActive': isActive===index }">
             <span>{{item}}</span>
             </li>
         </ul>
     </div>
     <div class="lg-show-right">
         <ul>
             <li v-for="pic in pics" v-show="pic.state">
                 <router-link :to="{ name: 'details', params: { detailsId: pic.from }}">
                    <img :src="pic.from" alt="" v-for="n in 16">
                </router-link>
             </li>
         </ul>
     </div>
    </div>
   <mt-spinner type="snake" color="#26a2ff" class="loading" :size="40" v-show="loading"></mt-spinner>
   <mt-tabbar  v-model="active">
     <mt-tab-item id="home">
       <router-link to="/home">首页</router-link>
     </mt-tab-item>
     <mt-tab-item id="orders">
       <router-link to="/order">分类</router-link>
     </mt-tab-item>
     <mt-tab-item id="personal">
         <router-link to="/personal">个人中心</router-link>
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
        isActive:'',
        items:['粤菜','川菜','火锅','海鲜','小吃','外卖'],
        pics:[
            {from:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2965628390,441666516&fm=117&gp=0.jpg',state:true,id:0},
            {from:'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1382096677,1831266580&fm=73',state:false,id:1},
            {from:'https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=4284849427,3707712328&fm=73',state:false,id:2},
            {from:'https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=3483772192,975092753&fm=85&s=3BC517662A21732459A7806D0300E06B',state:false,id:3},
            {from:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4270987298,3418831235&fm=23&gp=0.jpg',state:false,id:4},
            {from:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1735211263,558401961&fm=23&gp=0.jpg',state:false,id:5},
        ],
        picst:{
          "from":[
            {
              "url":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2965628390,441666516&fm=117&gp=0.jpg",
              "state":true,
              "id":0
            },
            {
              "url":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2965628390,441666516&fm=117&gp=0.jpg",
              "state":true,
              "id":0
            },
            {
              "url":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2965628390,441666516&fm=117&gp=0.jpg",
              "state":true,
              "id":0
            },
            {
              "url":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2965628390,441666516&fm=117&gp=0.jpg",
              "state":true,
              "id":0
            },
            {
              "url":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2965628390,441666516&fm=117&gp=0.jpg",
              "state":true,
              "id":0
            }
          ]
        },
      }
    },
    created(){
      this.isActive = 0;
      console.log(this.picst.from[0].state);
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
            vm.isActive = index;
        }
    }
  }
</script>
<style lang='scss' scoped>
@charset "UTF-8";
$border-color:#46C95E;
$padding:10px 4px;
$border:1px solid #46C95E;
html{
  height: 100%;
  width: 100%;
}
@mixin title($color:#46C95E){
    text-align: center;
    color:$color;
    padding:10px 0;
    border:{
        bottom:1px solid $border-color;
    }
};
.title{
    background: #46C95E;
    a{
        color: #2c3e50;
         &:hover{
            color:#000;
        }
    }
    @include title;
}

.isActive{
  background: #46C95E;
  color:#fff;
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
            font:{
              size:12px;
              weight:700;
            }
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
    overflow: scroll;

    float: right;
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
@media screen and (max-height: 568px) {
  .lg-show-right{
        max-height: 480px;
  }
}

@media screen and(min-height:569px) and (max-height:735px){
  .lg-show-right{
        max-height: 580px;
  }
}

@media screen and(min-height:736px) and (max-height:1024px){
  .lg-show-right{
        max-height: 650px;
  }
}
</style>
