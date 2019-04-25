<template>
  <div class="layui-laydate-header">
    <i
      class="layui-icon laydate-icon laydate-prev-y"
      @click="emitPrevYear"
    ></i>
    <i
      class="layui-icon laydate-icon laydate-prev-m"
      @click="emitPrevMonth"
    ></i>
    <div class="laydate-set-ym">
      <span
        v-if="year"
        @click="emitSelectYear"
      >{{ year }}</span>
      <span
        v-if="month"
        @click="emitSelectMonth"
      >{{ month }}</span>
    </div>
    <i
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
export default {
  name: 'PickerHeader',
  props: {
    year: {
      type: String,
      default: ''
    },
    month: {
      type: String,
      default: ''
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
      this.$emit('selectMonth');
    },
    emitSelectYear () {
      this.$emit('selectYear');
    }
  }
};
</script>
