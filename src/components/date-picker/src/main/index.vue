<template>
  <div class="layui-laydate-main laydate-main-list-0">
    <picker-header
      :year="yearText"
      :month="monthText"
      @prevYear="handlePrevYear"
      @prevMonth="handlePrevMonth"
      @selectYear="handleSelectYear"
      @selectMonth="handleSelectMonth"
      @nextYear="handleNextYear"
      @nextMonth="handleNextMonth"
    />
    <day-content
      :year="selectedYear"
      :month="selectedMonth"
      :day="selectedDay"
      @change="handerDayChange"
    />
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
import { getDaysInMonth } from '../utils';

import DayContent from '../content';
import PickerHeader from '../header';

export default {
  name: 'Main',
  components: {
    DayContent,
    PickerHeader
  },
  data () {
    return {
      selectedYear: 0,
      selectedMonth: 0,
      selectedDay: 0,
      // day year month
      type: 'day',
      yearText: '',
      monthText: ''
    };
  },
  created () {
    // // 测试当前时间
    this.updateDay(new Date());

    // 测试2月
    // this.updateDay(new Date('2019/02/02'));

    // // 测试闰年二月
    // this.updateDay(new Date('2020/02/02'));

    // // 测试1月
    // this.updateDay(new Date('2019/01/02'));

    // // 测试12月

  },
  methods: {
    updateDay (date) {
      this.selectedYear = date.getFullYear();
      this.selectedMonth = date.getMonth();
      this.selectedDay = date.getDate();

      this.yearText = `${this.selectedYear}年`;
      this.monthText = `${this.selectedMonth + 1}月`;
    },
    handerDayChange (date) {
      this.selectedYear = date.year;
      this.selectedMonth = date.month;
      this.selectedDay = date.day;

      this.yearText = `${this.selectedYear}年`;
      this.monthText = `${this.selectedMonth + 1}月`;
    },
    emitChange (isClear) {
      const val = isClear ? '' : `${this.selectedYear}/${this.selectedMonth + 1}/${this.selectedDay}`;
      this.$emit('change', val);
      this.$emit('close');
    },
    handlePrevMonth () {

      let _year = this.selectedYear;
      let _month = this.selectedMonth - 1;

      if (_month < 0) {
        _month = 11;
        _year = _year - 1;
      }

      const daysInMonth = getDaysInMonth(_year, _month);

      let _day = this.selectedDay;
      if (_day > daysInMonth) {
        _day = daysInMonth;
      }
      this.updateDay(new Date(`${_year}/${_month + 1}/${_day}`));
    },
    handleNextMonth () {

      let _year = this.selectedYear;
      let _month = this.selectedMonth + 1;

      if (_month > 11) {
        _month = 0;
        _year = _year + 1;
      }

      const daysInMonth = getDaysInMonth(_year, _month);

      let _day = this.selectedDay;
      if (_day > daysInMonth) {
        _day = daysInMonth;
      }
      this.updateDay(new Date(`${_year}/${_month + 1}/${_day}`));
    },
    handlePrevYear () {
      let _year = this.selectedYear - 1;
      let _month = this.selectedMonth;

      const daysInMonth = getDaysInMonth(_year, _month);

      let _day = this.selectedDay;
      if (_day > daysInMonth) {
        _day = daysInMonth;
      }
      this.updateDay(new Date(`${_year}/${_month + 1}/${_day}`));
    },
    handleNextYear () {
      let _year = this.selectedYear + 1;
      let _month = this.selectedMonth;

      const daysInMonth = getDaysInMonth(_year, _month);

      let _day = this.selectedDay;
      if (_day > daysInMonth) {
        _day = daysInMonth;
      }
      this.updateDay(new Date(`${_year}/${_month + 1}/${_day}`));
    },
    handleSelectYear () {
      console.log('handleSelectedYear');
    },
    handleSelectMonth () {
      console.log('handleSelectMonth');
    },
    handelClear () {
      this.emitChange(true);
    },
    handelNow () {
      this.updateDay(new Date());
      this.emitChange();
    },
    handelConfirm () {
      this.emitChange();
    }
  }

};
</script>
