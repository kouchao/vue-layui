<template>
  <div
    class="layui-progress"
    :class="'layui-progress-' + size"
  >
    <div
      class="layui-progress-bar"
      :class="'layui-bg-' + theme"
      :style="[
        color ? 'background-color: ' + color : '',
        {
          width: percentage + '%'
        }
      ]"
    >
      <span
        v-if="showText"
        class="layui-progress-text"
      >
        {{ text ? text : percentage + "%" }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LayProgress',
  props: {
    percentage: {
      type: Number,
      default: 0
    },
    theme: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    showText: Boolean,
    text: {
      type: String,
      default: ''
    }
  }
};
</script>
