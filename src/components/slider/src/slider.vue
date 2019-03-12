<template>
  <div style="position: relative;">
    <div
      class="layui-slider"
      :class="{ 'layui-slider-vertical': vertical, 'layui-disabled': disabled }"
      :style="vertical ? 'height: ' + height + 'px' : ''"
      ref="slider"
    >
      <div
        class="layui-slider-tips"
        :class="{
          'is-vertical': vertical
        }"
        style="display: inline-block"
        v-if="isShowTip && showTip"
        :style="
          vertical ? 'bottom: ' + tipLeft + '%' : 'left: ' + tipLeft + '%'
        "
      >
        <slot :value="tipVal">{{ tipVal }}</slot>
      </div>
      <div
        class="layui-slider-bar"
        :class="'layui-bg-' + this.theme"
        :style="
          (vertical ? 'bottom: ' + left + '%' : 'left: ' + left + '%') +
            '; ' +
            (vertical ? 'height: ' + width + '%' : 'width: ' + width + '%')
        "
      ></div>
      <lay-slider-btn
        v-if="isArray"
        v-model="startValue"
        :max="max"
        :min="min"
        :step="step"
        :steps="steps"
        :slider-width="sliderWidth"
        @tip="showOrHideTip"
        :vertical="vertical"
        :theme="theme"
        :disabled="disabled"
      >
      </lay-slider-btn>
      <lay-slider-btn
        v-model="endValue"
        :max="max"
        :min="min"
        :step="step"
        :steps="steps"
        :slider-width="sliderWidth"
        @tip="showOrHideTip"
        :vertical="vertical"
        :theme="theme"
        :disabled="disabled"
      >
      </lay-slider-btn>
      <template v-if="showStops">
        <div
          :key="item"
          v-for="item in steps"
          class="layui-slider-step"
          :style="(vertical ? 'bottom' : 'left') + ': ' + item + '%'"
        ></div>
      </template>
    </div>
    <div
      v-if="!isArray && showInput"
      class="layui-slider-input layui-input"
      :class="{ 'is-vertical': vertical }"
      @mouseenter="showInputBtn = true"
      @mouseleave="showInputBtn = false"
    >
      <div class="layui-slider-input-txt">
        <input
          v-model="endValue"
          type="text"
          @change="handleChange"
          class="layui-input"
        />
      </div>
      <div class="layui-slider-input-btn" v-if="showInputBtn">
        <i class="layui-icon layui-icon-up" @click="handleUp"></i>
        <i class="layui-icon layui-icon-down" @click="handleDown"></i>
      </div>
    </div>
  </div>
</template>

<script>
import LaySliderBtn from "./slider-btn";
export default {
  name: "LaySlider",
  components: {
    LaySliderBtn
  },
  props: {
    value: {
      type: [Number, Array],
      requires: true
    },
    max: {
      type: Number,
      default: () => 100
    },
    min: {
      type: Number,
      default: () => 0
    },
    step: {
      type: Number,
      default: () => 1
    },
    showStops: Boolean,
    showTip: {
      type: Boolean,
      default: () => true
    },
    showInput: {
      type: Boolean,
      default: () => false
    },
    vertical: {
      type: Boolean,
      default: () => false
    },
    theme: {
      type: String,
      default: () => "green"
    },
    height: {
      type: Number,
      default: () => 200
    },
    disabled: Boolean
  },
  data() {
    return {
      isMouseDown: false,
      showInputBtn: false,
      sliderWidth: 0,
      isShowTip: false,
      endValue: 0,
      startValue: 0,
      steps: [],
      width: 0,
      left: 0,
      tipVal: 0,
      tipLeft: 0,
      isArray: false
    };
  },
  mounted() {
    this.setData();
    this.sliderWidth = this.vertical
      ? this.$refs.slider.offsetHeight
      : this.$refs.slider.offsetWidth;
  },
  methods: {
    setData() {
      this.isArray = Array.isArray(this.value);
      const { value, min, isArray, max, step } = this;
      const steps = [];

      for (let i = min; i <= max; i += step) {
        steps.push(((i - min) / (max - min) || 0) * 100);
      }

      this.steps = steps;

      if (isArray) {
        [this.startValue, this.endValue] = value;
      } else {
        [this.startValue, this.endValue] = [min, value];
      }
    },

    handleUp() {
      if (this.disabled) {
        return false;
      }
      const { endValue, step, max } = this;
      if (endValue + step < max) {
        this.endValue += step;
      } else {
        this.endValue = max;
      }
      this.handleChange();
    },
    handleDown() {
      if (this.disabled) {
        return false;
      }
      const { endValue, step, min } = this;
      if (endValue - step > min) {
        this.endValue -= step;
      } else {
        this.endValue = min;
      }

      this.handleChange();
    },
    handleChange() {
      const { endValue, max, min, startValue, isArray } = this;
      if (endValue > max) this.endValue = max;
      if (endValue < min) this.endValue = min;

      const array = [startValue, endValue];
      this.left = ((Math.min(...array) - min) / (max - min) || 0) * 100;
      this.width =
        ((Math.max(...array) - Math.min(...array)) / (max - min) || 0) * 100;

      if (isArray) {
        this.$emit("input", array);
        this.$emit("change", array);
      } else {
        this.$emit("input", endValue);
        this.$emit("change", endValue);
      }
    },
    showOrHideTip(val) {
      [this.isShowTip, this.tipLeft, this.tipVal] = val;
      this.tipVal = parseInt(this.tipVal);
    }
  },
  watch: {
    value() {
      this.setData();
    },
    startValue() {
      this.handleChange();
    },
    endValue() {
      this.handleChange();
    }
  }
};
</script>

<style scoped>
.layui-slider {
  margin-right: 85px;
}
.layui-slider-input-btn {
  display: inline-block;
}

.layui-slider-vertical {
  height: 100%;
  margin: 45px 30px;
}

.layui-slider-tips.is-vertical {
  margin-bottom: 20px;
}

.layui-slider-input.is-vertical {
  left: 0;
  top: 0;
}
</style>
