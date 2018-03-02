export function getSideUserMenu () {
    return [{
        name: '游戏',
        path: '/game',
        children: [{
            name: '星露谷物语',
            path: 'stardewValley',
            img: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=724535061,1706146893&fm=58'
        }, {
            name: 'inside',
            path: 'inside',
            img: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2781164043,2313090265&fm=58&bpow=912&bpoh=570'
        }]
    }, {
        name: '动漫',
        path: '/comic',
        children: [{
            name: '钢之炼金术师',
            path: 'fullmetalAlchemist',
            img: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3246781116,2305267563&fm=58'
        }, {
            name: 'Fate/Zero',
            path: 'fateZero',
            img: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3278337191,3202370617&fm=58'
        }, {
            name: '日常',
            path: 'nichijou',
            img: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=765704742,4088800339&fm=58'
        }]
    }]
}
