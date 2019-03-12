<template>
  <div :class="$parent.block ? 'layui-input-block' : 'layui-input-inline'">
    <div
      class="layui-unselect layui-form-select"
      :class="{ 'layui-form-selected layui-form-selectup': isOpen }"
      @click="handleClick"
    >
      <div class="layui-select-title">
        <input
          type="text"
          :placeholder="placeholder"
          v-model="selectText"
          readonly=""
          class="layui-input layui-unselect"
          :class="{
            'layui-disabled': disabled
          }"
        />
        <i class="layui-edge"></i>
      </div>
      <dl
        class="layui-anim layui-anim-upbit"
        :class="{
          'layui-select-group': group
        }"
        style=""
      >
        <dd lay-value="" class="layui-select-tips">{{ placeholder }}</dd>
        <span v-for="g in datas" :key="g.title">
          <dt v-if="group">{{ g.title }}</dt>
          <dd
            v-for="item in g.data"
            :key="item.lable"
            @click.stop="selectOption(item)"
            :value="item[prop.value || 'value']"
            :class="item[prop.value || 'value'] == value ? 'layui-this' : ''"
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
  name: "LaySelect",
  props: {
    disabled: Boolean,
    value: [String, Number],
    data: Array,
    prop: Object,
    placeholder: String,
    group: Boolean
  },
  data: function() {
    return {
      isOpen: false,
      selected: false,
      selectText: ""
    };
  },
  methods: {
    handleClick: function() {
      if (!this.disabled) {
        this.isOpen = !this.isOpen;
      } else {
        this.isOpen = false;
      }
    },
    selectOption: function(item) {
      if (!this.disabled) {
        this.selectText = item[this.prop.lable];
        this.$emit("input", item[this.prop.value]);
        this.$emit("change", this.value);
      }
      this.handleClick();
    }
  },
  created: function() {
    if (!this.group) {
      this.datas = [
        {
          data: this.data
        }
      ];
    } else {
      this.datas = this.data;
    }
  }
};
</script>

<style></style>
