<template>
  <span @click="handleClick">
    <div
      class="layui-unselect layui-form-switch"
      :class="{
        'layui-form-onswitch': value == activeValue,
        'layui-checkbox-disbaled layui-disabled': disabled
      }"
    >
      <em>{{ value == activeValue ? activeText : inactiveText }}</em>
      <i></i>
    </div>
  </span>
</template>

<script>
export default {
  name: "LaySwitch",
  props: {
    value: [String, Array, Boolean],
    activeValue: {
      type: [String, Array, Boolean],
      default() {
        return true;
      }
    },
    inactiveValue: {
      type: [String, Array, Boolean],
      default() {
        return false;
      }
    },
    activeText: {
      type: String,
      default() {
        return "ON";
      }
    },
    inactiveText: {
      type: String,
      default() {
        return "OFF";
      }
    },
    disabled: Boolean
  },
  methods: {
    handleClick: function() {
      if (this.disabled) {
        return false;
      }

      const value =
        this.value == this.activeValue ? this.inactiveValue : this.activeValue;
      this.$emit("input", value);
      this.$emit("change", value);
    }
  }
};
</script>

<style></style>
