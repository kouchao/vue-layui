<template>
  <span>
    <span @click="handleClick">
      <input type="checkbox" :name="name" title="写作" :value="label">
      <div class="layui-unselect" :class="[{
      'layui-radio-disbaled layui-disabled': disabled
      },
      skin == 'switch' ? 'layui-form-switch' : 'layui-form-checkbox',
      hasValue && skin == 'switch' ? 'layui-form-onswitch' : '',
      hasValue && skin != 'switch' ? 'layui-form-checked' : '']" :lay-skin="skin">
        <span v-if="skin != 'switch'"><slot></slot></span>

        <em v-if="skin == 'switch'">{{text}}</em>
        <i v-if="skin == 'switch'"></i>

        <i v-if="skin == 'primary'" class="layui-icon"></i>
        <i v-if="!skin" class="layui-icon"></i>
      </div>
    </span>

    <!--<span v-if="skin && skin == 'switch'">-->
      <!--<input type="checkbox" name="open" lay-text="ON|OFF">-->
      <!--<div class="layui-unselect layui-form-switch layui-form-onswitch "-->
           <!--:class="{-->
              <!--'layui-form-checked': hasValue,-->
              <!--'layui-radio-disbaled layui-disabled': disabled-->
              <!--}"-->
           <!--lay-skin="_switch">-->
        <!--<em>ON</em>-->
        <!--<i></i>-->
      <!--</div>-->

      <!--<input type="checkbox" name="close" lay-skin="switch" lay-text="ON|OFF">-->
        <!--<div class="layui-unselect layui-form-switch" lay-skin="_switch">-->
          <!--<em>OFF</em><i></i>-->
        <!--</div>-->

    <!--</span>-->
  </span>



</template>

<script>
  export default {
    name: 'layui-checkbox',
    data: function () {
      return {
        hasValue: false,
        text: ''
      }
    },
    props: {
      value: Array,
      label: [String, Number],
      disabled: Boolean,
      name: String,
      skin: [String],
      openText: [String],
      closeText: [String]
    },
    methods: {
      handleClick: function () {
        if (!this.disabled) {
          if (!this.value.includes(this.label)) {
            this.value.push(this.label)
          } else {
            let index = this.value.indexOf(this.label)
            this.value.splice(index, 1)
          }
          console.log(this.value)
          this.value.includes(this.label) ? this.hasValue = true : this.hasValue = false
          this.$emit('input', this.value)
        }
      }
    },
    created: function () {
      if (this.value.includes(this.label)) {
        this.hasValue = true
        this.text = this.openText
      } else {
        this.hasValue = false
        this.text = this.closeText
      }
    }
  }
</script>

<style>

</style>
