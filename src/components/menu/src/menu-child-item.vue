<template>
  <dd>
    <a href="javascript:;" @click="handleClick">
      <i v-if="icon" :class="'layui-icon layui-icon-' + icon"></i>
      {{title}}
      <slot v-if="!title"></slot>
    </a>
  </dd>
</template>

<script>
import eventHub from "@/mixins/eventHub";
export default {
  name: "LayMenuChildItem",
  props: {
    title: {
      type: String
    },
    to: {
      type: Object
    },
    icon: {
      type: String
    }
  },
  mixins: [eventHub],
  inject: ["rootMenu"],
  methods: {
    handleClick() {
      if (this.$route && this.to) {
        this.$router.push(this.to);
      }
    }
  }
};
</script>

<style scoped>
.layui-icon {
  margin-right: 5px;
}
</style>