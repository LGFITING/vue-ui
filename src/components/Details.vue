<template>
<div class="">
    <img :src="imgUrl" alt="">
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
            }
        }
    }
</script>
