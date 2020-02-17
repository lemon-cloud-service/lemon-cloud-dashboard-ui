import {AdministratorLoginRequest, AdministratorLoginResponse} from '@/grpc/adm_dto/administrator_pb'
import {AdministratorServiceClient, ServiceError} from '@/grpc/adm_service/administrator_pb_service'
import {grpc} from '@improbable-eng/grpc-web'
import GrpcUtils from '@/utils/GrcpUtils'
import AdministratorLoginRequestModel from '@/model/AdministratorLoginRequestModel'

export default class AdministratorService {
  private static administratorServiceClient = new AdministratorServiceClient('http://localhost:33386')
  private static authorizedMetadata: grpc.Metadata | null = null

  public static getAuthorizedMetadata(): grpc.Metadata {
    if (this.authorizedMetadata == null) {
      this.authorizedMetadata = new grpc.Metadata()
    }
    return this.authorizedMetadata
  }

  public static login(request: AdministratorLoginRequestModel): Promise<AdministratorLoginResponse> {
    return new Promise<AdministratorLoginResponse>((resolve, reject) => {
      const req = new AdministratorLoginRequest()
      req.setNumber(request.number)
      req.setPassword(request.password)
      this.administratorServiceClient.login(req, this.getAuthorizedMetadata(), (err: ServiceError | null, rsp: AdministratorLoginResponse | null) => {
        GrpcUtils.processResult<AdministratorLoginResponse>(resolve, reject, err, rsp)
          .then((response: AdministratorLoginResponse) => {
            this.getAuthorizedMetadata().append('authorization', response.getToken())
          })
      })
    })
  }
}
