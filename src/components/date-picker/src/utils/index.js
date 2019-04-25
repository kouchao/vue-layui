// 是否闰年
export const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

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
