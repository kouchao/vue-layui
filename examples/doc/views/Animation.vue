<template>
  <div>
    <lay-block>
      展示采用layui默认样式，实际应用也可以参照
      <a href="https://cn.vuejs.org/v2/api/#transition">transition 组件文档 </a>
    </lay-block>
    <div style="text-align: center; margin-top: 50px;">
      <div
        class="layui-anim"
        :class="demo.name"
      >
        {{ demo.title }}
      </div>
      <div class="code">
        {{ demo.name }}
      </div>
      <div style="margin-top: 50px;">
        <lay-button
          v-for="item in classNames"
          :key="item.title"
          @click="handlerClick(item)"
        >
          {{ item.title }}
        </lay-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Animation',
  data () {
    return {
      demo: {
        name: 'demo',
        title: '点击按钮展示'
      },

      classNames: [
        {
          name: 'layui-anim-up',
          title: '从最底部往上滑入'
        },
        {
          name: 'layui-anim-upbit',
          title: '微微往上滑入'
        },
        {
          name: 'layui-anim-scale',
          title: '平滑放大'
        },
        {
          name: 'layui-anim-scaleSpring',
          title: '弹簧式放大'
        },
        {
          name: 'layui-anim-fadein',
          title: '渐现'
        },
        {
          name: 'layui-anim-fadeout',
          title: '渐隐'
        },
        {
          name: 'layui-anim-rotate',
          title: '360度旋转'
        },
        {
          name: 'layui-anim-rotate layui-anim-loop',
          title: '循环动画'
        }
      ]
    };
  },
  methods: {
    handlerClick (item) {
      this.demo = item;
    }
  }
};
</script>

<style scoped>
.layui-anim {
  width: 150px;
  height: 150px;
  line-height: 150px;
  margin: 0 auto 10px;
  text-align: center;
  background-color: #009688;
  cursor: pointer;
  color: #fff;
  border-radius: 50%;
}
</style>
