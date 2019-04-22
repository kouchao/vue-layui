<template>
  <dd>
    <a
      href="javascript:;"
      @click="handleClick"
    >
      <i
        v-if="icon"
        :class="'layui-icon layui-icon-' + icon"
      />
      {{ title }}
      <slot v-if="!title" />
    </a>
  </dd>
</template>

<script>
import eventHub from '@/mixins/eventHub';
export default {
  name: 'LayMenuChildItem',
  mixins: [eventHub],
  props: {
    title: {
      type: String,
      default: ''
    },
    to: {
      type: Object,
      default: () => {}

    },
    icon: {
      type: String,
      default: ''
    }
  },
  inject: ['rootMenu'],
  methods: {
    handleClick () {
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
