<template>
    <el-container id="mainApp">
        <el-aside width="200px">
            <sideMenu></sideMenu>
        </el-aside>
        <el-container>
            <el-header>header</el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer>footer</el-footer>
        </el-container>
    </el-container>
</template>
<script>
import sideMenu from '@/page/layout/sideMenu'
export default {
    name: 'layout',
    data: function () {
        return {
            msg: 'this is layout'
        }
    },
    components: {
        sideMenu: sideMenu
    }
}
</script>
<style lang="stylus">
    #mainApp
        .el-aside
            border 1px solid
        .el-container
            .el-header
                border 1px solid
            .el-main
                border 1px solid
            .el-footer
                border 1px solid
</style>
