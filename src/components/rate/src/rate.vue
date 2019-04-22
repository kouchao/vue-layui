<template>
  <div class="layui-inline">
    <ul
      class="layui-rate"
      :readonly="disabled"
      @mouseleave="handleMouseLeave()"
    >
      <li
        v-for="(item, index) in rates"
        :key="item"
        class="layui-inline"
      >
        <i
          class="layui-icon"
          :class="[
            {
              'layui-icon-rate-solid': item == 1,
              'layui-icon-rate-half': item == 0.5,
              'layui-icon-rate': item == 0
            },
            'layui-co-' + theme
          ]"
          :style="color ? 'color: ' + color : ''"
          @mousemove="handleMouseMove(index, $event)"
          @click="handleClick()"
        />
      </li>
    </ul>
    <span
      v-if="showText || showScore"
      class="layui-inline"
    >
      <span v-if="showScore">
        <slot :rate="value" />
      </span>
      <span v-if="showText && !showScore && texts">{{
        texts[value] || ""
      }}</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'LayRate',
  props: {
    max: {
      type: Number,
      default: () => 5
    },
    disabled: {
      type: Boolean,
      default: () => false
    },
    allowHalf: {
      type: Boolean,
      default: () => false
    },
    value: {
      type: Number,
      default: () => 0
    },
    // 是否显示当前分数，show-score 和 show-text 不能同时为真 show-score优先展示
    showScore: {
      type: Boolean,
      default: () => false
    },
    // 是否显示文字，show-score 和 show-text 不能同时为真 show-score优先展示，必须定义texts
    showText: {
      type: Boolean,
      default: () => false
    },
    texts: {
      type: Object,
      default: () => []
    },
    theme: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      rates: [],
      rate: 0
    };
  },
  watch: {
    value () {
      this.rate = this.value;
      this.setRates();
    }
  },
  mounted () {
    this.rate = this.value;
    this.setRates();
  },
  methods: {
    setRates () {
      const { rate, max, allowHalf } = this;
      const rates = [];
      for (let i = 0; i < max; i++) {
        if (rate - i > 0) {
          rate - i < 1 && allowHalf ? rates.push(0.5) : rates.push(1);
        } else {
          rates.push(0);
        }
      }
      this.rates = rates;
    },
    handleMouseMove (key, e) {
      if (this.disabled) {
        return false;
      }
      const offset = e.offsetX > 10 || !this.allowHalf ? 1 : 0.5;
      this.rate = key + offset;
      this.setRates();
    },
    handleMouseLeave () {
      if (this.disabled) {
        return false;
      }
      this.rate = this.value;
      this.setRates();
    },
    handleClick () {
      if (this.disabled) {
        return false;
      }
      this.$emit('input', this.rate);
      this.$emit('change', this.rate);
    }
  }
};
</script>

<style></style>
