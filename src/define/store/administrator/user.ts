export default class StoreDefineUser {
  private static readonly NAMESPACE = 'user_user_';
  public static readonly GET_DASHBOARD_BASE_INFO = StoreDefineUser.NAMESPACE + 'get_dashboard_base_info';
  public static readonly SET_DASHBOARD_BASE_INFO = StoreDefineUser.NAMESPACE + 'set_dashboard_base_info';
  public static readonly GET_SELECTED_DASHBOARD_MODEL = StoreDefineUser.NAMESPACE + 'get_selected_dashboard_model';
  public static readonly SET_SELECTED_DASHBOARD_MODEL = StoreDefineUser.NAMESPACE + 'set_selected_dashboard_model';
}
