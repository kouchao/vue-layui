<template>
  <div class="layui-colorpicker-side">
    <canvas
      ref="side"
      width="12"
      height="180"
      @mousedown="handleCanvasMouseDown"
    />
    <div
      class="layui-colorpicker-side-slider"
      :style="{
        top: top + 'px'
      }"
      @mousedown="handleMouseDown"
    />
  </div>
</template>

<script>
export default {
  name: 'LayColorPicker',
  data () {
    return {
      startLeft: 0,
      top: -3,
      startTop: 0
    };
  },
  mounted () {
    const ctx = this.$refs.side.getContext('2d');
    const height = 180;
    const side = ctx.createLinearGradient(0, 0, 0, height);
    side.addColorStop(0, '#f00');
    side.addColorStop(1 / 6, '#f0f');
    side.addColorStop(2 / 6, '#00f');
    side.addColorStop(3 / 6, '#0ff');
    side.addColorStop(4 / 6, '#0f0');
    side.addColorStop(5 / 6, '#ff0');
    side.addColorStop(1, '#f00');

    ctx.fillStyle = side;
    ctx.fillRect(0, 0, 12, height);
  },
  methods: {
    handleCanvasMouseDown (e) {
      this.top = e.offsetY - 3;
      this.handleMouseDown(e);
      this.change();
    },
    handleMouseDown (e) {
      this.clientY = e.clientY;

      this.startTop = this.top;
      window.addEventListener('mousemove', this.onDragging);
      window.addEventListener('mouseup', this.onDragEnd);
    },
    onDragging (e) {
      let top = e.clientY - this.clientY + this.startTop;

      if (top < -3) top = -3;
      if (top > 177) top = 177;
      this.top = top;
      this.change();
      e.preventDefault();
    },
    onDragEnd (e) {
      window.removeEventListener('mousemove', this.onDragging);
      window.removeEventListener('mouseup', this.onDragEnd);
    },
    change () {
      const ctx = this.$refs.side.getContext('2d');
      const imgData = ctx.getImageData(0, this.top + 2, 1, 1);
      const [r, g, b] = imgData.data;
      this.$emit('change', `rgb(${r}, ${g}, ${b})`);
    }
  }
};
</script>

<style scoped>
.layui-colorpicker-side {
  background: transparent;
}
</style>
