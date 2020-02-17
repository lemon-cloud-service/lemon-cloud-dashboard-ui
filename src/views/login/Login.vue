<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png">
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import AdministratorService from '@/service/AdministratorService'
import {AdministratorLoginResponse} from '@/grpc/adm_dto/administrator_pb'
import {grpc} from '@improbable-eng/grpc-web'
import {ServiceError} from '@/grpc/adm_service/administrator_pb_service'
import AdministratorLoginRequestModel from '@/model/AdministratorLoginRequestModel'
import CrossBrowserHttpTransport = grpc.CrossBrowserHttpTransport

@Component
export default class Home extends Vue {
  mounted() {
    const req = new AdministratorLoginRequestModel()
    req.number = 'liuri'
    req.password = '123456'
    AdministratorService.login(req)
      .then((resp: AdministratorLoginResponse) => {
        console.log(resp.getToken())
        console.log(resp.getUsername())
      })
      .catch((e: ServiceError) => {
        console.log(e.message)
        console.log(e.code)
        console.log(e.metadata)
      })
  }
}
</script>
