export default class NameUtil {
  public static CSCK(componentKey: string) {
    return componentKey.split('_')[1].replace('-', '_') + '/' + componentKey
  }
}
