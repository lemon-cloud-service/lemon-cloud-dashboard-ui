import {AllServiceStatusDto} from '@/grpc/adm_dto/service_pb'
import {ServiceError, ServiceServiceClient} from '@/grpc/adm_service/service_pb_service'
import {Empty} from 'google-protobuf/google/protobuf/empty_pb'
import AdministratorService from '@/service/AdministratorService'
import GrpcUtils from '@/utils/GrcpUtils'

export default class ServiceService {
  private static serviceServiceClient = new ServiceServiceClient('http://localhost:33385')

  public static getMyAllService(): Promise<AllServiceStatusDto> {
    return new Promise<AllServiceStatusDto>((resolve, reject) => {
      this.serviceServiceClient.getMyServiceList(new Empty(), AdministratorService.getAuthorizedMetadata(), (err: ServiceError | null, rsp: AllServiceStatusDto | null) => {
        GrpcUtils.processResult<AllServiceStatusDto>(reject, err, rsp)
          .then((resp: AllServiceStatusDto) => {
            resolve(resp)
          })
      })
    })
  }
}
