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
    <layui-button>123</layui-button>
    <layui-button type="primary">123</layui-button>
    <layui-button type="normal">123</layui-button>
    <layui-button type="warm">123</layui-button>
    <layui-button type="danger" icon="fa fa-bolt" right>123</layui-button>
    <layui-button type="disabled" size="lg" radius>123</layui-button>
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
