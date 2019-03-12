<template>
  <div
    class="layui-tab"
    :class="{
      'layui-tab-brief': skin == 'simple',
      'layui-tab-card': skin == 'card'
    }"
    :style="width ? 'width: ' + width + 'px' : ''"
    :overflow="overflow"
  >
    <ul
      class="layui-tab-title"
      :class="{
        'layui-tab-more': isOpen
      }"
      v-if="$slots.default"
    >
      <li
        :key="item.title"
        v-for="item in $slots.default.map(o => o.componentOptions.propsData)"
        :class="{
          'layui-this': value == item.name
        }"
        @click="handleClick(item.name)"
      >
        {{ item.title }}
        <i
          v-if="closable"
          class="layui-icon layui-unselect layui-tab-close layui-icon-close"
          @click.stop="handleClose(item.name)"
        ></i>
      </li>
      <span
        v-if="overflow"
        class="layui-unselect layui-tab-bar"
        lay-stope="tabmore"
        @click="handleOpen"
      >
        <i
          v-if="isOpen"
          lay-stope="tabmore"
          class="layui-icon layui-icon-up"
        ></i>
        <i v-else lay-stope="tabmore" class="layui-icon layui-icon-down"></i>
      </span>
    </ul>
    <div
      class="layui-tab-content"
      :style="height ? 'height: ' + height + 'px' : ''"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayTabs",
  props: {
    activeName: String,
    value: String,
    closable: {
      type: Boolean,
      default() {
        return false;
      }
    },
    skin: String,
    overflow: Boolean,
    height: Number,
    width: Number
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    handleClick(value) {
      this.$emit("input", value);
    },
    handleClose(value) {
      this.$emit("close", value);
    },
    handleOpen() {
      this.isOpen = !this.isOpen;
    }
  },
  watch: {
    value() {
      this.$emit("input", this.value);
    }
  }
};
</script>

<style scoped>
i.right {
  padding-left: 4px;
}

i.left {
  padding-right: 4px;
}
</style>
