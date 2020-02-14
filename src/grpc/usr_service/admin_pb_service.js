// package: usr_service
// file: grpc/usr_service/admin.proto

var grpc_usr_service_admin_pb = require("../../grpc/usr_service/admin_pb");
var grpc_usr_dto_admin_pb = require("../../grpc/usr_dto/admin_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AdminService = (function () {
  function AdminService() {}
  AdminService.serviceName = "usr_service.AdminService";
  return AdminService;
}());

AdminService.Login = {
  methodName: "Login",
  service: AdminService,
  requestStream: false,
  responseStream: false,
  requestType: grpc_usr_dto_admin_pb.AdminLoginRequest,
  responseType: grpc_usr_dto_admin_pb.AdminLoginResponse
};

exports.AdminService = AdminService;

function AdminServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AdminServiceClient.prototype.login = function login(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AdminService.Login, {
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

exports.AdminServiceClient = AdminServiceClient;

