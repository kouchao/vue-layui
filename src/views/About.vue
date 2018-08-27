<template>

    <LayAdmin>
      <lay-menu :default-openeds="[1]">
        <LayMenuItem :index="0">
          <template slot="title">
            <span>导航一</span>
          </template>
          <LayMenuChildItem title="test"></LayMenuChildItem>
          <LayMenuChildItem title="test"></LayMenuChildItem>
          <LayMenuChildItem title="test"></LayMenuChildItem>
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
      <lay-menu mode="horizontal">
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
    </LayAdmin>



</template>
