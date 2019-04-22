<template>
  <div
    :class="classList"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'LayCol',
  props: {
    xs: {
      type: Number,
      default: 0
    },
    sm: {
      type: Number,
      default: 0
    },
    md: {
      type: Number,
      default: 0
    },
    lg: {
      type: Number,
      default: 0
    },
    offset: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      classList: []
    };
  },
  mounted () {
    const sizeList = ['xs', 'sm', 'md', 'lg'];
    const classList = [];
    sizeList.forEach(size => {
      if (this[size] && this[size] <= 12) {
        classList.push(`layui-col-${size + this[size]}`);
        if (this.offset) {
          classList.push(`layui-col-${size + '-offset' + this.offset}`);
        }
      }
    });
    this.classList = classList;
  }
};
</script>
