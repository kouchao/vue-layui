<template>
  <tr>
    <td v-for="item in children" :key="item.prop">{{ data[item.prop] }}</td>
  </tr>
</template>

<script>
export default {
  name: "LayTableHeader",
  props: {
    children: Array,
    data: Object
  }
};
</script>

<style scoped></style>
