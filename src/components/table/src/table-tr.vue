<template>
  <tr>
    <td
      v-for="item in children"
      :key="item.prop"
    >
      {{ data[item.prop] }}
    </td>
  </tr>
</template>

<script>
export default {
  name: 'LayTableHeader',
  props: {
    children: {
      type: Array,
      default: () => []
    },
    data: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style scoped></style>
