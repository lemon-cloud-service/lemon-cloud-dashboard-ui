<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script lang="ts">
import * as grpcWeb from 'grpc-web'
import { Component, Vue } from 'vue-property-decorator'
import { AdminServiceClient } from '@/generate/js_usr_service/AdminServiceClientPb'
import { AdminLoginRequest, AdminLoginResponse } from '@/generate/js_usr_dto/admin_pb'

@Component
export default class Home extends Vue {
  mounted () {
    const adminService = new AdminServiceClient('http://localhost:33386', null, null)
    const request = new AdminLoginRequest()
    request.setNumber('lemonit.cn')
    request.setPassword('123456')

    const call = adminService.login(request, { hello: 'lll' },
      // eslint-disable-next-line handle-callback-err
      (err: grpcWeb.Error, response: AdminLoginResponse) => {
        console.log(response.getToken())
      })
    call.on('status', (status: grpcWeb.Status) => {
      // ...
      console.log('status', status)
    })
  }
}
</script>
