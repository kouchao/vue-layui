<template>
  <div>
    <lay-block title="基础效果" />
    <lay-rate v-model="rate" />

    <lay-block title="显示文字(自定义)" />

    <lay-rate
      v-model="rate"
      show-score
    >
      <template slot-scope="scope">
        {{ scope.rate }} 星
      </template>
    </lay-rate>
    <lay-block title="半星效果" />
    <lay-rate
      v-model="rateHalf"
      allow-half
    />
    <br>
    <lay-rate
      v-model="rateHalf"
      allow-half
      show-score
    >
      <template slot-scope="scope">
        {{ scope.rate }} 星
      </template>
    </lay-rate>
    <lay-block title="自定义内容" />
    <lay-rate
      v-model="rate"
      :texts="texts"
      show-text
    />
    <lay-block title="自定义长度" />
    <lay-rate
      v-model="rate"
      :max="4"
    />
    <br>
    <lay-rate
      v-model="rate"
      :max="8"
    />
    <lay-block title="只读" />
    <lay-rate
      v-model="rate"
      disabled
    />
    <lay-block title="自定义主题色" />
    <lay-rate
      v-model="rate"
      theme="orange"
    />
    <br>
    <lay-rate
      v-model="rate"
      theme="green"
    />
    <br>
    <lay-rate
      v-model="rate"
      theme="blue"
    />
    <br>
    <lay-rate
      v-model="rateHalf"
      theme="cyan"
      allow-half
    />
    <br>
    <lay-rate
      v-model="rateHalf"
      color="#FF5722"
      allow-half
    />
  </div>
</template>

<script>
export default {
  name: 'Rate',
  data () {
    return {
      rate: 3,
      rateHalf: 2.5,
      texts: {
        1: '极差',
        2: '及格',
        2.5: '良好',
        3: '良好',
        4: '优秀',
        5: '满分'
      }
    };
  }
};
</script>

<style scoped></style>
