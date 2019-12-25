<template>
  <div
    ref="popper"
    class="layui-laydate lay-date-picker"
    :class="[
      'layui-laydate',
      'lay-date-picker',
      `laydate-theme-${theme}`
    ]"
    @mousedown="handelMousedown"
  >
    <div class="layui-laydate-main laydate-main-list-0">
      <picker-header />
      <time-table
        :hour="hour"
        :minute="minute"
        :second="second"
        :min="min"
        :max="max"
        @change="handerChange"
      />
    </div>
    <!-- TODO: footer Components -->
    <div class="layui-laydate-footer">
      <div class="laydate-footer-btns">
        <span
          class="laydate-btns-clear"
          @click="handelClear"
        >
          清空
        </span>
        <span
          class="laydate-btns-now"
          @click="handelNow"
        >
          现在
        </span>
        <span
          class="laydate-btns-confirm"
          @click="handelConfirm"
        >
          确定
        </span>
      </div>
    </div>
  </div>
</template>

<script>

import dayjs from 'dayjs';
import TimeTable from '../content/time-table';
import PickerHeader from '../header';
import { oneOf } from '@/utils/validatorProps';

export default {
  name: 'Main',
  components: {
    TimeTable,
    PickerHeader
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    format: {
      type: String,
      default: 'HH:mm:ss'
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
      hour: '00',
      minute: '00',
      second: '00'
    };
  },
  created () {
    // const date = new Date();

    // handerChange;

    this.hour = '01';
    this.minute = '02';
    this.second = '03';

    this._val = this.getVal();
    this.$emit('init', this._val);
  },
  methods: {
    handelClear () {
      this.emitChange(true);
    },
    handelNow () {
      // const date = new Date();
      this.emitChange();
    },
    handelConfirm () {
      console.log('handelConfirm');
      this.emitChange();
    },

    handelMousedown () {
      this.$emit('stop');
    },

    getVal () {

      let date = dayjs(`2000/01/01 ${this.hour}:${this.minute}:${this.second}`);

      if (this.min && date.isBefore(dayjs(`2000/01/01 ${this.min}`))) {
        date = dayjs(`2000/01/01 ${this.min}`);
      }

      if (this.max && dayjs(`2000/01/01 ${this.max}`).isBefore(date)) {
        date = dayjs(`2000/01/01 ${this.max}`);
      }

      return date.format(this.format);
    },

    handerChange (time) {
      this[time.key] = time.val;
      this.$emit('select', this.getVal());
    },

    emitChange (isClear) {
      const val = this.getVal();
      this.$emit('change', isClear ? '' : val);
      this.$emit('close');
    }
  }

};
</script>
