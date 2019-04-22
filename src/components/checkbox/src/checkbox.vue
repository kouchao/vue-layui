<template>
  <span @click="handleClick">
    <input
      type="checkbox"
      :name="name"
      title="写作"
      :value="label"
    >
    <div
      class="layui-unselect"
      :class="[
        {
          'layui-checkbox-disbaled layui-disabled': disabled
        },
        'layui-form-checkbox',
        hasValue ? 'layui-form-checked' : ''
      ]"
      :lay-skin="skin"
    >
      <span><slot /></span>

      <i
        v-if="skin == 'primary'"
        class="layui-icon layui-icon-ok"
      />
      <i
        v-if="!skin"
        class="layui-icon layui-icon-ok"
      />
    </div>
  </span>
</template>

<script>
export default {
  name: 'LayCheckbox',
  props: {
    value: {
      type: Array,
      default: () => []
    },
    label: {
      type: [String, Number],
      default: ''
    },
    disabled: Boolean,
    name: {
      type: String,
      default: ''
    },
    skin: {
      type: String,
      default: ''
    }
  },
  data: function () {
    return {
      hasValue: false,
      text: ''
    };
  },
  created: function () {
    if (this.value.includes(this.label)) {
      this.hasValue = true;
    } else {
      this.hasValue = false;
    }
  },
  methods: {
    handleClick: function () {
      if (!this.disabled) {
        if (!this.value.includes(this.label)) {
          this.value.push(this.label);
        } else {
          let index = this.value.indexOf(this.label);
          this.value.splice(index, 1);
        }
        this.value.includes(this.label)
          ? (this.hasValue = true)
          : (this.hasValue = false);
        if (this.value.includes(this.label)) {
          this.hasValue = true;
        } else {
          this.hasValue = false;
        }
        this.$emit('input', this.value);
      }
    }
  }
};
</script>

<style></style>
