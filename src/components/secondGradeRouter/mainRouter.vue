<template>
    <div class="mainRouter">
        <mt-button type="default">二级路由</mt-button>
        <router-link to="/mainrouter/sonrouter1">
            <mt-button type="primary">二级路由1</mt-button>
        </router-link>
        <router-link to="/mainrouter/sonrouter2">
            <mt-button type="danger">二级路由2</mt-button>
        </router-link>
        <router-view :classObject="classObject"></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            classObject: {
                active: true,
                'text-danger': false
            }
        }
    }
}
</script>
<style>

</style>

