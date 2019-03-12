<template>
  <li class="layui-timeline-item">
    <i class="layui-icon layui-timeline-axis" :class="icon"> </i>
    <div class="layui-timeline-content layui-text">
      <div v-if="simple" class="layui-timeline-title">
        <slot name="title">{{ title }}</slot>
      </div>
      <h3 v-else class="layui-timeline-title">
        <slot name="title">{{ title }}</slot>
      </h3>
      <slot></slot>
    </div>
  </li>
</template>

<script>
export default {
  name: "LayTimelineItem",
  props: {
    icon: {
      type: String,
      default() {
        return "layui-icon-circle";
      }
    },
    title: String,
    simple: {
      type: Boolean,
      default() {
        return false;
      }
    }
  }
};
</script>

<style scoped></style>
