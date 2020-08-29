<template>
  <div id="app">
    <v-app>
      <TheNavBar />
      <router-view class="main"></router-view>
      <TheFooter />
    </v-app>
  </div>
</template>

<script>
import TheNavBar from './components/TheNavBar.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheNavBar,
    TheFooter
  }
}
</script>

<style>
  .main {
    padding-top: 64px;
  }
</style>