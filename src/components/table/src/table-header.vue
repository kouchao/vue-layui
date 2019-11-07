<template>
  <thead>
    <tr v-for="item in children" :key="item.index">
      <th
        v-for="(item1,index) in item.data"
        :key="index"
        :colspan="item1.colspan"
        :rowspan="item1.rowspan"
        :style="item1.style"
      >
        {{ item1.name }}
      </th>
    </tr>
  </thead>
</template>

<script>
export default {
  name: 'LayTableHeader',
  props: {
    children: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped></style>
