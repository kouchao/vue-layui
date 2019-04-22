<template>
  <a
    v-if="url"
    :target="target"
    :href="url"
    :type="type"
    class="layui-btn"
    :class="[
      item ? 'layui-btn-' + item : '',
      size ? 'layui-btn-' + size : '',
      {
        'layui-btn-radius': radius,
        'layui-btn-fluid': fluid,
        'layui-btn-disabled': disabled
      }
    ]"
  >
    <i
      v-if="icon && !right"
      class="left"
      :class="icon"
    />
    <slot><span style="margin: -2px" /></slot>
    <i
      v-if="icon && right"
      class="right"
      :class="icon"
    />
  </a>

  <button
    v-else
    :type="type"
    class="layui-btn"
    :class="[
      item ? 'layui-btn-' + item : '',
      size ? 'layui-btn-' + size : '',
      {
        'layui-btn-radius': radius,
        'layui-btn-fluid': fluid,
        'layui-btn-disabled': disabled
      }
    ]"
    @click="handleClick"
  >
    <i
      v-if="icon && !right"
      class="left"
      :class="icon"
    />
    <slot><span style="margin: -2px" /></slot>
    <i
      v-if="icon && right"
      class="right"
      :class="icon"
    />
  </button>
</template>

<script>
export default {
  name: 'LayButton',
  props: {
    item: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: ''
    },
    radius: Boolean,
    disabled: Boolean,
    icon: {
      type: String,
      default: ''
    },
    right: Boolean,
    type: {
      type: String,
      default: ''
    },
    fluid: Boolean,
    url: {
      type: String,
      default: ''
    },
    target: {
      type: String,
      default: '_blank'
    }
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt);
    }
  }
};
</script>

<style scoped>
i.right {
  padding-left: 4px;
}

i.left {
  padding-right: 4px;
}
</style>
