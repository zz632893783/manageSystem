import request from '@/api/axios'
export function testFunc () {
    return request.get('http://ikindness.cn/api/test/getFund')
}
