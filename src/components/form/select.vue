<template>
  <span>
    <div class="layui-unselect layui-form-select"
         :class="{'layui-form-selected layui-form-selectup': open}"
         @click="handleClick">
      <div class="layui-select-title">
        <input type="text" :placeholder="placeholder" :value="selectText" readonly="" class="layui-input layui-unselect">
        <i class="layui-edge"></i>
      </div>
      <dl class="layui-anim layui-anim-upbit" style="">
        <dd lay-value="" class="layui-select-tips">{{placeholder}}</dd>
        <dd v-for="item in label"
            @click.stop="selectOption(item)"
            :value="item[valueTag]"
            :class="item[valueTag] == value ? 'layui-this' : ''">{{item[textTag]}}</dd>
      </dl>
    </div>
  </span>
</template>

<script>
  export default {
    name: 'layui-select',
    props: {
      disabled: Boolean,
      value: [String, Number],
      open: Boolean,
      label: Array,
      valueTag: String,
      textTag: String,
      placeholder: [String]
    },
    data: function () {
      return {
        selected: false,
        selectText: ''
      }
    },
    methods: {
      handleClick: function () {
        if (!this.disabled) {
          this.$emit('update:open', !this.open)
        }
      },
      selectOption: function (item) {
        this.selectText = item[this.textTag]
        this.handleClick()
        this.$emit('input', item[this.valueTag])
        this.$emit('change', this.value)
      }
    },
    created: function () {
      this.label.forEach(obj => {
        if (obj[this.valueTag] === this.value) {
          this.selectText = obj[this.textTag]
        }
      })
    }
  }
</script>

<style>

</style>
