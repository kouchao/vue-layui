<template>
  <div
    v-if="show"
    ref="box"
    class="layui-laydate"
    :style="`left: ${left}px; top: ${top}px;`"
  />
</template>
<script>
export default {
  name: 'Toast',
  data () {
    return {
      show: false,
      left: 0,
      top: 0
    };
  },
  methods: {
    showToast (cb) {
      this.show = true;
      this.$nextTick(() => {
        cb && cb();
        this.position();
      });
    },
    position () {
      const elem = this.elem;
      const box = this.$refs.box;
      var rect = elem.getBoundingClientRect(); // 绑定元素的坐标
      var elemWidth = box.offsetWidth; // 控件的宽度
      var elemHeight = box.offsetHeight; // 控件的高度

      // 滚动条高度
      var scrollArea = function (type) {
        type = type ? 'scrollLeft' : 'scrollTop';
        return document.body[type] | document.documentElement[type];
      };
      var winArea = function (type) {
        return document.documentElement[type ? 'clientWidth' : 'clientHeight'];
      };
      var margin = 5; var left = rect.left; var top = rect.bottom;

      // 如果右侧超出边界
      if (left + elemWidth + margin > winArea('width')) {
        left = winArea('width') - elemWidth - margin;
      }

      // 如果底部超出边界
      if (top + elemHeight + margin > winArea()) {
        top = rect.top > elemHeight // 顶部是否有足够区域显示完全
          ? rect.top - elemHeight
          : winArea() - elemHeight;
        top = top - margin * 2;
      }

      left = left + scrollArea(1);
      top = top + scrollArea();

      this.left = left;
      this.top = top;
    }
  }
};
</script>

<style></style>
