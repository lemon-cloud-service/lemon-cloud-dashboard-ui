import Vue from 'vue'
import Vuex from 'vuex'

import administrator from './administrator'

Vue.use(Vuex)

const result: any = {}

function findStoreModule(tree: any) {
  Object.keys(tree).forEach(function (key) {
    // eslint-disable-next-line no-prototype-builtins
    if (tree[key].hasOwnProperty('state')) {
      result[key] = tree[key]
    } else {
      findStoreModule(tree[key])
    }
  })
}

findStoreModule({
  administrator
})

console.log(result)

export default new Vuex.Store({
  modules: result
})
