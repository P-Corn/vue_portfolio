<template>
  <div id="app">
    <TheNavBar />
    <router-view></router-view>
    <TheFooter />
  </div>
</template>

<script>
import TheNavBar from './components/TheNavBar.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheNavBar,
    TheFooter
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
