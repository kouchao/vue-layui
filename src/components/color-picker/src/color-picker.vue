<template>
  <div class="layui-color-picker" :class="uid">
    <ColorBox :color="color" @click="handleToggle" :size="size" />
    <div
      :hidden="isHidden"
      class="layui-anim layui-anim-upbit layui-colorpicker-main"
    >
      <div class="layui-colorpicker-main-wrapper">
        <div ref="basis" class="layui-colorpicker-basis">
          <canvas
            ref="canvas"
            @mousedown="handleCanvasMouseDown"
            width="260"
            height="180"
          />
          <div
            @mousedown="handleMouseDown"
            ref="choose"
            class="layui-colorpicker-basis-cursor"
            :style="{
              left: left + 'px',
              top: top + 'px'
            }"
          ></div>
        </div>
        <color-side @change="sideChange" />
      </div>
      <div class="layui-colorpicker-main-alpha">
        <div class="layui-colorpicker-alpha-bgcolor">
          <div
            ref="alphaslider"
            class="layui-colorpicker-alpha-slider"
            style="left: 280px;"
          ></div>
        </div>
      </div>
      <div class="layui-colorpicker-main-input">
        <div class="layui-inline">
          <input :value="color" type="text" class="layui-input" />
        </div>
        <div class="layui-btn-container">
          <button
            class="layui-btn layui-btn-primary layui-btn-sm"
            @click="handleClear"
          >
            清空
          </button>
          <button class="layui-btn layui-btn-sm" @click="handleConfirm">
            确定
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 改为画布实现
 * 已知bug 边界颜色选择不正确
 * 目前只实现选择颜色，未实现输入颜色色板进行变化
 * 参考 https://blog.csdn.net/e4cqss6c/article/details/55100232
 */
import ColorBox from "./color-box";
import ColorSide from "./color-side";

import { rgb2hex } from "./color";
export default {
  name: "LayColorPicker",
  components: {
    ColorBox,
    ColorSide
  },
  props: {
    value: String,
    size: String,
    type: String
  },
  data() {
    return {
      startLeft: 0,
      left: 0,
      top: 0,
      startTop: 0,
      isHidden: true,
      color: this.value || "",
      uid: "color-picker-" + Math.random() + ""
    };
  },
  mounted() {
    this.genBase();
  },
  methods: {
    genBase(color = "#f00") {
      const ctx = this.$refs.canvas.getContext("2d");
      const width = 260;
      var base = ctx.createLinearGradient(0, 0, width, 0);
      base.addColorStop(1, color);
      base.addColorStop(0, "rgba(255,255,255,1)");
      ctx.fillStyle = base;
      ctx.fillRect(0, 0, width, width);

      var my_gradient1 = ctx.createLinearGradient(0, 0, 0, width);
      my_gradient1.addColorStop(0, "rgba(0,0,0,0)");
      my_gradient1.addColorStop(1, "rgba(0,0,0,1)");
      ctx.fillStyle = my_gradient1;
      ctx.fillRect(0, 0, width, width);
    },
    sideChange(color) {
      this.genBase(color);
      this.change();
    },
    handleCanvasMouseDown(e) {
      this.left = e.offsetX - 6;
      this.top = e.offsetY - 6;

      this.handleMouseDown(e);
      this.change();
    },
    handleMouseDown(e) {
      this.clientX = e.clientX;
      this.clientY = e.clientY;

      this.startLeft = this.left;
      this.startTop = this.top;
      window.addEventListener("mousemove", this.onDragging);
      window.addEventListener("mouseup", this.onDragEnd);
    },
    onDragging(e) {
      let left = e.clientX - this.clientX + this.startLeft;
      let top = e.clientY - this.clientY + this.startTop;

      if (top < -6) top = -6;
      if (top > 174) top = 174;
      if (left < -6) left = -6;
      if (left > 254) left = 254;
      this.left = left;
      this.top = top;
      this.change();
      e.preventDefault();
    },
    onDragEnd() {
      window.removeEventListener("mousemove", this.onDragging);
      window.removeEventListener("mouseup", this.onDragEnd);
    },
    change() {
      const ctx = this.$refs.canvas.getContext("2d");
      var imgData = ctx.getImageData(this.left + 5, this.top + 6, 1, 1);
      const [r, g, b, a] = imgData.data;
      if (this.type == "rgb") {
        this.color = `rgb(${r}, ${g}, ${b})`;
      } else {
        this.color = "#" + rgb2hex([r, g, b, a]);
      }
    },
    handleConfirm() {
      this.isHidden = true;
      window.removeEventListener("click", this.hidden);
      this.$emit("input", this.color);
      this.$emit("change", this.color);
    },
    handleClear() {
      this.color = "";
    },
    handleToggle() {
      this.isHidden = !this.isHidden;
      if (!this.isHidden) {
        window.addEventListener("click", this.hidden);
      } else {
        window.removeEventListener("click", this.hidden);
      }
      this.color = this.value;
    },
    hidden(e) {
      const res = e.path
        .map(o => o.className)
        .find(o => o && o.includes(this.uid));
      if (res) {
        return false;
      }
      window.removeEventListener("click", this.hidden);

      this.handleToggle();
    }
  },
  watch: {
    value() {
      this.color = this.value;
      console.log(this.value);
    }
  }
};
</script>

<style scoped>
.layui-color-picker {
  position: relative;
}
</style>
