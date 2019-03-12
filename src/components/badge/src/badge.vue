<template>
  <span :class="classList" :style="styleList">
    <slot v-if="type != 'dot'"></slot>
  </span>
</template>
<script>
export default {
  name: "LayBadge",
  props: {
    type: String,
    theme: String,
    color: String
  },
  data() {
    return {
      classList: [
        {
          "layui-badge": !this.type,
          "layui-badge-dot": this.type == "dot",
          "layui-badge-rim": this.type == "rim"
        },
        "layui-bg-" + this.theme
      ],
      styleList: this.color ? "background-color: " + this.color : ""
    };
  }
};
</script>
