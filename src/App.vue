<template>
  <div id="app">
    <layui-container :fluid="true">
      <layui-row>
        <layui-col :xs="6" :md="5">
          123123
        </layui-col>
        <layui-col :xs="6">
          123132
        </layui-col>
      </layui-row>
    </layui-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  created: function () {
    this.testLayui()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
