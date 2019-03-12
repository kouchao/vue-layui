<template>
  <table class="layui-table" :lay-skin="skin" :lay-even="even" :lay-size="size">
    <lay-table-colgroup :children="colgroup"></lay-table-colgroup>
    <lay-table-header :children="header"></lay-table-header>
    <tbody>
      <lay-table-tr
        v-for="item in data"
        :key="item"
        :children="tr"
        :data="item"
      ></lay-table-tr>
      <div style="display: none">
        <slot></slot>
      </div>
    </tbody>
  </table>
</template>

<script>
import LayTableColgroup from "./table-colgroup";
import LayTableHeader from "./table-header";
import LayTableTr from "./table-tr";

// import LayTableColumn from "./table-column";

export default {
  name: "LayTable",
  components: {
    LayTableColgroup,
    LayTableHeader,
    LayTableTr
    // LayTableColumn
  },
  data() {
    return {
      children: [],
      colgroup: [],
      header: [],
      tr: []
    };
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    skin: {
      type: String
    },
    even: Boolean,
    size: String
  },
  provide() {
    return {
      rootTable: this
    };
  },
  mounted() {
    this.children = this.$slots.default.map(o => o.child);
    this.colgroup = this.children.filter(o => o.prop).map(o => o.width || "");
    this.header = this.children.filter(o => o.prop).map(o => o.label || "");
    this.tr = this.children.filter(o => o.prop);
  }
};
</script>

<style scoped></style>
