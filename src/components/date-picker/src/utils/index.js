const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// TODO: 待补充，按招 https://github.com/sentsin/laydate/blob/master/src/laydate.js
const FESTIVAL = {
  '1-1': '元旦',
  '2-14': '情人节',
  '3-8': '妇女',
  '3-12': '植树',
  '9-18': '国耻',
  '10-1': '国庆',
  '12-25': '圣诞'
};

// 是否闰年
export const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

// 获得某月的第一天是周几
export const getDay = (year, month) => {
  return new Date(year, month, 1).getDay();
};

// 获得某月总天数
export const getDaysInMonth = (year, month) => {
  if (month == 1) {
    return isLeapYear(year) ? 29 : 28;
  }

  return DAYS_IN_MONTH[month];
};

// 获得上个月总天数
export const getPrevDaysInMonth = (year, month) => {
  if (month == 0) {
    year = year - 1;
    month = 11;
  } else {
    month = month - 1;
  }

  return getDaysInMonth(year, month);
};

// 获得公历节日和自定义节日
export const getFestival = (month, day, festival = FESTIVAL) => {
  return festival[`${month + 1}-${day}`];
};
