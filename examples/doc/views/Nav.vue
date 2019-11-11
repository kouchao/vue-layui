<template>
  <div>
    <lay-block title="水平导航菜单" />
    <lay-menu mode="horizontal">
      <lay-menu-item :index="0">
        <template slot="title">
          <span>最新活动</span>
        </template>
      </lay-menu-item>
      <lay-menu-item :index="1">
        <template slot="title">
          <span>产品</span>
        </template>
        <lay-menu-child-item title="选项1" />
        <lay-menu-child-item title="选项2" />
        <lay-menu-child-item title="选项3" />
      </lay-menu-item>
      <lay-menu-item :index="2">
        <template slot="title">
          <span>大数据</span>
        </template>
      </lay-menu-item>
      <lay-menu-item :index="3">
        <template slot="title">
          <span>解决方案</span>
        </template>
        <lay-menu-child-item title="移动模块" />
        <lay-menu-child-item title="后台模块" />
        <lay-menu-child-item title="选中未完成" />
        <lay-menu-child-item title="电商平台" />
      </lay-menu-item>
      <lay-menu-item :index="4">
        <template slot="title">
          <span>社区</span>
        </template>
      </lay-menu-item>
    </lay-menu>

    <lay-block
      title="导航带徽章和图片"
      style="margin-top: 30px;"
    />
    <lay-menu mode="horizontal">
      <lay-menu-item :index="0">
        <template slot="title">
          控制台<lay-badge>9</lay-badge>
        </template>
      </lay-menu-item>
      <lay-menu-item :index="1">
        <template slot="title">
          个人中心<lay-badge type="dot" />
        </template>
      </lay-menu-item>
      <lay-menu-item :index="2">
        <template slot="title">
          <img
            src="https://avatars1.githubusercontent.com/u/23720738?s=460&v=4"
            class="layui-nav-img"
          >
          我
        </template>
        <lay-menu-child-item title="基本资料" />
        <lay-menu-child-item title="安全设置" />
      </lay-menu-item>
    </lay-menu>
    <lay-block
      title="更多导航主题"
      style="margin-top: 30px;"
    />
    <lay-menu
      mode="horizontal"
      theme="cyan"
    >
      <lay-menu-item :index="0">
        <template slot="title">
          <span>藏青导航</span>
        </template>
      </lay-menu-item>
      <lay-menu-item :index="1">
        <template slot="title">
          <span>产品</span>
        </template>
        <lay-menu-child-item title="选项1" />
        <lay-menu-child-item title="选项2" />
        <lay-menu-child-item title="选项3" />
      </lay-menu-item>
      <lay-menu-item :index="2">
        <template slot="title">
          <span>大数据</span>
        </template>
      </lay-menu-item>
      <lay-menu-item :index="3">
        <template slot="title">
          <span>解决方案</span>
        </template>
        <lay-menu-child-item title="移动模块" />
        <lay-menu-child-item title="后台模块" />
        <lay-menu-child-item title="选中未完成" />
        <lay-menu-child-item title="电商平台" />
      </lay-menu-item>
      <lay-menu-item :index="4">
        <template slot="title">
          <span>社区</span>
        </template>
      </lay-menu-item>
    </lay-menu>
    <br>
    <lay-menu
      mode="horizontal"
      theme="green"
    >
      <lay-menu-item :index="0">
        <template slot="title">
          <span>墨绿导航</span>
        </template>
      </lay-menu-item>
      <lay-menu-item :index="1">
        <template slot="title">
          <span>产品</span>
        </template>
        <lay-menu-child-item title="选项1" />
        <lay-menu-child-item title="选项2" />
        <lay-menu-child-item title="选项3" />
      </lay-menu-item>
      <lay-menu-item :index="2">
        <template slot="title">
          <span>大数据</span>
        </template>
      </lay-menu-item>
      <lay-menu-item :index="3">
        <template slot="title">
          <span>解决方案</span>
        </template>
        <lay-menu-child-item title="移动模块" />
        <lay-menu-child-item title="后台模块" />
        <lay-menu-child-item title="选中未完成" />
        <lay-menu-child-item title="电商平台" />
      </lay-menu-item>
      <lay-menu-item :index="4">
        <template slot="title">
          <span>社区</span>
        </template>
      </lay-menu-item>
    </lay-menu>
    <br>
    <lay-menu
      mode="horizontal"
      theme="blue"
    >
      <lay-menu-item :index="0">
        <template slot="title">
          <span>艳蓝导航</span>
        </template>
      </lay-menu-item>
      <lay-menu-item :index="1">
        <template slot="title">
          <span>产品</span>
        </template>
        <lay-menu-child-item title="选项1" />
        <lay-menu-child-item title="选项2" />
        <lay-menu-child-item title="选项3" />
      </lay-menu-item>
      <lay-menu-item :index="2">
        <template slot="title">
          <span>大数据</span>
        </template>
      </lay-menu-item>
      <lay-menu-item :index="3">
        <template slot="title">
          <span>解决方案</span>
        </template>
        <lay-menu-child-item title="移动模块" />
        <lay-menu-child-item title="后台模块" />
        <lay-menu-child-item title="选中未完成" />
        <lay-menu-child-item title="电商平台" />
      </lay-menu-item>
      <lay-menu-item :index="4">
        <template slot="title">
          <span>社区</span>
        </template>
      </lay-menu-item>
    </lay-menu>

    <lay-block
      title="垂直导航菜单"
      style="margin-top: 30px;"
    />

    <lay-menu
      :default-openeds="[0]"
      class="layui-inline"
      style="margin-right: 10px;"
      theme="cyan"
    >
      <lay-menu-item :index="0">
        <template slot="title">
          <span>默认展开</span>
        </template>
        <lay-menu-child-item title="选项1" />
        <lay-menu-child-item title="选项2" />
        <lay-menu-child-item title="选项3" />
      </lay-menu-item>
      <lay-menu-item :index="1">
        <template slot="title">
          <span>解决方案</span>
        </template>
        <lay-menu-child-item title="移动模块" />
        <lay-menu-child-item title="后台模块" />
        <lay-menu-child-item title="选中未完成" />
        <lay-menu-child-item title="电商平台" />
      </lay-menu-item>
      <lay-menu-item :index="2">
        <template slot="title">
          <span>大数据</span>
        </template>
      </lay-menu-item>

      <lay-menu-item :index="3">
        <template slot="title">
          <span>社区</span>
        </template>
      </lay-menu-item>
    </lay-menu>
    <lay-menu
      :default-openeds="[0]"
      class="layui-inline"
    >
      <lay-menu-item :index="0">
        <template slot="title">
          <span>默认展开</span>
        </template>
        <lay-menu-child-item title="选项1" />
        <lay-menu-child-item title="选项2" />
        <lay-menu-child-item title="选项3" />
      </lay-menu-item>
      <lay-menu-item :index="1">
        <template slot="title">
          <span>解决方案</span>
        </template>
        <lay-menu-child-item title="移动模块" />
        <lay-menu-child-item title="后台模块" />
        <lay-menu-child-item title="选中未完成" />
        <lay-menu-child-item title="电商平台" />
      </lay-menu-item>
      <lay-menu-item :index="2">
        <template slot="title">
          <span>大数据</span>
        </template>
      </lay-menu-item>

      <lay-menu-item :index="3">
        <template slot="title">
          <span>社区</span>
        </template>
      </lay-menu-item>
    </lay-menu>

    <lay-block
      title="侧边固定导航菜单"
      style="margin-top: 30px;"
    />
    <p>
      ← 囖，就左边那家伙！
      带图标神马的那是必须可以的。另外你可能还需要下拉菜单，这个将在下版本推出！
      --来自 贤心大大
    </p>

    <lay-block
      title="默认面包屑"
      style="margin-top: 50px;"
    />
    <lay-breadcrumb>
      <lay-breadcrumb-item>123123</lay-breadcrumb-item>
      <lay-breadcrumb-item>123123</lay-breadcrumb-item>
      <lay-breadcrumb-item>123123</lay-breadcrumb-item>
      <lay-breadcrumb-item>123123</lay-breadcrumb-item>
      <lay-breadcrumb-item>123123</lay-breadcrumb-item>
    </lay-breadcrumb>

    <lay-block
      title="自定义分隔符的面包屑"
      style="margin-top: 50px;"
    />
    <lay-breadcrumb separator="-">
      <lay-breadcrumb-item>123123</lay-breadcrumb-item>
      <lay-breadcrumb-item>123123</lay-breadcrumb-item>
      <lay-breadcrumb-item>123123</lay-breadcrumb-item>
      <lay-breadcrumb-item>123123</lay-breadcrumb-item>
      <lay-breadcrumb-item>123123</lay-breadcrumb-item>
    </lay-breadcrumb>
    <lay-block
      title="还可以用于门户频道的面包屑"
      style="margin-top: 50px;"
    />
    <lay-breadcrumb separator="|">
      <lay-breadcrumb-item>123123</lay-breadcrumb-item>
      <lay-breadcrumb-item>123123</lay-breadcrumb-item>
      <lay-breadcrumb-item>123123</lay-breadcrumb-item>
      <lay-breadcrumb-item>123123</lay-breadcrumb-item>
      <lay-breadcrumb-item>123123</lay-breadcrumb-item>
    </lay-breadcrumb>
    <lay-block
      style="margin-top: 5px;"
    >
      其实就是自定义了个'|'的分隔符，然后加上to属性就可以了。
    </lay-block>
  </div>
</template>

<script>
export default {
  name: 'Nav'
};
</script>

<style scoped>
.layui-nav-tree {
  vertical-align: top;
}
</style>
