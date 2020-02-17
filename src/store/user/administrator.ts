import StoreDefineUser from '@/define/store/administrator/user'
import DashboardBaseInfo from '@/model/administrator/DashboardBaseInfo'
import DashboardModelInfo from '@/model/administrator/DashboardModelInfo'

export interface State {
  dashboardBaseInfo: DashboardBaseInfo;
  selectedDashboardModule: DashboardModelInfo
}

const state: State = {
  dashboardBaseInfo: new DashboardBaseInfo(),
  selectedDashboardModule: new DashboardModelInfo()
}

const getters = {
  [StoreDefineUser.GET_DASHBOARD_BASE_INFO](state: State) {
    return state.dashboardBaseInfo
  },
  [StoreDefineUser.GET_SELECTED_DASHBOARD_MODEL](state: State) {
    return state.selectedDashboardModule
  }
}

const mutations = {
  [StoreDefineUser.SET_DASHBOARD_BASE_INFO](state: State, dashboardBaseInfo: DashboardBaseInfo) {
    state.dashboardBaseInfo = dashboardBaseInfo
  },
  [StoreDefineUser.SET_SELECTED_DASHBOARD_MODEL](state: State, selectedDashboardModule: DashboardModelInfo) {
    state.selectedDashboardModule = selectedDashboardModule
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
