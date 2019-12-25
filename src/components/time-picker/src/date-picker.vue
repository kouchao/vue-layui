<template>
  <div
    ref="reference"
    :class="['lay-date-picker', $parent.block ? 'layui-input-block' : 'layui-input-inline']"
  >
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
      @change="handleChange"
      @blur="handleHide"
      @click="handleClick"
    >
    <Main
      v-if="isOpen"
      ref="popper"
      :theme="theme"
      :type="type"
      :format="format"
      :festival="festival"
      :important-days="importantDays"
      :min="min"
      :max="max"
      @change="emitChange"
      @init="handleInit"
      @select="handleSelect"
      @close="handleHide"
      @stop="handleStop"
    />
  </div>
</template>

<script>

import Main from './main';
import { oneOf } from '@/utils/validatorProps';
import Popper from '@/mixins/popper';

export default {
  name: 'LayTimePicker',
  components: {
    Main
  },
  mixins: [Popper],
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
      default: 'HH:mm:ss'
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
    },
    min: {
      type: [String, Number],
      default: ''
    },
    max: {
      type: [String, Number],
      default: ''
    },
    theme: {
      type: String,
      default: 'default',
      validator (value) {
        return oneOf('theme', ['default', 'molv', 'grid'], value);
      }
    }
  },
  data () {
    return {
      isOpen: false,
      isFocus: false
    };
  },
  destroyed () {
    this.handleHide();
  },
  methods: {
    handeleFocus () {
      this.isOpen = true;
      this.isFocus = true;
      this.$nextTick(() => {
        this.createPopper();
      });
    },
    handleHide () {
      if (this.stop == true) {
        const input = this.$refs.input;
        input.focus();
        this.stop = false;
      } else {
        this.destroyPopper();
        this.isOpen = false;
      }
    },
    handleChange () {
      if (!this.disabled) {
        const value = event.target.value;

        this.$emit('input', value);
      }
    },

    handleStop () {
      this.stop = true;
    },

    handleClick () {
      if (this.isFocus && !this.isOpen) {
        this.isOpen = true;
        this.$nextTick(() => {
          this.createPopper();
        });
      }
    },

    emitChange (val) {
      console.log('emitChange-picker', val);
      this.$emit('input', val);
    },

    handleInit (val) {
      // 时间框打开的时候
      this.$emit('open', val);
    },

    handleSelect (val) {
      // 时间切换的时候
      this.$emit('select', val);
      console.log(val);
    }
  }
};
</script>

<style>
</style>
