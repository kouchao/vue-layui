<template>
  <div
    class="layui-form-item"
    :class="{
      'layui-form-pane': border,
      'is-error': isError,
      'is-required': isRequired,
      'is-textarea': isTextarea
    }"
  >
    <label v-if="label" class="layui-form-label">{{ label }}</label>

    <slot>{{ value }}</slot>

    <div v-if="wordAux" class="layui-form-mid layui-word-aux">
      {{ wordAux }}
    </div>
    <div v-if="isError" class="layui-form-item__error">{{ message }}</div>
  </div>
</template>

<script>
import asyncValidator from "async-validator";
export default {
  name: "LayFormItem",
  props: {
    label: String,
    block: Boolean,
    wordAux: String,
    border: Boolean,
    prop: String
  },
  data() {
    return {
      isRequired: false,
      isError: false,
      message: "",
      isTextarea: false
    };
  },
  inject: ["rootForm"],
  created() {
    if (
      this.rootForm &&
      this.rootForm.rules &&
      this.rootForm.model &&
      this.prop &&
      this.rootForm.rules[this.prop]
    ) {
      this.isRequired = this.rootForm.rules[this.prop].find(o => o.required)
        ? true
        : false;
    }
  },
  computed: {
    value() {
      if (
        this.rootForm &&
        this.rootForm.rules &&
        this.prop &&
        this.rootForm.rules[this.prop]
      ) {
        this.validate();
        return this.rootForm.model[this.prop];
      }
    }
  },
  mounted() {
    this.isTextarea = this.$children.find(({ mName }) => mName == "LayTextarea")
      ? true
      : false;
  },
  methods: {
    validate() {
      const descriptor = {};
      descriptor[this.prop] = this.rootForm.rules[this.prop];
      let validator = new asyncValidator(descriptor);
      validator.validate(this.rootForm.model, errors => {
        if (errors) {
          this.isError = true;
          this.message = errors[0].message;
        } else {
          this.isError = false;
        }
      });
    }
  }
};
</script>

<style scoped>
.is-required .layui-form-label:before {
  content: "*";
  color: #f56c6c;
  margin-right: 4px;
}

.layui-form-item__error {
  color: #f56c6c;
  font-size: 12px;
  line-height: 1;
  padding-top: 4px;
  position: absolute;
  top: 100%;
  left: 110px;
}

.layui-form-item {
  position: relative;
  margin-bottom: 22px;
}

.is-error .layui-input {
  border-color: #ff5722 !important;
}

.is-textarea .layui-form-label {
  width: 100%;
  text-align: left;
}

.is-textarea .layui-input-block {
  margin-left: 1px;
  top: -1px;
}
</style>
