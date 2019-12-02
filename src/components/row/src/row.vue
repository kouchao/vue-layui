<template>
  <div :class="[ 'layui-row', `layui-col-space${space}` ]">
    <slot />
  </div>
</template>

<script>
import { oneOf } from '@/utils/validatorProps';
export default {
  name: 'LayRow',
  props: {
    space: {
      type: Number,
      default: 0,
      validator (value) {
        return oneOf('space', [0, 1, 3, 5, 8, 10, 12, 15, 18, 20, 22, 28, 30], value);
      }
    }
  }
};
</script>
