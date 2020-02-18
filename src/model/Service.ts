export class ServiceInfo {
  name: string = ''
  tag: string = ''
  introduce: string = ''
  serviceIcon: string = ''
}

export class OnlineServiceInfo {
  endpointHost: string = ''
  endpointPort: number = 0
  applicationVersion: string = ''
  applicationVersionNum: number = 0
}

export class ServiceStatus {
  info: ServiceInfo = new ServiceInfo()
  onlineInfoList: OnlineServiceInfo[] = []
}

export class AllServiceStatus {
  allServiceStatusList: ServiceStatus[] = []
}
