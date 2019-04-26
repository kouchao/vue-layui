<template>
  <div class="layui-laydate-content">
    <ul class="layui-laydate-list laydate-year-list">
      <li
        v-for="_year in years"
        :key="_year"
        :class="{
          'layui-this': year == _year
        }"
        @click="emitChange(_year)"
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
    emitChange (year) {
      this.$emit('change', year);
    }
  }
};
</script>
