<template>
  <div :class="$parent.block ? 'layui-input-block' : 'layui-input-inline'">
    <input
      ref="input"
      :name="name"
      :placeholder="placeholder"
      class="layui-input"
      :value="value"
      :disabled="disabled"
      :class="{
        'layui-radio-disbaled layui-disabled': disabled
      }"
      @focus="handeleFocus"
      @blur="handeleBlur"
      @change="handleChange"
    >
  </div>
</template>

<script>

import Toast from './toast';
import Main from './main';
import Vue from 'vue';

export default {
  name: 'LayDatePicker',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: Boolean,
    name: {
      type: String,
      default: ''
    },
    required: Boolean,
    width: {
      type: Number,
      default: 0
    },
    number: Boolean
  },
  data () {
    return {};
  },
  methods: {
    handeleFocus () {
      if (this.picker) {
        this.picker.showToast(() => {
          this.picker.$el.appendChild(this.main.$el);
        });
        return false;
      }
      this.picker = Toast();
      this.picker.elem = this.$refs.input;
      this.main = new Vue(Main);
      this.main.$mount();
      this.main.$on('change', this.emitChange);
      this.main.$on('close', () => {
        this.picker.show = false;
      });

      this.picker.showToast(() => {
        this.picker.$el.appendChild(this.main.$el);
      });
    },
    handeleBlur () {
      // this.picker.show = false;
    },
    handleChange () {
      if (!this.disabled) {
        const value = event.target.value;

        this.$emit('input', this.number ? parseInt(value) || 0 : value);
      }
    },
    emitChange (val) {
      this.$emit('input', val);
    }
  }
};
</script>

<style>
</style>
