<template>
    <div class="hello">
        <el-button>{{msg}}</el-button>
    </div>
</template>
<script>
export default {
    name: 'HelloWorld',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>
<style lang="stylus" scoped>
    .hello
        color red
        p
            color green
</style>
