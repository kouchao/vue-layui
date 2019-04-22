<template>
  <div :class="classList">
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
    xl: {
      type: Number,
      default: 0
    },
    offset: {
      type: Number,
      default: 0
    }
  },
  data: function () {
    return {
      classList: ''
    };
  },
  mounted: function () {
    ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
      if (this[size] && this[size] <= 12) {
        if (this.offset) {
          this.classList += `layui-col-${size + this[size]} `;
          this.classList += `layui-col-${size + '-offset' + this.offset} `;
        } else {
          this.classList += `layui-col-${size + this[size]} `;
        }
      }
    });
  }
};
</script>

<style></style>
