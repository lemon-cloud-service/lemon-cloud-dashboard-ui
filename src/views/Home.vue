<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import {AdminServiceClient, ServiceError} from '@/grpc/usr_service/admin_pb_service'
import {AdminLoginRequest, AdminLoginResponse} from '@/grpc/usr_dto/admin_pb'

@Component
export default class Home extends Vue {
  mounted() {
    const client = new AdminServiceClient('http://localhost:33386')
    const req = new AdminLoginRequest()
    req.setNumber('lemonitcn')
    req.setPassword('123456')
    client.login(req, (err: ServiceError | null, rsp: AdminLoginResponse | null) => {
      console.log('err%O, ', err)
      console.log(rsp?.getUsername())
      console.log(rsp?.getToken())
    })
  }
}
</script>
