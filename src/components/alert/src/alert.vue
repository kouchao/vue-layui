<template>
  <div
    v-if="visible"
    style="position: fixed; top: 0;right: 0;bottom: 0;left: 0;z-index: 1000"
    :class="{
      modal: modal
    }"
  >
    <div
      class="layui-layer"
      :class="'layui-layer-' + skin"
      style="width: 300px; position: relative; margin: 15vh auto auto"
    >
      <div class="layui-layer-title">{{ title }}</div>
      <div class="layui-layer-content">
        <slot></slot>
      </div>
      <span class="layui-layer-setwin">
        <a
          @click="handleClose"
          class="layui-layer-ico layui-layer-close layui-layer-close1"
          href="javascript:;"
        ></a>
      </span>
      <div
        v-if="buttons.length"
        class="layui-layer-btn"
        :class="{
          'layui-layer-btn-c': btnDirection == 'center',
          'layui-layer-btn-l': btnDirection == 'left',
          'layui-layer-btn-r': btnDirection == 'right'
        }"
      >
        <a
          v-for="item in buttons"
          :key="item.title"
          @click="item.handler"
          :class="item.isImportant ? 'layui-layer-btn0' : 'layui-layer-btn1'"
          >{{ item.title }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayAlert",
  props: {
    title: {
      type: String,
      default() {
        return "提示";
      }
    },
    visible: Boolean,
    buttons: {
      type: Array,
      default() {
        return [];
      }
    },
    modal: Boolean,
    btnDirection: {
      type: String,
      default() {
        return "right";
      }
    },
    skin: {
      type: String,
      default() {
        return "page";
      }
    }
  },
  methods: {
    handleClose() {
      this.$emit("update:visible", false);
    }
  }
};
</script>

<style scoped>
.layui-layer-content {
  padding: 20px;
}

.modal {
  background: rgba(0, 0, 0, 0.7);
}
</style>
