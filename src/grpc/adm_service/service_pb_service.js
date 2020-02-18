// package: adm_service
// file: grpc/adm_service/service.proto

var grpc_adm_service_service_pb = require("../../grpc/adm_service/service_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc_adm_dto_service_pb = require("../../grpc/adm_dto/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ServiceService = (function () {
  function ServiceService() {}
  ServiceService.serviceName = "adm_service.ServiceService";
  return ServiceService;
}());

ServiceService.GetMyServiceList = {
  methodName: "GetMyServiceList",
  service: ServiceService,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: grpc_adm_dto_service_pb.AllServiceStatusDto
};

exports.ServiceService = ServiceService;

function ServiceServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ServiceServiceClient.prototype.getMyServiceList = function getMyServiceList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ServiceService.GetMyServiceList, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.ServiceServiceClient = ServiceServiceClient;

