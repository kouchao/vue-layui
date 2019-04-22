<template>
  <div>
    <lay-block title="默认风格的Tab" />
    <lay-tabs v-model="activeName">
      <lay-tab-pane
        title="网站设置"
        name="first"
      >
        1. 高度默认自适应，也可以随意固宽。
        <br>2. Tab进行了响应式处理，所以无需担心数量多少。
      </lay-tab-pane>
      <lay-tab-pane
        title="用户管理"
        name="second"
      >
        内容2
      </lay-tab-pane>
      <lay-tab-pane
        title="权限分配"
        name="third"
      >
        内容3
      </lay-tab-pane>
      <lay-tab-pane
        title="商品管理"
        name="fourth"
      >
        内容4
      </lay-tab-pane>
      <lay-tab-pane
        title="订单管理"
        name="fifth"
      >
        内容5
      </lay-tab-pane>
    </lay-tabs>
    <lay-block
      title="动态操作Tab"
      style="margin-top: 50px;"
    />
    <lay-tabs
      v-model="activeName"
      closable
      @close="handleClose"
    >
      <lay-tab-pane
        v-for="item in tabs"
        :key="item.name"
        :title="item.title"
        :name="item.name"
      >
        {{ item.content }}
      </lay-tab-pane>
    </lay-tabs>
    <lay-button @click="handleAddTab">
      新增Tab项
    </lay-button>
    <lay-button @click="handleClose('fourth')">
      删除: 商品管理
    </lay-button>
    <lay-button @click="activeName = 'second'">
      切换到: 用户管理
    </lay-button>

    <lay-block
      title="Hash地址定位"
      style="margin-top: 50px;"
    />
    设置activeName即可

    <lay-block
      title="简洁风格的Tab"
      style="margin-top: 50px;"
    />
    <lay-tabs
      v-model="activeName"
      skin="simple"
    >
      <lay-tab-pane
        v-for="item in tabs"
        :key="item.name"
        :title="item.title"
        :name="item.name"
      >
        {{ item.content }}
      </lay-tab-pane>
    </lay-tabs>

    <lay-block
      title="卡片风格的Tab"
      style="margin-top: 50px;"
    />
    <lay-tabs
      v-model="activeName"
      skin="card"
    >
      <lay-tab-pane
        v-for="item in tabs"
        :key="item.name"
        :title="item.title"
        :name="item.name"
      >
        {{ item.content }}
      </lay-tab-pane>
    </lay-tabs>

    <lay-block
      title="当Tab数超过一定宽度"
      style="margin-top: 50px;"
    />
    <lay-tabs
      v-model="activeName"
      skin="card"
      :width="300"
      overflow
    >
      <lay-tab-pane
        v-for="item in tabs"
        :key="item.name"
        :title="item.title"
        :name="item.name"
      >
        {{ item.content }}
      </lay-tab-pane>
    </lay-tabs>
    <lay-block
      title="带删除功能的Tab"
      style="margin-top: 50px;"
    />
    <lay-tabs
      v-model="activeName"
      skin="card"
      closable
      :height="200"
      @close="handleClose"
    >
      <lay-tab-pane
        v-for="item in tabs"
        :key="item.name"
        :title="item.title"
        :name="item.name"
      >
        {{ item.content }}
      </lay-tab-pane>
    </lay-tabs>
  </div>
</template>

<script>
let count = 0;
export default {
  name: 'Tabs',
  data () {
    return {
      activeName: 'first',
      tabs: [
        {
          name: 'first',
          title: '网站设置',
          content: '内容1'
        },
        {
          name: 'second',
          title: '用户管理',
          content: '内容2'
        },
        {
          name: 'third',
          title: '权限分配',
          content: '内容3'
        },
        {
          name: 'fourth',
          title: '商品管理',
          content: '内容4'
        }
      ]
    };
  },
  methods: {
    handleClose (value) {
      this.tabs = this.tabs.filter(o => o.name != value);

      if (this.activeName == value) {
        this.activeName = this.tabs.length ? this.tabs[0].name : '';
      }
    },
    handleAddTab () {
      this.tabs.push({
        name: 'tab' + count,
        title: 'tab' + count,
        content: 'tab' + count++
      });
    }
  }
};
</script>

<style scoped></style>
