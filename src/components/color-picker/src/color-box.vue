<template>
  <div
    :class="['layui-unselect', 'layui-colorpicker', (size ? 'layui-colorpicker-' + size : '')]"
    @click="handleClick"
  >
    <span>
      <span
        class="layui-colorpicker-trigger-span"
        lay-type
        :style="color ? 'background: ' + color : ''"
      >
        <i
          class="layui-icon layui-colorpicker-trigger-i"
          :class="{
              'layui-icon-close': !color,
              'layui-icon-down': color
            }"
        ></i>
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: "ColorBox",
  props: {
    color: {
      type: String
    },
    size: String
  },
  data() {
    return {
      format: "hex", //颜色显示/输入格式，可选 rgb,hex
      alpha: false //是否开启透明度
    };
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>

<style scoped>
</style>