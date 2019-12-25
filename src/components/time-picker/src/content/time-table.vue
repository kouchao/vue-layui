<template>
  <div class="layui-laydate-content">
    <ul class="layui-laydate-list laydate-time-list">
      <li>
        <p>时</p>
        <ol>
          <li
            v-for="item in hours"
            :key="item"
            :class="{
              'layui-this': item == hour
            }"
            @click="handleSelecte('hour', item)"
          >
            {{ item }}
          </li>
        </ol>
      </li><li>
        <p>分</p>
        <ol>
          <li
            v-for="item in minutes"
            :key="item"
            :class="{
              'layui-this': item == minute
            }"
            @click="handleSelecte('minute', item)"
          >
            {{ item }}
          </li>
        </ol>
      </li><li>
        <p>秒</p>
        <ol>
          <li
            v-for="item in seconds"
            :key="item"
            :class="{
              'layui-this': item == second
            }"
            @click="handleSelecte('second', item)"
          >
            {{ item }}
          </li>
        </ol>
      </li>
    </ul>
  </div>
</template>
<script>
import { getText } from '../utils';

const hours = new Array(24).fill(0).map((_, i) => getText(i));
const minutes = new Array(60).fill(0).map((_, i) => getText(i));
const seconds = new Array(60).fill(0).map((_, i) => getText(i));

export default {
  name: 'TimeContent',
  props: {
    hour: {
      type: String,
      required: true
    },
    minute: {
      type: String,
      required: true
    },
    second: {
      type: String,
      required: true
    },
    min: {
      type: String,
      default: ''
    },
    max: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      hours,
      minutes,
      seconds
    };
  },
  methods: {
    handleSelecte (key, val) {
      this.$emit('change', {
        key,
        val
      });
    }
  }
};
</script>
