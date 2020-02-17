import {ServiceError} from '@/grpc/adm_service/administrator_pb_service'

export default class GrpcUtils {
  public static processResult<T>(resolveParam: (value: T) => void, rejectParam: (reason?: any) => void, err: ServiceError | null, rsp: T | null): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      if (err === null && rsp !== null) {
        resolve(rsp)
        resolveParam(rsp)
      } else {
        reject(err)
        rejectParam(err)
      }
    })
  }
}
