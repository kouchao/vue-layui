<template>
  <div class="layui-laydate-header">
    <i
      class="layui-icon laydate-icon laydate-prev-y"
      @click="emitPrevYear"
    ></i>
    <i
      v-if="type == 'date'"
      class="layui-icon laydate-icon laydate-prev-m"
      @click="emitPrevMonth"
    ></i>
    <div class="laydate-set-ym">
      <span
        @click="emitSelectYear"
      >{{ type == 'year' ? `${year - 7}年 - ${year + 7}年` : `${year}年` }}</span>
      <span
        v-if="type == 'date'"
        @click="emitSelectMonth"
      >{{ month }}月</span>
    </div>
    <i
      v-if="type == 'date'"
      class="layui-icon laydate-icon laydate-next-m"
      @click="emitNextMonth"
    ></i>
    <i
      class="layui-icon laydate-icon laydate-next-y"
      @click="emitNextYear"
    ></i>
  </div>
</template>
<script>
import { oneOf } from '@/utils/validatorProps';

export default {
  name: 'PickerHeader',
  model: {
    prop: 'type',
    event: 'change'
  },
  props: {
    year: {
      type: Number,
      default: 0
    },
    month: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      required: true,
      validator (value) {
        return oneOf('type', ['year', 'month', 'date'], value);
      }
    }
  },
  methods: {
    emitPrevMonth () {
      this.$emit('prevMonth');
    },
    emitNextMonth () {
      this.$emit('nextMonth');
    },
    emitPrevYear () {
      this.$emit('prevYear');
    },
    emitNextYear () {
      this.$emit('nextYear');
    },
    emitSelectMonth () {
      this.$emit('change', 'month');
    },
    emitSelectYear () {
      this.$emit('change', 'year');
    }
  }
};
</script>
