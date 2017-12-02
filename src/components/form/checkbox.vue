<template>
  <span @click="handleClick">
    <input type="checkbox" :name="name" title="写作" :value="label">
    <div class="layui-unselect layui-form-checkbox " :class="{
    'layui-form-checked': hasValue,
    'layui-radio-disbaled layui-disabled': disabled
    }" :lay-skin="primary ? 'primary' : ''">
      <span><slot></slot></span>
      <i v-if="primary" class="layui-icon"></i>
      <i v-else class="layui-icon"></i>
    </div>
  </span>

</template>

<script>
  export default {
    name: 'layui-checkbox',
    data: function () {
      return {
        hasValue: false
      }
    },
    props: {
      value: Array,
      label: [String, Number],
      disabled: Boolean,
      name: String,
      primary: Boolean
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
      this.value.includes(this.label) ? this.hasValue = true : this.hasValue = false
    }
  }
</script>

<style>

</style>
