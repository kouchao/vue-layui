<template>
  <div>
    <lay-block title="常规使用" />
    <div style="margin-left: 30px;">
      <div class="layui-inline">
        <lay-color-picker v-model="color" />
      </div>
      <div
        class="layui-inline"
        style="margin-left: 30px;"
      >
        <lay-color-picker v-model="color1" />
      </div>
    </div>

    <lay-block
      title="RGB"
      style="margin-top: 30px;"
    />
    <div style="margin-left: 30px;">
      <div class="layui-inline">
        <lay-color-picker
          v-model="color0"
          type="rgb"
        />
      </div>
    </div>

    <lay-block
      title="预定义颜色项"
      style="margin-top: 30px;"
    />
    <div style="margin-left: 30px;">
      <div class="layui-inline">
        <lay-color-picker v-model="color2" />
      </div>
      <div
        class="layui-inline"
        style="margin-left: 30px;"
      >
        <lay-color-picker v-model="color3" />
      </div>
    </div>

    <lay-block
      title="颜色框尺寸"
      style="margin-top: 30px;"
    />
    <div style="margin-left: 30px;">
      <div class="layui-inline">
        <lay-color-picker
          v-model="color"
          size="lg"
        />
      </div>
      <div
        class="layui-inline"
        style="margin-left: 30px;"
      >
        <lay-color-picker v-model="color" />
      </div>
      <div
        class="layui-inline"
        style="margin-left: 30px;"
      >
        <lay-color-picker
          v-model="color"
          size="xs"
        />
      </div>
    </div>

    <lay-block
      title="回调的使用"
      style="margin-top: 30px;"
    />
    <div style="margin-left: 30px;">
      <div class="layui-inline">
        <lay-color-picker
          v-model="color"
          @change="handeChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorPicker',
  data () {
    return {
      color: '',
      color0: 'rgb(20, 30, 40)',
      color1: '#f00000',
      color2: '#c71585',
      color3: '#9d8a0e'
    };
  },
  methods: {
    handeChange (color) {
      setTimeout(() => {
        alert('你选择的是 ' + color);
      }, 10);
    }
  }
};
</script>

<style scoped></style>
