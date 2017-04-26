<template class="Header">
    <div>
    <div @click="eventType" v-model="event">{{event}}</div>
    <!-- <div @click="complete">测试</div> -->
    </div>

</template>
<script type="text/javascript">
export default{
    data(){
      return{

      }
  },
  props:['event'],
  methods:{
        eventType(){
            let type = this.event
            if(type=='cancel'){
                this.$emit('ievent',type);
            }
            if(type=='complete'){
                this.$emit('ievent',type);
            }
            if(type=='goback'){
                this.$emit('ievent',type);
            }
        }
  }
  }
</script>
<style media="screen">

</style>
