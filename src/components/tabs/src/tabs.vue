<template>
  <div
    class="layui-tab"
    :class="{
      'layui-tab-brief': skin == 'simple',
      'layui-tab-card': skin == 'card'
    }"
    :style="width ? 'width: ' + width + 'px' : ''"
    :overflow="overflow"
  >
    <ul
      v-if="$slots.default"
      class="layui-tab-title"
      :class="{
        'layui-tab-more': isOpen
      }"
    >
      <li
        v-for="item in $slots.default.map(o => o.componentOptions.propsData)"
        :key="item.title"
        :class="{
          'layui-this': value == item.name
        }"
        @click="handleClick(item.name)"
      >
        {{ item.title }}
        <i
          v-if="closable"
          class="layui-icon layui-unselect layui-tab-close layui-icon-close"
          @click.stop="handleClose(item.name)"
        />
      </li>
      <span
        v-if="overflow"
        class="layui-unselect layui-tab-bar"
        lay-stope="tabmore"
        @click="handleOpen"
      >
        <i
          v-if="isOpen"
          lay-stope="tabmore"
          class="layui-icon layui-icon-up"
        />
        <i
          v-else
          lay-stope="tabmore"
          class="layui-icon layui-icon-down"
        />
      </span>
    </ul>
    <div
      class="layui-tab-content"
      :style="height ? 'height: ' + height + 'px' : ''"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayTabs',
  props: {
    activeName: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    closable: {
      type: Boolean,
      default () {
        return false;
      }
    },
    skin: {
      type: String,
      default: ''
    },
    overflow: Boolean,
    height: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      isOpen: false
    };
  },
  watch: {
    value () {
      this.$emit('input', this.value);
    }
  },
  methods: {
    handleClick (value) {
      this.$emit('input', value);
    },
    handleClose (value) {
      this.$emit('close', value);
    },
    handleOpen () {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style scoped>
i.right {
  padding-left: 4px;
}

i.left {
  padding-right: 4px;
}
</style>
