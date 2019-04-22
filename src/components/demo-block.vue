<template>
  <div class="docs-demo-wrapper">
    <div
      :style="{ height: isExpand ? 'auto' : '0' }"
      class="demo-container"
    >
      <div span="14">
        <div class="docs-demo docs-demo--expand">
          <div class="highlight-wrapper">
            <slot name="highlight" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="docs-trans docs-demo__triangle"
      :class="isExpand ? 'is-expand' : ''"
      @click="toggle"
    >
      {{ isExpand ? "隐藏代码" : "显示代码" }}
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Vue from 'vue'
export default {
  data() {
    return {
      isExpand: false
    }
  },
  methods: {
    toggle() {
      this.isExpand = !this.isExpand
    }
  }
}
</script>

<style>

.demo-container {
    overflow: hidden;
}

.docs-demo {
    background: #282c34;
    color: #AAACB6;
}

.docs-demo-wrapper {
  padding: 10px;
  border: 1px solid #e6e6e6;
  border-radius: 2px;
  margin-bottom: 50px;
}

.docs-demo {
  border-radius: 6px;
  overflow: hidden;
}

.docs-demo__triangle {
  text-align: center;
  cursor: pointer
}

.docs-demo__triangle.is-expand {
  margin-top: 10px
}

pre {
  padding: 10px;
}
</style>