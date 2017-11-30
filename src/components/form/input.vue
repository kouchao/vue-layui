<template>
  <input :type="type"
         :name="name"
         required
         lay-verify="required"
         :placeholder="placeholder"
         class="layui-input"
         @input="handleChange"
         :value="value"
         :disabled="disabled"
         :class="{
           'layui-radio-disbaled layui-disabled': disabled
         }">
</template>

<script>
  export default {
    name: 'layui-input',
    props: {
      value: [String, Number],
      placeholder: String,
      disabled: Boolean,
      type: {
        type: String,
        default: 'text'
      },
      name: String,
      required: Boolean
    },
    methods: {
      handleChange: function () {
        if (!this.disabled) {
          this.$emit('input', event.target.value)
        }
      }
    }
  }
</script>

<style>

</style>
