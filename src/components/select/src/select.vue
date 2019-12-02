<template>
  <div :class="$parent.block ? 'layui-input-block' : 'layui-input-inline'">
    <div
      class="layui-unselect layui-form-select"
      :class="{ 'layui-form-selected layui-form-selectup': isOpen }"
      @click="handleClick"
    >
      <div class="layui-select-title">
        <input
          v-model="selectText"
          type="text"
          :placeholder="placeholder"
          readonly=""
          class="layui-input layui-unselect"
          :class="{
            'layui-disabled': disabled
          }"
        >
        <i class="layui-edge" />
      </div>
      <dl
        class="layui-anim layui-anim-upbit"
        :class="{
          'layui-select-group': group
        }"
        style=""
      >
        <dd
          lay-value=""
          class="layui-select-tips"
        >
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
export default {
  name: 'LaySelect',
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
      selectText: ''
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
    handleClick: function () {
      if (!this.disabled) {
        this.isOpen = !this.isOpen;
      } else {
        this.isOpen = false;
      }
    },
    selectOption: function (item) {
      if (!this.disabled) {
        this.selectText = item[this.prop.lable];
        this.$emit('input', item[this.prop.value]);
        this.$emit('change', this.value);
        this.formItem && this.formItem.validate('change');
      }
      this.handleClick();
    }
  }
};
</script>

<style></style>
