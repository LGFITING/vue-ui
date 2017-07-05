<template>
  <div class="Navigation">
    <div class="header">
      <ul>
        <li v-for="(item,index) in navList"  :class="{ 'isActive': isActive===index }" @click="nextMenu(index)">{{item}}</li>
      </ul>
      <div class="nav-border" style="left:0px;">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      navList:[1,2,3],
      isActive:''
    }
  },
  created(){
    this.isActive = 0;
  },
  methods:{
    nextMenu(index) {
    var activeMenu = document.getElementsByClassName('nav-border')[0];
    activeMenu.style.left = index * activeMenu.offsetWidth+'px'
    }
  }
}
</script>

<style scoped>
.header{
  padding: 0px;
}
.header ul{
  display: flex;
}
.header li{
  display: inline-block;
  height: 40px;
  line-height: 40px;
  flex:1;
  text-align: center;
}
.nav-border{
  width: 33.33%;
  border-top: 3px solid #05e3e3;
  position: absolute;
}
.isActive{
  /*border-bottom: 2px solid #05e3e3;*/
}
</style>
