<template class="Order">
 <div id="">
   <mt-spinner type="snake" color="#26a2ff" class="loading" :size="40" v-show="loading"></mt-spinner>
   <div class="header">
     个人中心
   </div>
   <mt-navbar v-model="selected">
  <mt-tab-item id="1">任务</mt-tab-item>
  <mt-tab-item id="2">讨论</mt-tab-item>
  <mt-tab-item id="3">文档</mt-tab-item>
  <mt-tab-item id="4">文件</mt-tab-item>
</mt-navbar>
<br>
<!-- tab-container -->
<!-- <mt-tab-container v-model="selected" swipeable>
  <mt-tab-container-item id="1">
    <mt-cell v-for="n in 10" :title="'内容 ' + n" href="http://www.baidu.com"/>
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
    <mt-cell v-for="n in 4" :title="'测试 ' + n" />
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
    <mt-cell v-for="n in 6" :title="'选项 ' + n" />
  </mt-tab-container-item>
</mt-tab-container> -->
   <div class="project-content">
       <div class="project-name">

       </div>
   </div>
   <mt-tabbar v-model="active">
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

import { Navbar, TabItem } from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';

  export default{
    data(){
      return{
        loading:false,
        active:'personal',
        selected:'1'
      }
  },
  components:{
      Navbar,
      TabItem,
      TabContainer,
      TabContainerItem
  }
  }
</script>
<style scoped>
    .header{
        width: 100%;
        padding:10px;
        text-align:center;
        background:#6FC486;
    }
    .project-content{
        width: 100%;
        height:
    }
    .mint-navbar .mint-tab-item.is-selected{
        border-bottom:3px solid #6FC486;
        color: #6FC486;
    }
</style>
