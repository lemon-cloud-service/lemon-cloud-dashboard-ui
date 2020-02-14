import * as jspb from "google-protobuf"

export class AdminLoginRequest extends jspb.Message {
  getNumber(): string;
  setNumber(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminLoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminLoginRequest): AdminLoginRequest.AsObject;
  static serializeBinaryToWriter(message: AdminLoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminLoginRequest;
  static deserializeBinaryFromReader(message: AdminLoginRequest, reader: jspb.BinaryReader): AdminLoginRequest;
}

export namespace AdminLoginRequest {
  export type AsObject = {
    number: string,
    password: string,
  }
}

export class AdminLoginResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminLoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AdminLoginResponse): AdminLoginResponse.AsObject;
  static serializeBinaryToWriter(message: AdminLoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminLoginResponse;
  static deserializeBinaryFromReader(message: AdminLoginResponse, reader: jspb.BinaryReader): AdminLoginResponse;
}

export namespace AdminLoginResponse {
  export type AsObject = {
    token: string,
    username: string,
  }
}

