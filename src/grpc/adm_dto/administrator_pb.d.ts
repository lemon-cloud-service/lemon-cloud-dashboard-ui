// package: adm_dto
// file: grpc/adm_dto/administrator.proto

import * as jspb from "google-protobuf";

export class AdministratorLoginRequest extends jspb.Message {
  getNumber(): string;
  setNumber(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdministratorLoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdministratorLoginRequest): AdministratorLoginRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdministratorLoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdministratorLoginRequest;
  static deserializeBinaryFromReader(message: AdministratorLoginRequest, reader: jspb.BinaryReader): AdministratorLoginRequest;
}

export namespace AdministratorLoginRequest {
  export type AsObject = {
    number: string,
    password: string,
  }
}

export class AdministratorLoginResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdministratorLoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AdministratorLoginResponse): AdministratorLoginResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdministratorLoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdministratorLoginResponse;
  static deserializeBinaryFromReader(message: AdministratorLoginResponse, reader: jspb.BinaryReader): AdministratorLoginResponse;
}

export namespace AdministratorLoginResponse {
  export type AsObject = {
    token: string,
    username: string,
  }
}

