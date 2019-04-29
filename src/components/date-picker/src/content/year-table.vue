<template>
  <div class="layui-laydate-content">
    <ul class="layui-laydate-list laydate-year-list">
      <li
        v-for="_year in years"
        :key="_year"
        :class="{
          'laydate-disabled': isDisabled(_year),
          'layui-this': year == _year
        }"
        @click="emitChange(_year, isDisabled(_year))"
      >
        {{ _year }}年
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  name: 'MonthContent',
  props: {
    year: {
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
      years: []
    };
  },
  watch: {
    year () {
      this.updateYear();
    }
  },
  mounted () {
    this.updateYear();
  },
  methods: {
    updateYear () {
      const _year = this.year;
      console.log(_year);
      const years = [];
      for (let year = _year - 7; year <= _year + 7; year++) {
        years.push(year);
      }
      this.years = years;
      console.log(this.years);
    },
    isDisabled (_year) {
      let isMin = false;
      let isMax = false;
      if (this.min) {
        isMin = _year < new Date(this.min).getFullYear();
      }

      if (this.max) {
        isMax = _year > new Date(this.max).getFullYear();
      }

      return isMin || isMax;
    },
    emitChange (year, isDisabled) {
      if (isDisabled) {
        return false;
      }
      this.$emit('change', year);
    }
  }
};
</script>
