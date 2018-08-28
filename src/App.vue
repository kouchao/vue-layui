<template>
  <div id="app">

    <lay-admin>
      <lay-header>
        <lay-logo>vue-layui</lay-logo>
        <lay-menu mode="horizontal" class="layui-layout-left">
          <lay-menu-item :index="0">
            <template slot="title">
              <span>导航一</span>
            </template>
            <lay-menu-child-item title="test"></lay-menu-child-item>
            <lay-menu-child-item title="test"></lay-menu-child-item>
          </lay-menu-item>
          <lay-menu-item :index="1">
            <template slot="title">
              <span>导航一</span>
            </template>
          </lay-menu-item>
          <lay-menu-item :index="2">
            <template slot="title">
              <span>导航一</span>
            </template>
          </lay-menu-item>
          <lay-menu-item :index="3">
            <template slot="title">
              <span>导航一</span>
            </template>
          </lay-menu-item>
        </lay-menu>
        <lay-menu mode="horizontal" class="layui-layout-right">
          <lay-menu-item :index="0">
            <template slot="title">
              <img src="https://avatars1.githubusercontent.com/u/23720738?s=460&v=4" class="layui-nav-img"> admin
            </template>
            <lay-menu-child-item title="基本资料"></lay-menu-child-item>
            <lay-menu-child-item title="安全设置"></lay-menu-child-item>
          </lay-menu-item>
          <lay-menu-item :index="0">
            <template slot="title">
              退出
            </template>
          </lay-menu-item>
        </lay-menu>
      </lay-header>
      <lay-side>
        <lay-menu :default-openeds="[0]">
          <lay-menu-item :index="0">
            <template slot="title">
              <span>布局</span>
            </template>
            <lay-menu-child-item title="栅格" :to="{name: 'grid'}"></lay-menu-child-item>
            <lay-menu-child-item title="后台布局"></lay-menu-child-item>
            <lay-menu-child-item title="home" :to="{name: 'home'}"></lay-menu-child-item>
            <lay-menu-child-item title="about" :to="{name: 'about'}"></lay-menu-child-item>
          </lay-menu-item>
          <lay-menu-item :index="1">
            <template slot="title">
              <span>基本元素</span>
            </template>
            <lay-menu-child-item title="按钮" :to="{name: 'button'}"></lay-menu-child-item>
            <lay-menu-child-item title="test"></lay-menu-child-item>
            <lay-menu-child-item title="test"></lay-menu-child-item>
            <lay-menu-child-item title="test"></lay-menu-child-item>
          </lay-menu-item>
        </lay-menu>
      </lay-side>
      <lay-body>
        <div class="layui-main site-demo-body">
          <router-view/>
        </div>

      </lay-body>
      <lay-footer>
        this is footer
      </lay-footer>

    </lay-admin>


  </div>
</template>

<style>

  .layui-layout-admin .site-demo-body {
    top: 30px;
  }
</style>
