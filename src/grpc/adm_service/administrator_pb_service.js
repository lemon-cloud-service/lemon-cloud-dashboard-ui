// package: adm_service
// file: grpc/adm_service/administrator.proto

var grpc_adm_service_administrator_pb = require("../../grpc/adm_service/administrator_pb");
var grpc_adm_dto_administrator_pb = require("../../grpc/adm_dto/administrator_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AdministratorService = (function () {
  function AdministratorService() {
  }

  AdministratorService.serviceName = "adm_service.AdministratorService";
  return AdministratorService;
}());

AdministratorService.Login = {
  methodName: "Login",
  service: AdministratorService,
  requestStream: false,
  responseStream: false,
  requestType: grpc_adm_dto_administrator_pb.AdministratorLoginRequest,
  responseType: grpc_adm_dto_administrator_pb.AdministratorLoginResponse
};

exports.AdministratorService = AdministratorService;

function AdministratorServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AdministratorServiceClient.prototype.login = function login(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AdministratorService.Login, {
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

exports.AdministratorServiceClient = AdministratorServiceClient;

