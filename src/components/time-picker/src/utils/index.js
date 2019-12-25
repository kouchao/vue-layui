// 获取数字 补零
export const getText = (num) => {
  return num < 10 ? `0${num}` : `${num}`;
};
