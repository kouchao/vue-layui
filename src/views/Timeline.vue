<template>
  <div>
    <lay-block title="常规时间线" />
    <lay-timeline>
      <lay-timeline-item title="8月18日">
        <p>
          layui 2.0 的一切准备工作似乎都已到位。发布之弦，一触即发。
          <br>不枉近百个日日夜夜与之为伴。因小而大，因弱而强。
          <br>无论它能走多远，抑或如何支撑？至少我曾倾注全心，无怨无悔
        </p>
      </lay-timeline-item>
      <lay-timeline-item title="8月16日">
        <p>
          杜甫的思想核心是儒家的仁政思想，他有<em>“致君尧舜上，再使风俗淳”</em>的宏伟抱负。个人最爱的名篇有：
        </p>
        <ul>
          <li>《登高》</li>
          <li>《茅屋为秋风所破歌》</li>
        </ul>
      </lay-timeline-item>
      <lay-timeline-item title="8月15日">
        <p>
          中国人民抗日战争胜利日
          <br>常常在想，尽管对这个国家有这样那样的抱怨，但我们的确生在了最好的时代
          <br>铭记、感恩 <br>所有为中华民族浴血奋战的英雄将士 <br>永垂不朽
        </p>
      </lay-timeline-item>
      <lay-timeline-item
        title="过去"
        simple
      />
    </lay-timeline>

    <lay-block title="简约时间线：大事记" />
    <lay-timeline>
      <lay-timeline-item
        simple
        icon="layui-icon-fire"
      >
        <slot slot="title">
          2018年，layui 5.0 发布。并发展成为中国最受欢迎的前端UI框架（期望）
        </slot>
      </lay-timeline-item>
      <lay-timeline-item simple>
        <slot slot="title">
          2017年，layui 里程碑版本 2.0 发布
        </slot>
      </lay-timeline-item>
      <lay-timeline-item simple>
        <slot slot="title">
          2015年，layui 孵化
        </slot>
      </lay-timeline-item>

      <lay-timeline-item
        simple
        icon="layui-anim layui-anim-rotate layui-anim-loop layui-icon-loading-1"
      >
        <slot slot="title">
          更久前，轮子时代。维护几个独立组件：layer等
        </slot>
      </lay-timeline-item>
    </lay-timeline>
  </div>
</template>

<script>
export default {
  name: 'Timeline'
};
</script>

<style scoped></style>
