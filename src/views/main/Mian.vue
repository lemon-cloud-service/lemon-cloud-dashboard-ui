<template>
  <div class="main-impl">
    <div class="content-component">
      <h1>This is an about page</h1>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component
export default class Main extends Vue {
  mounted() {
  }
}
</script>

<style lang="scss">
  .main-impl {
    .content-component {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
  }
</style>
