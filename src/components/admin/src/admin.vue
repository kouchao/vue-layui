<template>
  <div class="layui-layout layui-layout-admin">
    <slot />
  </div>
</template>
<script>
import eventHub from '@/mixins/eventHub';

export default {
  name: 'LayAdmin',
  mixins: [eventHub]
};
</script>
