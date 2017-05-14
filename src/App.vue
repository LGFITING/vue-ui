<template>
  <div id="app">
      <!-- <div class="header">
         <my-header @ievent="ievent" event="complete" class="my-header my-header-left"></my-header>
         <my-header @ievent="ievent" event="title" class=" my-header my-header-middle"></my-header>
         <my-header @ievent="ievent" event="goback" class=" my-header my-header-right"></my-header>
     </div> -->
      <router-view keep-alive transition="fade" transition-mode='out-in'  linkActiveClass></router-view>
  </div>
</template>
<script>
import header from './components/Header.vue';
export default {
  name: 'app',
  data () {
    return {

    }
},
components:{
    'my-header':header
},
methods:{
    ievent(type){
            console.log(type);
    }
}
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html{
  font-family: "Microsoft YaHei";
}
.router-link-active{
  color: #4A8AF4;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  box-sizing: border-box;
  padding: 0;
}
.header{
    padding: 10px 10px;
}
.my-header{
    display: inline-block;
}
.my-header-right{
    float: left;
}
.my-header-left{
    float: right;
}
.my-header-middle{
    padding:0px 76px;
}
.banner{
  height:13rem;
  width:100%;
}
.banner img{
  width: 100%;
  height: 100%;
}
.mint-navbar{

}
a{
  text-decoration: none;
  color: gray;
}
footer{
  position: absolute;
  margin-top: 0px;
  width:100%;
  height: 100px;
}
.fade-transition {
 transition: opacity .3s ease;
}
.fade-enter, .fade-leave {
 opacity: 0;
}
.loading{
  position: fixed;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>
