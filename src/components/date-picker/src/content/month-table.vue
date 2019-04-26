<template>
  <div class="layui-laydate-content">
    <ul class="layui-laydate-list laydate-month-list">
      <li
        v-for="(monthCn, _month) in months"
        :key="_month"
        :class="{
          'layui-this': month == _month
        }"
        @click="emitChange(_month)"
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
    }
  },
  data () {
    return {
      months: MONTH_CN
    };
  },
  methods: {
    emitChange (month) {
      this.$emit('change', month);
    }
  }
};
</script>
