<template>
  <div>
    <lay-block title="默认风格的进度条"></lay-block>
    <lay-progress :percentage="40"></lay-progress>
    <div style="margin-top: 15px; width:300px">
      <lay-progress :percentage="70"></lay-progress>
    </div>
    <br />
    <p>
      温馨提示：进度条的宽度是100%适配于它的父级元素，如上面的进度条是在一个300px的父容器中。
    </p>

    <lay-block title="更多颜色选取" style="margin-top: 50px;"></lay-block>
    <lay-progress :percentage="20" theme="red"></lay-progress>
    <br />
    <lay-progress :percentage="30" theme="orange"></lay-progress>
    <br />
    <lay-progress :percentage="40" theme="green"></lay-progress>
    <br />
    <lay-progress :percentage="50" theme="blue"></lay-progress>
    <br />
    <lay-progress :percentage="60" theme="cyan"></lay-progress>

    <lay-block title="大尺寸进度条" style="margin-top: 50px;"></lay-block>
    <lay-progress :percentage="20" size="big"></lay-progress>
    <br />
    <lay-progress :percentage="35" size="big" theme="green"></lay-progress>
    <br />
    <lay-progress :percentage="75" size="big" theme="cyan"></lay-progress>

    <lay-block title="显示进度比文本" style="margin-top: 50px;"></lay-block>

    <lay-progress :percentage="20" :show-text="true"></lay-progress>
    <br />
    <br />
    <lay-progress
      :percentage="50"
      :show-text="true"
      text="5 / 10"
    ></lay-progress>
    <br />
    <br />
    <lay-progress :percentage="70" size="big" :show-text="true"></lay-progress>
    <br />
    <p>
      正如你上述看到的，除了百分数，还有分数，但是这不是计算的，而是自定义文字
    </p>

    <lay-block title="动态改变进度" style="margin-top: 50px;"></lay-block>
    <lay-progress
      :percentage="percentage"
      theme="red"
      size="big"
      show-text
    ></lay-progress>

    <div style="margin: 20px 0">
      <lay-button @click="percentage = 50">设置50%</lay-button>
      <lay-button @click="load">模拟loading</lay-button>
    </div>
  </div>
</template>

<script>
let timer = "";
export default {
  name: "Progress",
  data() {
    return {
      percentage: 0
    };
  },
  methods: {
    load() {
      if (timer) {
        clearInterval(timer);
      }
      this.percentage = 0;

      timer = setInterval(() => {
        this.percentage += parseInt(Math.random() * 10 + 3);
        if (this.percentage >= 100) {
          this.percentage = 100;
          clearInterval(timer);
        }
      }, 500);
    }
  }
};
</script>

<style scoped></style>
