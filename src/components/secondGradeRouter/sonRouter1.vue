<template>
    <div :class="classObject">
        sonRouter1</div>
</template>
<script>
import myMixin from './mixin'
export default {
    data() {
        return {

        }
    },
    mixins: [myMixin],
    props: ['classObject']
}
</script>
<style>
.active{
    color:blue;
}
</style>
