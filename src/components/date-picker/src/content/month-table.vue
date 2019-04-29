<template>
  <div class="layui-laydate-content">
    <ul class="layui-laydate-list laydate-month-list">
      <li
        v-for="(monthCn, _month) in months"
        :key="_month"
        :class="{
          'laydate-disabled': isDisabled(_month),
          'layui-this': month == _month
        }"
        @click="emitChange(_month, isDisabled(_month))"
      >
        {{ monthCn }}
      </li>
    </ul>
  </div>
</template>
<script>
const MONTH_CN = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
export default {
  name: 'MonthContent',
  props: {
    month: {
      type: Number,
      required: true
    },
    min: {
      type: [String, Number],
      default: ''
    },
    max: {
      type: [String, Number],
      default: ''
    }
  },
  data () {
    return {
      months: MONTH_CN
    };
  },
  methods: {
    emitChange (month, isDisabled) {
      if (isDisabled) {
        return false;
      }
      this.$emit('change', month);
    },
    isDisabled (_month) {
      let isMin = false;
      let isMax = false;
      if (this.min) {
        isMin = _month < new Date(this.min).getMonth();
      }

      if (this.max) {
        isMax = _month > new Date(this.max).getMonth();
      }

      return isMin || isMax;
    }
  }
};
</script>
