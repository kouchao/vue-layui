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
    <label
      v-if="label"
      class="layui-form-label"
    >{{ label }}</label>

    <slot>{{ value }}</slot>

    <div
      v-if="wordAux"
      class="layui-form-mid layui-word-aux"
    >
      {{ wordAux }}
    </div>
    <div
      v-if="isError"
      class="layui-form-item__error"
    >
      {{ message }}
    </div>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator';
import emitter from '../../../mixins/emitter';
export default {
  name: 'LayFormItem',
  componentName: 'LayFormItem',
  mixins: [emitter],
  props: {
    label: {
      type: String,
      default: ''
    },
    block: Boolean,
    wordAux: {
      type: String,
      default: ''
    },
    border: Boolean,
    prop: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isRequired: false,
      isError: false,
      message: '',
      isTextarea: false
    };
  },
  inject: ['rootForm'],
  computed: {
    value () {
      if (
        this.rootForm &&
        this.rootForm.rules &&
        this.prop &&
        this.rootForm.rules[this.prop]
      ) {
        // this.validate();
        return this.rootForm.model[this.prop];
      }
      return '';
    }
  },
  created () {
    if (
      this.rootForm &&
      this.rootForm.rules &&
      this.rootForm.model &&
      this.prop &&
      this.rootForm.rules[this.prop]
    ) {
      this.isRequired = !!this.rootForm.rules[this.prop].find(o => o.required);
    }
  },
  mounted () {
    this.isTextarea = !!this.$children.find(({ mName }) => mName == 'LayTextarea');
    if (this.prop) {
      this.dispatch('LayForm', 'lay.form.addField', [this]);
    }
  },
  beforeDestroy () {
    this.dispatch('ElForm', 'el.form.removeField', [this]);
  },
  methods: {
    validate (callback) {
      if (!this.rootForm) {
        console.warn('[Layui Warn][LayFormItem]使用Form包裹才可以使用验证!');
        return;
      }
      const rules = this.rootForm.rules;
      const model = this.rootForm.model;

      if ((!rules || rules.length === 0 || !model) && this.required === undefined) {
        callback();
        return true;
      }
      const descriptor = {};
      descriptor[this.prop] = rules[this.prop];
      const validator = new AsyncValidator(descriptor);
      validator.validate(model, { firstFields: true }, (errors, invalidFields) => {
        this.isError = !!errors;
        this.message = errors ? errors[0].message : '';
        callback(this.message, invalidFields);
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
