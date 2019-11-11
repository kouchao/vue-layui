<template>
  <div>
    <lay-block title="常规轮播" />
    <lay-carousel>
      <lay-carousel-item>1</lay-carousel-item>
      <lay-carousel-item>2</lay-carousel-item>
      <lay-carousel-item>3</lay-carousel-item>
      <lay-carousel-item>4</lay-carousel-item>
    </lay-carousel>
    <br>
    <lay-carousel
      arrow="hover"
      :height="100"
    >
      <lay-carousel-item>1</lay-carousel-item>
      <lay-carousel-item>2</lay-carousel-item>
      <lay-carousel-item>3</lay-carousel-item>
      <lay-carousel-item>4</lay-carousel-item>
    </lay-carousel>
    <lay-block title="各种参数设定" />
    <lay-form>
      <lay-form-item label="宽">
        <lay-input
          v-model="width"
          placeholder="请输入宽"
          number
        />
      </lay-form-item>
      <lay-form-item label="高">
        <lay-input
          v-model="height"
          placeholder="请输入高"
          number
        />
      </lay-form-item>
      <lay-form-item label="箭头状态">
        <lay-radio
          v-model="anim"
          label="default"
        >
          左右切换
        </lay-radio>
        <lay-radio
          v-model="anim"
          label="updown"
        >
          上下切换
        </lay-radio>
        <lay-radio
          v-model="anim"
          label="fade"
        >
          渐隐渐现
        </lay-radio>
      </lay-form-item>
      <lay-form-item label="动画类型">
        <lay-radio
          v-model="arrow"
          label="hover"
        >
          悬停显示
        </lay-radio>
        <lay-radio
          v-model="arrow"
          label="always"
        >
          始终显示
        </lay-radio>
        <lay-radio
          v-model="arrow"
          label="none"
        >
          不显示
        </lay-radio>
      </lay-form-item>
      <lay-form-item label="指示器位置">
        <lay-radio
          v-model="indicator"
          label="inside"
        >
          容器内部
        </lay-radio>
        <lay-radio
          v-model="indicator"
          label="outside"
        >
          容器外部
        </lay-radio>
        <lay-radio
          v-model="indicator"
          label="none"
        >
          不显示
        </lay-radio>
      </lay-form-item>
      <lay-form-item label="自动切换">
        <lay-switch v-model="autoplay" />
      </lay-form-item>
      <lay-form-item label="时间间隔">
        <lay-input
          v-model="interval"
          placeholder="请输入时间间隔"
          number
        />
      </lay-form-item>
    </lay-form>

    <lay-carousel
      :arrow="arrow"
      :anim="anim"
      :indicator="indicator"
      :width="width"
      :height="height"
      :autoplay="autoplay"
      :interval="interval"
      style="margin-bottom: 50px;"
    >
      <lay-carousel-item>1</lay-carousel-item>
      <lay-carousel-item>2</lay-carousel-item>
      <lay-carousel-item>3</lay-carousel-item>
      <lay-carousel-item>4</lay-carousel-item>
    </lay-carousel>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data () {
    return {
      anim: 'default',
      arrow: 'hover',
      indicator: 'inside',
      width: 600,
      height: 280,
      autoplay: true,
      interval: 1500
    };
  }
};
</script>

<style>
div[carousel-item] > * {
  text-align: center;
  color: #fff;
}

div[carousel-item] > *:nth-child(2n) {
  background-color: #009688;
}

div[carousel-item] > *:nth-child(2n + 1) {
  background-color: #5fb878;
}
</style>
