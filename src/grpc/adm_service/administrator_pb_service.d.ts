// package: adm_service
// file: grpc/adm_service/administrator.proto

import * as grpc_adm_service_administrator_pb from "../../grpc/adm_service/administrator_pb";
import * as grpc_adm_dto_administrator_pb from "../../grpc/adm_dto/administrator_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AdministratorServiceLogin = {
  readonly methodName: string;
  readonly service: typeof AdministratorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_adm_dto_administrator_pb.AdministratorLoginRequestDto;
  readonly responseType: typeof grpc_adm_dto_administrator_pb.AdministratorLoginResponseDto;
};

export class AdministratorService {
  static readonly serviceName: string;
  static readonly Login: AdministratorServiceLogin;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class AdministratorServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  login(
    requestMessage: grpc_adm_dto_administrator_pb.AdministratorLoginRequestDto,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_adm_dto_administrator_pb.AdministratorLoginResponseDto|null) => void
  ): UnaryResponse;
  login(
    requestMessage: grpc_adm_dto_administrator_pb.AdministratorLoginRequestDto,
    callback: (error: ServiceError|null, responseMessage: grpc_adm_dto_administrator_pb.AdministratorLoginResponseDto|null) => void
  ): UnaryResponse;
}

