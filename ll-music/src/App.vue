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

export default {
  name: 'app',
  components: {
    MHeader,
    Tab
  }
}
</script>

<style lang='stylus'>
.top 
  // position:fixed
  // top:0
  // left:0
</style>
