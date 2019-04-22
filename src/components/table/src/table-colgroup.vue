<template>
  <colgroup>
    <col
      v-for="item in children"
      :key="item"
      :width="item"
    >
    <div style="display: none">
      <slot />
    </div>
  </colgroup>
</template>

<script>
export default {
  name: 'LayTableColgroup',
  props: {
    children: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped></style>
