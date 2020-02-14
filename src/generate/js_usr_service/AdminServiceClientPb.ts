/**
 * @fileoverview gRPC-Web generated client stub for usr_service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as protobuf_usr_dto_admin_pb from '../js_usr_dto/admin_pb';

export class AdminServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoLogin = new grpcWeb.AbstractClientBase.MethodInfo(
    protobuf_usr_dto_admin_pb.AdminLoginResponse,
    (request: protobuf_usr_dto_admin_pb.AdminLoginRequest) => {
      return request.serializeBinary();
    },
    protobuf_usr_dto_admin_pb.AdminLoginResponse.deserializeBinary
  );

  login(
    request: protobuf_usr_dto_admin_pb.AdminLoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protobuf_usr_dto_admin_pb.AdminLoginResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/usr_service.AdminService/Login',
      request,
      metadata || {},
      this.methodInfoLogin,
      callback);
  }

}

