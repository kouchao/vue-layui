<template>
  <div class="demo">
    <lay-block title="小徽章、大家族" />

    <lay-block theme="nm">
      <div style="margin: 10px 0">
        小圆点：
        <lay-badge type="dot" />
        <lay-badge
          type="dot"
          theme="orange"
        />
        <lay-badge
          type="dot"
          theme="green"
        />
        <lay-badge
          type="dot"
          theme="cyan"
        />
        <lay-badge
          type="dot"
          theme="blue"
        />
        <lay-badge
          type="dot"
          theme="black"
        />
        <lay-badge
          type="dot"
          theme="gray"
        />
      </div>
      <div style="margin: 10px 0">
        常规弧形徽章：
        <lay-badge>6</lay-badge>
        <lay-badge>99</lay-badge>
        <lay-badge>61728</lay-badge>
        <lay-badge>赤</lay-badge>
        <lay-badge theme="orange">
          橙
        </lay-badge>
        <lay-badge theme="green">
          绿
        </lay-badge>
        <lay-badge theme="cyan">
          青
        </lay-badge>
        <lay-badge theme="blue">
          蓝
        </lay-badge>
        <lay-badge theme="black">
          黑
        </lay-badge>
        <lay-badge theme="gray">
          灰
        </lay-badge>
      </div>
      <div style="margin: 10px 0">
        边框徽章：
        <lay-badge type="rim">
          6
        </lay-badge>
        <lay-badge type="rim">
          Hot
        </lay-badge>
      </div>
    </lay-block>

    <lay-block title="与其它元素的搭配" />

    <lay-button>
      查看消息<lay-badge theme="gray">
        1
      </lay-badge>
    </lay-button>
    <lay-button>
      动态<lay-badge
        type="dot"
        theme="orange"
      />
    </lay-button>

    <br>
    <br>
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
    </lay-menu>
    <br>
    <br>
    <!--TODO: tab的徽章展示-->
    <lay-block color="#FFB800">
      暂缺tab的徽章展示
    </lay-block>
  </div>
</template>

<script>
export default {
  name: 'Badge'
};
</script>

<style>
.demo .layui-badge,
.demo .layui-badge-dot,
.demo .layui-badge-rim {
  margin-left: 3px;
}
</style>
