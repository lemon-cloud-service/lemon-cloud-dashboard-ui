import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'
import NameUtil from '@/utils/NameUtil'
import StoreDefineLogin from '@/define/store/administrator/login'

Vue.use(Vuex)

let result: any = {}

function findStoreModule(tree: any) {
  Object.keys(tree).forEach(function (key) {
    if (tree[key].hasOwnProperty('state')) {
      result[key] = tree[key]
    } else {
      findStoreModule(tree[key])
    }
  })
}

findStoreModule({
  user
})

console.log('asdfasdf')
console.log(result)
console.log('asdfasdfasd')

console.log(NameUtil.CSCK(StoreDefineLogin.GET_LOGIN_STATE))

export default new Vuex.Store({
  modules: result
})
