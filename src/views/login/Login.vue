<template>
  <div class="login-impl">
    <img alt="Vue logo" src="../../assets/logo.png">
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import AdministratorService from '@/service/AdministratorService'
import {ServiceError} from '@/grpc/adm_service/administrator_pb_service'
import ServiceService from '@/service/ServiceService'
import {AllServiceStatusDto} from '@/grpc/adm_dto/service_pb'
import {AdministratorLoginForm, AdministratorLoginResult} from '@/model/Administrator'

@Component
export default class Login extends Vue {
  mounted() {
    const req = new AdministratorLoginForm()
    req.number = 'liuri'
    req.password = '123456'
    AdministratorService.login(req)
      .then((resp: AdministratorLoginResult) => {
        console.log(resp.token)
        ServiceService.getMyAllService()
          .then((result: AllServiceStatusDto) => {
            console.log('11112233')
            console.log(JSON.stringify(result))
          })
          .catch(e => {
            console.log(e)
          })
      })
      .catch((e: ServiceError) => {
        console.log(e.message)
        console.log(e.code)
        console.log(e.metadata)
      })
  }
}
</script>
