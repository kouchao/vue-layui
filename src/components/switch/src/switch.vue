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
      <i />
    </div>
  </span>
</template>

<script>
export default {
  name: 'LaySwitch',
  props: {
    value: {
      type: [String, Array, Boolean],
      default: ''
    },
    activeValue: {
      type: [String, Array, Boolean],
      default () {
        return true;
      }
    },
    inactiveValue: {
      type: [String, Array, Boolean],
      default () {
        return false;
      }
    },
    activeText: {
      type: String,
      default () {
        return 'ON';
      }
    },
    inactiveText: {
      type: String,
      default () {
        return 'OFF';
      }
    },
    disabled: Boolean
  },
  inject: ['formItem'],
  methods: {
    handleClick: function () {
      if (this.disabled) {
        return false;
      }

      const value =
      this.value == this.activeValue ? this.inactiveValue : this.activeValue;
      this.$emit('input', value);
      this.$emit('change', value);
      this.formItem && this.formItem.validate('change');
    }
  }
};
</script>

<style></style>
