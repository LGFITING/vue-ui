<template class="Details">
<div class="wrapper">
    <h4 class="header">
        <span @click="goBack">〈</span>
        详情页
    </h4>
    <div class="res">
        <img :src="imgUrl" alt="图片">
    </div>

</div>
</template>
<script type="text/javascript">
    export default{
        data(){
            return{
                imgUrl:''
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
</style>
