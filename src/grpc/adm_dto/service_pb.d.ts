// package: adm_dto
// file: grpc/adm_dto/service.proto

import * as jspb from "google-protobuf";

export class ServiceInfoDto extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getTag(): string;
  setTag(value: string): void;

  getIntroduce(): string;
  setIntroduce(value: string): void;

  getServiceIcon(): string;
  setServiceIcon(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceInfoDto.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceInfoDto): ServiceInfoDto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceInfoDto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceInfoDto;
  static deserializeBinaryFromReader(message: ServiceInfoDto, reader: jspb.BinaryReader): ServiceInfoDto;
}

export namespace ServiceInfoDto {
  export type AsObject = {
    name: string,
    tag: string,
    introduce: string,
    serviceIcon: string,
  }
}

export class OnlineServiceInfoDto extends jspb.Message {
  getEndpointHost(): string;
  setEndpointHost(value: string): void;

  getEndpointPort(): number;
  setEndpointPort(value: number): void;

  getApplicationVersion(): string;
  setApplicationVersion(value: string): void;

  getApplicationVersionNum(): number;
  setApplicationVersionNum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OnlineServiceInfoDto.AsObject;
  static toObject(includeInstance: boolean, msg: OnlineServiceInfoDto): OnlineServiceInfoDto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OnlineServiceInfoDto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OnlineServiceInfoDto;
  static deserializeBinaryFromReader(message: OnlineServiceInfoDto, reader: jspb.BinaryReader): OnlineServiceInfoDto;
}

export namespace OnlineServiceInfoDto {
  export type AsObject = {
    endpointHost: string,
    endpointPort: number,
    applicationVersion: string,
    applicationVersionNum: number,
  }
}

export class ServiceStatusDto extends jspb.Message {
  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): ServiceInfoDto | undefined;
  setInfo(value?: ServiceInfoDto): void;

  clearOnlineInfoListList(): void;
  getOnlineInfoListList(): Array<OnlineServiceInfoDto>;
  setOnlineInfoListList(value: Array<OnlineServiceInfoDto>): void;
  addOnlineInfoList(value?: OnlineServiceInfoDto, index?: number): OnlineServiceInfoDto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceStatusDto.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceStatusDto): ServiceStatusDto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceStatusDto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceStatusDto;
  static deserializeBinaryFromReader(message: ServiceStatusDto, reader: jspb.BinaryReader): ServiceStatusDto;
}

export namespace ServiceStatusDto {
  export type AsObject = {
    info?: ServiceInfoDto.AsObject,
    onlineInfoListList: Array<OnlineServiceInfoDto.AsObject>,
  }
}

export class AllServiceStatusDto extends jspb.Message {
  clearAllServiceStatusListList(): void;
  getAllServiceStatusListList(): Array<ServiceStatusDto>;
  setAllServiceStatusListList(value: Array<ServiceStatusDto>): void;
  addAllServiceStatusList(value?: ServiceStatusDto, index?: number): ServiceStatusDto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllServiceStatusDto.AsObject;
  static toObject(includeInstance: boolean, msg: AllServiceStatusDto): AllServiceStatusDto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllServiceStatusDto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllServiceStatusDto;
  static deserializeBinaryFromReader(message: AllServiceStatusDto, reader: jspb.BinaryReader): AllServiceStatusDto;
}

export namespace AllServiceStatusDto {
  export type AsObject = {
    allServiceStatusListList: Array<ServiceStatusDto.AsObject>,
  }
}

