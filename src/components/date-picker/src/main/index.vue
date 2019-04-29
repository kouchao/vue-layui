<template>
  <div>
    <div class="layui-laydate-main laydate-main-list-0">
      <picker-header
        v-model="selectedType"
        :year="selectedYear"
        :month="selectedMonth"
        @prevYear="handlePrevYear"
        @prevMonth="handlePrevMonth"
        @nextYear="handleNextYear"
        @nextMonth="handleNextMonth"
      />
      <date-table
        v-if="selectedType == 'date'"
        :year="selectedYear"
        :month="selectedMonth"
        :day="selectedDay"
        :festival="festival"
        @change="handerDateTableChange"
      />
      <month-table
        v-else-if="selectedType == 'month'"
        :month="selectedMonth"
        @change="handerMonthTableChange"
      />
      <year-table
        v-else-if="selectedType == 'year'"
        :year="selectedYear"
        @change="handerYearTableChange"
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
import { getDaysInMonth } from '../utils';

import DateTable from '../content/date-table';
import MonthTable from '../content/month-table';
import YearTable from '../content/year-table';
import PickerHeader from '../header';
import { oneOf } from '@/utils/validatorProps';

export default {
  name: 'Main',
  components: {
    DateTable,
    MonthTable,
    YearTable,
    PickerHeader
  },
  props: {
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
    festival: Boolean
  },
  data () {
    return {
      selectedYear: 0,
      selectedMonth: 0,
      selectedDay: 0,
      selectedType: this.type
    };
  },
  watch: {
    type: function () {
      this.selectedType = this.type;
    }
  },
  created () {
    this.selectedType = this.type;
    // // 测试当前时间
    const date = new Date();
    this.handerYearTableChange(date.getFullYear());
    this.handerMonthTableChange(date.getMonth());
    this.handerDateTableChange(date.getDate());
  },
  methods: {
    handerDateTableChange (day) {
      this.selectedDay = day;
    },
    handerMonthTableChange (month, isHeaderChange) {
      this.selectedMonth = month;
      if (!isHeaderChange) {
        this.selectedType = this.type;
      }

      let _day = this.checkDay();
      this.handerDateTableChange(_day);
    },
    handerYearTableChange (year, isHeaderChange) {
      this.selectedYear = year;
      if (!isHeaderChange) {
        this.selectedType = this.type;
      }

      let _day = this.checkDay();
      this.handerDateTableChange(_day);

    },
    checkDay (year = this.selectedYear, month = this.selectedMonth, day = this.selectedDay) {
      const daysInMonth = getDaysInMonth(year, month);
      if (day > daysInMonth) {
        day = daysInMonth;
      }
      return day;
    },
    handlePrevMonth () {
      let _year = this.selectedYear;
      let _month = this.selectedMonth - 1;

      if (_month < 0) {
        _month = 11;
        _year = _year - 1;
      }

      this.handerYearTableChange(_year, true);
      this.handerMonthTableChange(_month, true);
    },
    handleNextMonth () {

      let _year = this.selectedYear;
      let _month = this.selectedMonth + 1;

      if (_month > 11) {
        _month = 0;
        _year = _year + 1;
      }

      this.handerYearTableChange(_year, true);
      this.handerMonthTableChange(_month, true);
    },
    handlePrevYear () {
      let _year = this.selectedType == 'year' ? this.selectedYear - 15 : this.selectedYear - 1;
      this.handerYearTableChange(_year, true);
    },
    handleNextYear () {
      let _year = this.selectedType == 'year' ? this.selectedYear + 15 : this.selectedYear + 1;
      this.handerYearTableChange(_year, true);
    },
    handelClear () {
      this.emitChange(true);
    },
    handelNow () {
      const date = new Date();
      this.handerYearTableChange(date.getFullYear());
      this.handerMonthTableChange(date.getMonth());
      this.handerDateTableChange(date.getDate());
      this.emitChange();
    },
    handelConfirm () {
      this.selectedType = this.type;
      this.emitChange();
    },
    emitChange (isClear) {
      let date = dayjs(`${this.selectedYear}-${this.selectedMonth + 1}-${this.selectedDay}`);
      let val;
      if (!this.format) {
        switch (this.type) {
        case 'year':
          val = date.format('YYYY');
          break;
        case 'month':
          val = date.format('YYYY-MM');
          break;
        case 'date':
          val = date.format('YYYY-MM-DD');
          break;
        }
      } else {
        val = date.format(this.format);
      }

      this.$emit('change', isClear ? '' : val);
      this.$emit('close');
    }
  }

};
</script>
