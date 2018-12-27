<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
  import Header from './components/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
html, body{
  height: 100%;
  margin: 0;
}
#app {
  height: 100%;
  width: 100%;
  /*background-color: black;*/
}
</style>
