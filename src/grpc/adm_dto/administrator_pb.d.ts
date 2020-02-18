// package: adm_dto
// file: grpc/adm_dto/administrator.proto

import * as jspb from 'google-protobuf'

export class AdministratorLoginRequestDto extends jspb.Message {
  getNumber(): string;
  setNumber(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdministratorLoginRequestDto.AsObject;
  static toObject(includeInstance: boolean, msg: AdministratorLoginRequestDto): AdministratorLoginRequestDto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdministratorLoginRequestDto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdministratorLoginRequestDto;
  static deserializeBinaryFromReader(message: AdministratorLoginRequestDto, reader: jspb.BinaryReader): AdministratorLoginRequestDto;
}

export namespace AdministratorLoginRequestDto {
  export type AsObject = {
    number: string,
    password: string,
  }
}

export class AdministratorLoginResponseDto extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdministratorLoginResponseDto.AsObject;
  static toObject(includeInstance: boolean, msg: AdministratorLoginResponseDto): AdministratorLoginResponseDto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdministratorLoginResponseDto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdministratorLoginResponseDto;
  static deserializeBinaryFromReader(message: AdministratorLoginResponseDto, reader: jspb.BinaryReader): AdministratorLoginResponseDto;
}

export namespace AdministratorLoginResponseDto {
  export type AsObject = {
    token: string,
  }
}

