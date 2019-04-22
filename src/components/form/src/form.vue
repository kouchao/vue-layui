<template>
  <form
    class="layui-form"
    :class="{
      'layui-form-pane': border
    }"
  >
    <slot />
  </form>
</template>

<script>
// import asyncValidator from 'async-validator';

export default {
  name: 'LayForm',
  props: {
    border: Boolean,
    model: {
      type: Object,
      default: () => {}
    },
    rules: {
      type: Object,
      default: () => {}
    }
  },
  provide () {
    return {
      rootForm: this
    };
  },
  methods: {
    // validate (cb) {
    //   let validator = new asyncValidator(this.rules);
    //   validator.validate(this.model, errors => {
    //     if (errors) {
    //       cb(false);
    //     } else {
    //       cb(true);
    //     }
    //   });
    // }
  }
};
</script>

<style></style>
