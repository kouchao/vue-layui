<template>
  <div class="site-demo-button">
    <lay-block
      title="按钮主题"
      :border="true"
      class="site-demo-button"
    >
      <lay-button item="primary">
        原始按钮
      </lay-button>
      <lay-button>默认按钮</lay-button>
      <lay-button item="normal">
        百搭按钮
      </lay-button>
      <lay-button item="warm">
        暖色按钮
      </lay-button>
      <lay-button item="danger">
        警告按钮
      </lay-button>
      <lay-button :disabled="true">
        禁用按钮
      </lay-button>
    </lay-block>

    <lay-block
      title="按钮尺寸"
      :border="true"
      class="site-demo-button"
    >
      <lay-button
        item="primary"
        size="lg"
      >
        大型按钮
      </lay-button>
      <lay-button item="primary">
        默认按钮
      </lay-button>
      <lay-button
        item="primary"
        size="sm"
      >
        小型按钮
      </lay-button>
      <lay-button
        item="primary"
        size="xs"
      >
        迷你按钮
      </lay-button>
      <br>

      <lay-button size="lg">
        大型按钮
      </lay-button>
      <lay-button>默认按钮</lay-button>
      <lay-button size="sm">
        小型按钮
      </lay-button>
      <lay-button size="xs">
        迷你按钮
      </lay-button>
      <br>

      <lay-button
        item="normal"
        size="lg"
      >
        大型按钮
      </lay-button>
      <lay-button item="normal">
        默认按钮
      </lay-button>
      <lay-button
        item="normal"
        size="sm"
      >
        小型按钮
      </lay-button>
      <lay-button
        item="normal"
        size="xs"
      >
        迷你按钮
      </lay-button>
      <br>
      <div style="width: 216px; margin: 0;">
        <lay-button :fluid="true">
          流体按钮
        </lay-button>
      </div>
    </lay-block>

    <lay-block
      title="灵活的图标按钮（更多图标请阅览：文档-图标）"
      :border="true"
      class="site-demo-button"
    >
      <lay-button icon="layui-icon layui-icon-rate" />
      <lay-button icon="layui-icon layui-icon-left" />
      <lay-button icon="layui-icon layui-icon-right" />
      <lay-button icon="layui-icon layui-icon-edit" />
      <lay-button icon="layui-icon layui-icon-delete" />
      <lay-button icon="layui-icon layui-icon-share" />
      <br>

      <lay-button
        icon="layui-icon layui-icon-rate"
        item="danger"
      />
      <lay-button
        icon="layui-icon layui-icon-left"
        item="danger"
      />
      <lay-button
        icon="layui-icon layui-icon-right"
        item="danger"
      />
      <lay-button
        icon="layui-icon layui-icon-edit"
        item="danger"
      />
      <lay-button
        icon="layui-icon layui-icon-delete"
        item="danger"
      />
      <lay-button
        icon="layui-icon layui-icon-share"
        item="danger"
      />
      <br>

      <lay-button
        icon="layui-icon layui-icon-rate"
        item="primary"
        size="sm"
      />
      <lay-button
        icon="layui-icon layui-icon-left"
        item="primary"
        size="sm"
      />
      <lay-button
        icon="layui-icon layui-icon-right"
        item="primary"
        size="sm"
      />
      <lay-button
        icon="layui-icon layui-icon-edit"
        item="primary"
        size="sm"
      />
      <lay-button
        icon="layui-icon layui-icon-delete"
        item="primary"
        size="sm"
      />
      <lay-button
        icon="layui-icon layui-icon-share"
        item="primary"
        size="sm"
      />

      <lay-button
        icon="layui-icon layui-icon-rate"
        size="sm"
      />
      <lay-button
        icon="layui-icon layui-icon-left"
        size="sm"
      />
      <lay-button
        icon="layui-icon layui-icon-right"
        size="sm"
      />
      <lay-button
        icon="layui-icon layui-icon-edit"
        size="sm"
      />
      <lay-button
        icon="layui-icon layui-icon-delete"
        size="sm"
      />
      <lay-button
        icon="layui-icon layui-icon-share"
        size="sm"
      />

      <lay-button
        icon="layui-icon layui-icon-rate"
        item="normal"
        size="sm"
      />
      <lay-button
        icon="layui-icon layui-icon-left"
        item="normal"
        size="sm"
      />
      <lay-button
        icon="layui-icon layui-icon-right"
        item="normal"
        size="sm"
      />
      <lay-button
        icon="layui-icon layui-icon-edit"
        item="normal"
        size="sm"
      />
      <lay-button
        icon="layui-icon layui-icon-delete"
        item="normal"
        size="sm"
      />
      <lay-button
        icon="layui-icon layui-icon-share"
        item="normal"
        size="sm"
      />
      <br>
    </lay-block>

    <lay-block
      title="还可以是圆角按钮"
      :border="true"
      class="site-demo-button"
    >
      <lay-button
        item="primary"
        :radius="true"
      >
        原始按钮
      </lay-button>
      <lay-button :radius="true">
        默认按钮
      </lay-button>
      <lay-button
        item="normal"
        :radius="true"
      >
        百搭按钮
      </lay-button>
      <lay-button
        item="warm"
        :radius="true"
      >
        暖色按钮
      </lay-button>
      <lay-button
        item="danger"
        :radius="true"
      >
        警告按钮
      </lay-button>
      <lay-button
        :disabled="true"
        :radius="true"
      >
        禁用按钮
      </lay-button>
    </lay-block>

    <lay-block
      title="风格混搭的按钮"
      :border="true"
      class="site-demo-button"
    >
      <lay-button
        item="primary"
        size="lg"
        :radius="true"
      >
        大型加圆角按钮
      </lay-button>
      <lay-button url="https://www.jskou.com">
        跳转的按钮
      </lay-button>
      <lay-button
        item="normal"
        size="sm"
        icon="layui-icon layui-icon-delete"
      >
        删除
      </lay-button>

      <lay-button
        :disabled="true"
        size="xs"
        icon="layui-icon layui-icon-share"
      >
        分享
      </lay-button>
    </lay-block>

    <lay-block
      title="按钮组"
      :border="true"
      class="site-demo-button"
    >
      <lay-button-group>
        <lay-button>增加</lay-button>
        <lay-button>编辑</lay-button>
        <lay-button>删除</lay-button>
      </lay-button-group>

      <lay-button-group>
        <lay-button
          size="sm"
          icon="layui-icon layui-icon-add-1"
        />
        <lay-button
          size="sm"
          icon="layui-icon layui-icon-edit"
        />
        <lay-button
          size="sm"
          icon="layui-icon layui-icon-delete"
        />
        <lay-button
          size="sm"
          icon="layui-icon layui-icon-right"
        />
      </lay-button-group>

      <lay-button-group>
        <lay-button
          item="primary"
          size="sm"
        >
          文字
        </lay-button>
        <lay-button
          item="primary"
          size="sm"
          icon="layui-icon layui-icon-add-1"
        />
        <lay-button
          item="primary"
          size="sm"
          icon="layui-icon layui-icon-edit"
        />
        <lay-button
          item="primary"
          size="sm"
          icon="layui-icon layui-icon-delete"
        />
      </lay-button-group>
    </lay-block>

    <lay-block
      title="按钮容器"
      :border="true"
      class="site-demo-button"
    >
      <lay-button-container>
        <lay-button>按钮一</lay-button>
        <lay-button>按钮二</lay-button>
        <lay-button>按钮三</lay-button>
      </lay-button-container>
      <lay-button-container>
        <lay-button>按钮一</lay-button>
        <lay-button>按钮二</lay-button>
        <lay-button>按钮三</lay-button>
      </lay-button-container>
    </lay-block>
  </div>
</template>

<script>
export default {
  name: 'Button'
};
</script>

<style scoped>
.site-demo-button .layui-btn {
  margin: 0 7px 10px 0;
}
.site-demo-button {
  margin-bottom: 30px;
}
</style>
