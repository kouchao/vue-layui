<template>
  <div class="layui-layout layui-layout-admin">
    <slot></slot>
  </div>
</template>
<script>
import eventHub from "@/mixins/eventHub";

export default {
  name: "LayAdmin",
  props: {
    collapse: Boolean
  },
  provide() {
    return {
      admin: this
    };
  },
  mixins: [eventHub],
  mounted() {
      this.eventOnGlobal('change-collapse', this.collapseChange);
  },
  methods: {
    collapseChange(collapse) {
      this.$emit("update:collapse", collapse);
    }
  }
};
</script>