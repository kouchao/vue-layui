<template>
  <textarea :type="type"
         :name="name"
         :placeholder="placeholder"
         class="layui-textarea"
         @input="handleChange"
         :value="value"
         :disabled="disabled"
         :class="{
           'layui-radio-disbaled layui-disabled': disabled
         }"></textarea>
</template>

<script>
  export default {
    name: 'layui-textarea',
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
