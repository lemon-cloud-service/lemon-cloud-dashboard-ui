import StoreDefineLogin from '@/define/store/administrator/StoreDefineAdministratorLogin'

export interface State {
  authorizedToken: string;
}

const state: State = {
  authorizedToken: ''
}

const getters = {
  [StoreDefineLogin.GET_AUTHORIZED_TOKEN](state: State) {
    return state.authorizedToken
  }
}

const mutations = {
  [StoreDefineLogin.SET_AUTHORIZED_TOKEN](state: State, newState: string) {
    state.authorizedToken = newState
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
