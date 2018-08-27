<template>
  <div id="app">

    <lay-admin>
      <lay-header>
        <lay-logo>vue-layui</lay-logo>
        <lay-menu mode="horizontal" class="layui-layout-left">
          <LayMenuItem :index="0">
            <template slot="title">
              <span>导航一</span>
            </template>
            <LayMenuChildItem title="test"></LayMenuChildItem>
            <LayMenuChildItem title="test"></LayMenuChildItem>
          </LayMenuItem>
          <LayMenuItem :index="1">
            <template slot="title">
              <span>导航一</span>
            </template>
          </LayMenuItem>
          <LayMenuItem :index="2">
            <template slot="title">
              <span>导航一</span>
            </template>
          </LayMenuItem>
          <LayMenuItem :index="3">
            <template slot="title">
              <span>导航一</span>
            </template>
          </LayMenuItem>
        </lay-menu>
        <lay-menu mode="horizontal" class="layui-layout-right">
          <LayMenuItem :index="0">
            <template slot="title">
              <img src="https://avatars1.githubusercontent.com/u/23720738?s=460&v=4" class="layui-nav-img"> admin
            </template>
            <LayMenuChildItem title="基本资料"></LayMenuChildItem>
            <LayMenuChildItem title="安全设置"></LayMenuChildItem>
          </LayMenuItem>
          <LayMenuItem :index="0">
            <template slot="title">
              退出
            </template>
          </LayMenuItem>
        </lay-menu>
      </lay-header>
      <lay-side>
        <lay-menu :default-openeds="[0]">
          <LayMenuItem :index="0">
            <template slot="title">
              <span>布局</span>
            </template>
            <LayMenuChildItem title="栅格" :to="{name: 'grid'}"></LayMenuChildItem>
            <LayMenuChildItem title="后台布局"></LayMenuChildItem>
            <LayMenuChildItem title="home" :to="{name: 'home'}"></LayMenuChildItem>
            <LayMenuChildItem title="about" :to="{name: 'about'}"></LayMenuChildItem>
          </LayMenuItem>
          <LayMenuItem :index="1">
            <template slot="title">
              <span>导航二</span>
            </template>
            <LayMenuChildItem title="test"></LayMenuChildItem>
            <LayMenuChildItem title="test"></LayMenuChildItem>
            <LayMenuChildItem title="test"></LayMenuChildItem>
            <LayMenuChildItem title="test"></LayMenuChildItem>
          </LayMenuItem>
        </lay-menu>
      </lay-side>
      <lay-body>
        <router-view/>
      </lay-body>
      <lay-footer>
        this is footer
      </lay-footer>

    </lay-admin>


  </div>
</template>

<style>

</style>
