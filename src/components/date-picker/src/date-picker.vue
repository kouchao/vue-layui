<template>
  <div :class="['lay-date-picker', $parent.block ? 'layui-input-block' : 'layui-input-inline']">
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
      @click="handeleFocus"
      @change="handleChange"
    >
  </div>
</template>

<script>

import Toast from './toast';
import Main from './main';
import Vue from 'vue';
import { oneOf } from '@/utils/validatorProps';

export default {
  name: 'LayDatePicker',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'date',
      validator (value) {
        return oneOf('type', ['year', 'month', 'date'], value);
      }
    },
    format: {
      type: String,
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
    number: Boolean,
    festival: Boolean,
    importantDays: {
      type: Object,
      default: () => {}
    }
  },
  destroyed () {
    this.handleHide();
  },
  methods: {
    handeleFocus () {
      document.addEventListener('click', this.handleHide);
      if (this.picker) {
        this.picker.showToast(() => {
          this.picker.$el.appendChild(this.main.$el);
        });
        return false;
      }
      this.picker = Toast();
      this.picker.elem = this.$refs.input;
      this.main = new Vue(Main);
      this.main.$props.type = this.type;
      this.main.$props.format = this.format;
      this.main.$props.festival = this.festival;
      this.main.$props.importantDays = this.importantDays;
      this.main.$mount();
      this.main.$on('change', this.emitChange);
      this.main.$on('close', () => {
        this.handleHide();
      });

      this.picker.showToast(() => {
        this.picker.$el.appendChild(this.main.$el);
      });
    },
    handleHide (e) {
      if (!e || !e.path.find(o => o.className && o.className.includes('lay-date-picker'))) {
        document.removeEventListener('click', this.handleHide);
        this.picker.show = false;
      }
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
