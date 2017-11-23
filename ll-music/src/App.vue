<template>
  <div id="app">
    <div class="top">
      <m-header></m-header>
      <tab></tab>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>

</template>

<script>
import MHeader from 'components/header/header'
import Tab from 'components/tab/tab'
import Vue from 'vue'

export default {
  name: 'app',
  components: {
    MHeader,
    Tab
  }
}
</script>

<style lang='stylus'>
</style>
