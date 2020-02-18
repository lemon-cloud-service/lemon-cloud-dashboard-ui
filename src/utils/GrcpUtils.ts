import {ServiceError} from '@/grpc/adm_service/administrator_pb_service'

export default class GrpcUtils {
  public static processResult<T>(rejectParam: (reason?: any) => void, err: ServiceError | null, rsp: T | null): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      if (err === null && rsp !== null) {
        resolve(rsp)
      } else {
        reject(err)
        rejectParam(err)
      }
    })
  }

  public static wrapResponseModel<TO, TN>(rsp: TO, newRsp: TN): TN {
    Object.getOwnPropertyNames(newRsp).forEach(key => {
      console.log(key)
    })
    return newRsp
  }
}
