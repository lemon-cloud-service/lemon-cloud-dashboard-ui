import {AdministratorLoginRequestDto, AdministratorLoginResponseDto} from '@/grpc/adm_dto/administrator_pb'
import {AdministratorServiceClient, ServiceError} from '@/grpc/adm_service/administrator_pb_service'
import {grpc} from '@improbable-eng/grpc-web'
import GrpcUtils from '@/utils/GrcpUtils'
import $store from '@/store'
import NameUtil from '@/utils/NameUtil'
import StoreDefineAdministratorLogin from '@/define/store/administrator/StoreDefineAdministratorLogin'
import {AdministratorLoginForm, AdministratorLoginResult} from '@/model/Administrator'

export default class AdministratorService {
  private static administratorServiceClient = new AdministratorServiceClient('http://localhost:33385')
  private static authorizedMetadata: grpc.Metadata | null = null

  private static CACHE_KEY_AUTHORIZED_TOKEN: string = 'CACHE_KEY_AUTHORIZED_TOKEN'

  public static getAuthorizedMetadata(): grpc.Metadata {
    if (this.authorizedMetadata == null) {
      this.authorizedMetadata = new grpc.Metadata()
    }
    return this.authorizedMetadata
  }

  public static login(form: AdministratorLoginForm): Promise<AdministratorLoginResult> {
    return new Promise<AdministratorLoginResult>((resolve, reject) => {
      const req = new AdministratorLoginRequestDto()
      req.setNumber(form.number)
      req.setPassword(form.password)
      this.administratorServiceClient.login(req, this.getAuthorizedMetadata(), (err: ServiceError | null, rsp: AdministratorLoginResponseDto | null) => {
        GrpcUtils.processResult<AdministratorLoginResponseDto>(reject, err, rsp)
          .then((response: AdministratorLoginResponseDto) => {
            this.storeLoginStateToCache(response.getToken())
            this.applyAuthorizedTokenToRuntime(response.getToken())
            const result = new AdministratorLoginResult()
            result.token = response.getToken()
            resolve(result)
          })
      })
    })
  }

  public static applyAuthorizedTokenToRuntime(authorizedToken: string) {
    this.getAuthorizedMetadata().append('authorization', authorizedToken)
    $store.commit(NameUtil.CSCK(StoreDefineAdministratorLogin.SET_AUTHORIZED_TOKEN), authorizedToken)
  }

  public static storeLoginStateToCache(authorizedToken: string) {
    localStorage[this.CACHE_KEY_AUTHORIZED_TOKEN] = authorizedToken
  }

  public static restoreLoginStateFromCache() {
    const token: string = localStorage[this.CACHE_KEY_AUTHORIZED_TOKEN]
    this.applyAuthorizedTokenToRuntime(token === null || token === undefined ? '' : token)
  }
}
