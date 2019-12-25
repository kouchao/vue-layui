<template>
  <div
    :class="$parent.block ? 'layui-input-block' : 'layui-input-inline'"
  >
    <div
      ref="reference"
      class="layui-unselect layui-form-select"
      :class="{ 'layui-form-selected': isOpen }"
    >
      <div
        class="layui-select-title"
        @click="handleClick"
      >
        <input
          ref="input"
          v-model="selectText"
          type="text"
          :placeholder="placeholder"
          readonly=""
          class="layui-input layui-unselect"
          :class="{
            'layui-disabled': disabled
          }"
          @blur="handleBlur"
          @focus="handleFocus"
        >
        <i class="layui-edge" />
      </div>

      <dl
        ref="popper"
        class="layui-form-select-dl"
        :class="{
          'layui-select-group': group
        }"
      >
        <dd class="layui-select-tips">
          {{ placeholder }}
        </dd>
        <span
          v-for="g in datas"
          :key="g.title"
        >
          <dt v-if="group">{{ g.title }}</dt>
          <dd
            v-for="item in g.data"
            :key="item.lable"
            :value="item[prop.value || 'value']"
            :class="item[prop.value || 'value'] == value ? 'layui-this' : ''"
            @mousedown="blurStop = true"
            @click.stop="selectOption(item)"
          >
            {{ item[prop.lable || "lable"] }}
          </dd>
        </span>
      </dl>
    </div>
  </div>
</template>

<script>
import Popper from '@/mixins/popper';

export default {
  name: 'LaySelect',
  mixins: [Popper],
  props: {
    disabled: Boolean,
    value: {
      type: [String, Number],
      default: ''
    },
    data: {
      type: Array,
      default: () => []
    },
    prop: {
      type: Object,
      default: () => {}
    },
    placeholder: {
      type: String,
      default: ''
    },
    group: Boolean
  },
  inject: ['formItem'],
  data: function () {
    return {
      isOpen: false,
      selected: false,
      selectText: '',
      isFocus: false,
      blurStop: false,
      clickStop: false
    };
  },
  created: function () {
    if (!this.group) {
      this.datas = [
        {
          data: this.data
        }
      ];
    } else {
      this.datas = this.data;
    }
  },
  methods: {
    handleBlur () {
      this.isFocus = false;
      if (this.isOpen && !this.blurStop) {
        this.isOpen = false;
        this.$emit('blur', event);
      }
    },
    handleFocus (event) {
      if (!this.disabled) {
        this.isOpen = true;
        this.isFocus = true;
        this.clickStop = true;
        this.createPopper();
        this.$emit('focus', event);
      }

    },
    handleClick: function () {
      if (this.clickStop) {
        this.clickStop = false;
        return;
      }

      this.isOpen = !this.isOpen;
    },
    selectOption: function (item) {
      if (!this.disabled) {
        this.selectText = item[this.prop.lable];
        this.$emit('input', item[this.prop.value]);
        this.$emit('change', this.value);
        this.formItem && this.formItem.validate('change');

        const input = this.$refs.input;

        if (this.blurStop) {
          this.blurStop = false;
          input.focus();
          input.blur();
        }

      }

    }
  }
};
</script>

<style></style>
