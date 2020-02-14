// package: usr_service
// file: grpc/usr_service/admin.proto

import * as grpc_usr_service_admin_pb from "../../grpc/usr_service/admin_pb";
import * as grpc_usr_dto_admin_pb from "../../grpc/usr_dto/admin_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AdminServiceLogin = {
  readonly methodName: string;
  readonly service: typeof AdminService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_usr_dto_admin_pb.AdminLoginRequest;
  readonly responseType: typeof grpc_usr_dto_admin_pb.AdminLoginResponse;
};

export class AdminService {
  static readonly serviceName: string;
  static readonly Login: AdminServiceLogin;
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

export class AdminServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  login(
    requestMessage: grpc_usr_dto_admin_pb.AdminLoginRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_usr_dto_admin_pb.AdminLoginResponse|null) => void
  ): UnaryResponse;
  login(
    requestMessage: grpc_usr_dto_admin_pb.AdminLoginRequest,
    callback: (error: ServiceError|null, responseMessage: grpc_usr_dto_admin_pb.AdminLoginResponse|null) => void
  ): UnaryResponse;
}

