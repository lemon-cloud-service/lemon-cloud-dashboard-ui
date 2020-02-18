export default class NameUtil {
  public static CSCK(componentKey: string) {
    return componentKey.split('_')[0].replace('-', '_') + '/' + componentKey
  }
}
