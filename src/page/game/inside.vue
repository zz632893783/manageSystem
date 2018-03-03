<template>
    <div class="inside">
        <p>{{msg}}</p>
    </div>
</template>
<script>
import { testFunc } from '@/api/game'
export default {
    data: function () {
        return {
            msg: 'this is inside'
        }
    },
    created: function () {
        testFunc().then(res => {
            console.log(res.data.data)
        })
    }
}
</script>
<style lang="stylus"></style>
