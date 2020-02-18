<template>
  <v-app id="app">
    <div class="background-component">
      <v-img
        src="https://zw-health-1255447022.cos.ap-beijing.myqcloud.com/background-default.jpg"
        class="background-image background-size"/>
      <div class="background-image-mask background-size"></div>
    </div>
    <router-view class="router-root"/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {Watch} from 'vue-property-decorator'
import NameUtil from '@/utils/NameUtil'
import StoreDefineLogin from '@/define/store/administrator/StoreDefineAdministratorLogin'

@Component
export default class App extends Vue {
  mounted() {
  }

  get authorizedToken(): boolean {
    return this.$store.getters[NameUtil.CSCK(StoreDefineLogin.GET_AUTHORIZED_TOKEN)]
  }

  @Watch('authorizedToken')
  onAuthorizedTokenChanged(authorizedToken: string) {
    this.$router.replace(authorizedToken === '' ? 'login' : '/main/-')
  }
}
</script>

<style lang="scss">
  #app {
    --primary: #1976D2;
    --secondary: #424242;
    --accent: #82B1FF;
    --error: #FF5252;
    --info: #2196F3;
    --success: #4CAF50;
    --warning: #FFC107;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;

    .background-component {
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;

      .background-size {
        width: 100%;
        height: 100%;
      }

      .background-image {
        -webkit-filter: blur(10px);
        -ms-filter: blur(10px);
        filter: blur(10px);
        z-index: 0;
      }

      .background-image-mask {
        background: rgba(0, 0, 0, 0.2);
      }
    }

    .router-root {
      display: flex;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
  }
</style>
