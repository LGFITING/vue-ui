<template class="Details">
<div class="wrapper">
    <h4 class="header">
        <span @click="goBack">〈</span>
        详情页
    </h4>
    <div class="res">
        <img :src="imgUrl" alt="图片">
    </div>
    <mt-navbar v-model="selected">
   <mt-tab-item id="1">基本信息</mt-tab-item>
   <mt-tab-item id="2">商品详情</mt-tab-item>
   <mt-tab-item id="3">评价1990</mt-tab-item>
 </mt-navbar>
</div>
</template>
<script type="text/javascript">
import { Navbar, TabItem } from 'mint-ui';
    export default{
        data(){
            return{
                imgUrl:'',
                selected:'1'
            }
        },
        created(){
            this.getUrl();
        },
        methods:{
            getUrl(){
                let vm = this;
                vm.imgUrl = this.$route.params.detailsId;
            },
            goBack(){
                this.$router.go(-1);
            }
        }
    }
</script>
<style lang="scss" scoped>
body{
    width: 100%;
}
.header{
    text-align:center;
    background: #46C95E;
    span{
        left: 10px;
        display: inline-block;
        position: absolute;
    }
}
.res{
    width: 100%;
    padding:10px 0px;
    padding-top: 2px;
    height:auto;
    text-align:center;
    img{
        margin:0 auto;
        width: 98%;
    }
}
.mint-navbar .mint-tab-item.is-selected{
  border-bottom: 3px solid #46C95E;
  color: #46C95E;
}
</style>
