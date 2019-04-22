<template>
  <div />
</template>

<script>
export default {
  name: 'LayTableColumn',
  props: {
    prop: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      default: 0
    },
    label: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped></style>
