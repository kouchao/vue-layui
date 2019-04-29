<template>
  <div class="layui-laydate-content">
    <table>
      <thead>
        <tr>
          <th>日</th>
          <th>一</th>
          <th>二</th>
          <th>三</th>
          <th>四</th>
          <th>五</th>
          <th>六</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="week in days"
          :key="`tr/${week[0].key}`"
        >
          <td
            v-for="date in week"
            :key="`td/${date.key}`"
            :class="{
              'laydate-day-prev': isPrev(date),
              'laydate-day-next': date.month > month,
              'layui-this': isday(date)
            }"
            @click="emitChange(date.day, date.month)"
          >
            <span
              :class="{
                'laydate-day-mark': (festival || importantDays) && date.festival
              }"
            >{{ (festival || importantDays) && date.festival || date.day }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { getDay, getDaysInMonth, getPrevDaysInMonth, getFestival } from '../utils';

export default {
  name: 'DateContent',
  props: {
    year: {
      type: Number,
      required: true
    },
    month: {
      type: Number,
      required: true
    },
    day: {
      type: Number,
      required: true
    },
    festival: Boolean,
    importantDays: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      days: []
    };
  },
  watch: {
    year () {
      this.updateDay();
    },
    month () {
      this.updateDay();
    },
    day () {
      this.updateDay();
    }
  },
  mounted () {
    this.updateDay();
  },
  methods: {
    updateDay () {
      if (!this.year || !this.day) {
        return false;
      }
      const firstDay = getDay(this.year, this.month);

      // 这个月份共多少天
      const daysInMonth = getDaysInMonth(this.year, this.month);
      // 上月份共多少天
      const prevDaysInMonth = getPrevDaysInMonth(this.year, this.month);

      let _days = [];
      for (let i = 0; i < 42; i++) {
        if (i % 7 == 0) {
          _days.push([]);
        }

        const isPrevDay = i < firstDay;
        const isNextDay = i > daysInMonth + firstDay - 1;

        let _year = this.year;
        let _month = this.month;
        let _day = i - firstDay + 1;

        if (isPrevDay) {
          if (_month == 0) {
            _month = 11;
            _year = _year - 1;
          } else {
            _month = _month - 1;
          }
          _day = prevDaysInMonth - firstDay + i + 1;
        } else if (isNextDay) {
          if (_month == 11) {
            _month = 0;
            _year = _year + 1;
          } else {
            _month = _month + 1;
          }
          _day = i - daysInMonth - firstDay + 1;
        }

        _days[parseInt(i / 7)].push({
          year: _year,
          month: _month,
          day: _day,
          key: `${_year}/${_month + 1}/${_day}`,
          festival: this.festival || this.importantDays ? getFestival(_month, _day, this.importantDays) : ''
        });
      }
      this.days = _days;
    },
    // 判断是不是当前日期
    isday (date) {
      return date.year == this.year && date.month == this.month && date.day == this.day;
    },
    // 判断是不是前一个月
    isPrev (date) {
      return date.month < this.month || date.year < this.year;
    },
    emitChange (day, month) {
      if (month != this.month) {
        return false;
      }
      this.$emit('change', day);
    }
  }
};
</script>
