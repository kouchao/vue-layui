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
import emitter from '../../../mixins/emitter';
export default {
  name: 'LayForm',
  componentName: 'LayForm',
  mixins: [emitter],
  props: {
    border: Boolean,
    model: {
      type: Object,
      default: () => null
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
  data () {
    return {
      fields: []
    };
  },
  created () {
    this.$on('lay.form.addField', (field) => {
      if (field) {
        this.fields.push(field);
      }
    });

    this.$on('lay.form.removeField', (field) => {
      if (field.prop) {
        this.fields.splice(this.fields.indexOf(field), 1);
      }
    });
  },
  methods: {
    validate (callback) {
      if (!this.model) {
        console.warn('[Layui Warn][Form]model is required for validate to work!');
        return;
      }

      let valid = true;
      // 如果需要验证的fields为空，调用验证时立刻返回callback
      if (this.fields.length === 0 && callback) {
        // eslint-disable-next-line standard/no-callback-literal
        callback(true);
      }
      this.fields.forEach(field => {
        field.validate((message, field) => {
          if (message) {
            valid = false;
          }
        });
      });
      callback(valid);

    }
  }
};
</script>

<style></style>
