<template class="Details">
<div class="wrapper">
    <h4 class="header">
        详情页
    </h4>
    <h4 class="header header-fixed">
        <span @click="goBack">〈</span>
        详情页
    </h4>
    <div class="res">
        <img :src="imgUrl" alt="图片">
    </div>
    <div class="lg-goods-msg">
      <h6 class="title">名称对应商品名称对应商品名称对应商品名称对应商品名称对应商品名称</h6>
        <div class="price">
            <p>$120.00</p>
            <p class="limit">限购信息</p>
        </div>
        <div class="commit">
          <p>
              <button @click="chooseSize">类型选择</button>
              <mt-actionsheet
              :actions="actions"
              v-model="sheetVisible"
              cancelText="取消">
              </mt-actionsheet>
          </p>
            <p class="number">
              <span class="minus" @click="minus" :class="{ isActive: isActive}">
                -
              </span>
              <input type="number" name="" readonly v-model="quantity">
              <span class="add" style="margin-left:-3px;" @click="add">
                +
              </span>
            </p>
            <p>
              <button>立即购买</button>
            </p>
        </div>
        <div class="sales">
            <p>快递：顺丰</p>
            <p>月销量1111件</p>
            <p>广东惠州</p>
        </div>
    </div>
  <mt-navbar v-model="selected">
       <mt-tab-item id="1">基本信息</mt-tab-item>
       <mt-tab-item id="2">商品详情</mt-tab-item>
       <mt-tab-item id="3">评价1990</mt-tab-item>
   </mt-navbar>
   <mt-tab-container v-model="selected" swipeable>
     <mt-tab-container-item id="1">
      <div class="good-msg">
          基本信息</br>
          基本信息</br>
          基本信息</br>
          基本信息</br>
          基本信息</br>
          基本信息</br>
          基本信息</br>
          基本信息</br>
          基本信息</br>
          基本信息</br>
          基本信息</br>
          基本信息</br>
          基本信息</br>
          基本信息</br>
      </div>
     </mt-tab-container-item>
     <mt-tab-container-item id="2">
       <div class="good-msg">
           商品详情</br>
           商品详情</br>
           商品详情</br>
           商品详情</br>
           商品详情</br>
           商品详情</br>
           商品详情</br>
           商品详情</br>
           商品详情</br>
           商品详情</br>
           商品详情</br>
           商品详情</br>
           商品详情</br>
       </div>
     </mt-tab-container-item>
     <mt-tab-container-item id="3">
       <div class="good-msg">
           评价列表</br>
           评价列表</br>
           评价列表</br>
           评价列表</br>
           评价列表</br>
           评价列表</br>
           评价列表</br>
           评价列表</br>
           评价列表</br>
           评价列表</br>
           评价列表</br>
           评价列表</br>
           评价列表</br>
       </div>
     </mt-tab-container-item>
   </mt-tab-container>
</div>
</template>
<script type="text/javascript">
import { Navbar, TabItem } from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';
import { Actionsheet } from 'mint-ui';
    export default{
        data(){
            return{
                imgUrl:'',
                selected:'1',
                quantity:1,
                isActive:true,
                sheetVisible:false,
                actions:[
                  {"name":'24寸',"method":"commit1"},
                  {"name":'25寸',"method":"commit2"},
                ]
            }
        },
        components:{
          Actionsheet
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
            },
            add(){
              let vm = this;
              if(vm.quantity>0){
                vm.isActive = false;
              }
              vm.quantity++;
            },
            minus(){
              let vm = this;
              if(vm.quantity>1){
                  vm.quantity--;
              }
              if(vm.quantity==1){
                vm.isActive =true;
              }
            },
            chooseSize(){
              let vm = this;
              vm.sheetVisible = true;
            }
        }
    }
</script>
<style lang="scss" scoped>
$white:#fff;
body{
    width: 100%;
}
.wrapper{
  background: #C1C1C1;
}
.header {
    text-align:center;
    background: #46C95E;
    span{
        left: 10px;
        display: inline-block;
        position: absolute;
    }
}

.header-fixed{
  position: fixed;
  width: 100%;
  top:0px;
}

.res{
    width: 100%;
    height:auto;
    padding:0px;
    text-align:center;
    img{
        margin:0 auto;
        width: 100%;
        height: auto;
        display: block;
    }
}
.lg-goods-msg{
  padding:8px;
  background: $white;
  margin-bottom: 6px;
  .title{
    width: 100%;
    white-space:break-all;
  }
  .price {
          p {
              color:#E04940;
              margin: 6px 0px;
          font: {
                size:14px;
                weight:700;
                }
            }
          .limit {
                font-size: 12px;
                font-weight: 300;
            }
          }
  .sales {
    display: flex;
    p {
      font-size: 12px;
      color: #C1C1C1;
      flex:1;
    }
    p:last-child {
      text-align: right;
    }
  }
}
.commit {
  display: flex;
  p {
    flex:1;
    font-size:12px;
    font-weight:700;
    padding:6px 0px;
    }
    p:last-child,p:first-child {
      button{
        text-align: center;
        color:#fff;
        background: #BE0000;
        width: 100%;
        border: 1px solid #BE0000;
        padding:8px;
      }
    }
    p:first-child {
      button{
        box-sizing: border-box;
        background: none;
        color:#000;
        border: 1px solid #D0D0D0;
      }
    }
    .number {
      text-align: center;
      margin-top:0px;
    span {
      border: 1px solid #D0D0D0;
      text-align: center;
      font-size:14px;
      padding:8px 10px;
    }
    input {
      width: 30px;
      text-align: center;
      font-size:14px;
      padding:8px 0px;
      border: none;
      border:{
        top:1px solid #D0D0D0;
        bottom:1px solid #D0D0D0;;
      }
    }
}
}
.isActive {
  background: #C1C1C1;
}
.good-msg {
  background: $white;
}
.mint-navbar .mint-tab-item.is-selected{
  border-bottom: 5px solid #46C95E;
  color: #46C95E;
}
</style>
