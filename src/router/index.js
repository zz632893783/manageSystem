import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
import layout from '@/page/layout/layout'
import stardewValley from '@/page/game/stardewValley'
import inside from '@/page/game/inside'
import fullmetalAlchemist from '@/page/comic/fullmetalAlchemist'
import fateZero from '@/page/comic/fateZero'
import nichijou from '@/page/comic/nichijou'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: '首页',
        component: home
    }, {
        path: '/game',
        name: '游戏',
        component: layout,
        children: [{
            path: 'stardewValley',
            component: stardewValley
        }, {
            path: 'inside',
            component: inside
        }]
    }, {
        path: '/comic',
        name: '动漫',
        component: layout,
        children: [{
            path: 'fullmetalAlchemist',
            component: fullmetalAlchemist
        }, {
            path: 'fateZero',
            component: fateZero
        }, {
            path: 'nichijou',
            component: nichijou
        }]
    }]
})
