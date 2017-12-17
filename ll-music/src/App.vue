<template>
  <div id="app">
    <div class="top" v-if="false">
      <m-header></m-header>
      <tab></tab>
    </div>
    <keep-alive>
      <router-view  v-if="false"></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script>
import MHeader from 'components/header/header'
import Tab from 'components/tab/tab'
import Player from 'components/player/player'
import Vue from 'vue'

export default {
  name: 'app',
  components: {
    MHeader,
    Tab,
    Player
  }
}
</script>

<style lang='stylus'>

</style>
