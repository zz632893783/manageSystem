<template>
    <el-menu unique-opened>
        <el-submenu v-for="(submenuItem, submenuIndex) in menuTree" v-bind:index="submenuIndex + ''" v-bind:key="submenuIndex + ''">
            <template slot="title">
                {{submenuItem.name}}
            </template>
            <el-menu-item-group>
                <el-menu-item v-for="(menuItem, menuItemIndex) in submenuItem.children" v-bind:index="submenuIndex + '-' + menuItemIndex" v-on:click="changeRouter(submenuItem, menuItem)" v-bind:key="submenuIndex + '-' + menuItemIndex">
                    {{menuItem.name}}
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>
<script>
import { getSideUserMenu } from '@/api/login'
export default {
    data: function () {
        return {
            menuTree: []
        }
    },
    methods: {
        changeRouter: function (submenuItem, menuItem) {
            let path = submenuItem.path + '/' + menuItem.path
            this.$router.replace(path)
        }
    },
    created: function () {
        this.menuTree = getSideUserMenu()
    }
}
</script>
<style lang="stylus"></style>
