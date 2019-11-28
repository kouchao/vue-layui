<template>
  <div
    class="site-anim"
    style="text-align: center;padding-top: 50px;"
  >
    <img
      width="300"
      src="https://cos.jskou.com/vue-layui-logo.png"
      alt=""
    >
    <div style="font-size: 50px; line-height: 50px">
      vue-layui
    </div>
    <div
      style="font-size: 30px; line-height: 30px; padding: 10px 10px 30px; color: #666"
    >
      一个基于layui样式的vue组件库
    </div>
    <div style="display: flex; align-items: center;justify-content: center">
      <a
        href="https://github.com/kouchao/vue-layui"
        class="demo-github"
        target="_blank"
      >
        <span>github</span>
      </a>

      <a
        href="https://github.com/kouchao/vue-layui"
        class="demo-github"
        target="_blank"
      >
        <i class="layui-icon layui-icon-rate-solid" />
        <span>star {{ star }}</span>
      </a>
    </div>

    <div class="demo-introduce">
      <div class="demo-box">
        <div class="demo-box-title">
          还不是很完美
        </div>
        <div>
          <p>他还是一个demo级别的组件库</p>
          <p>正在一步步的走向健壮</p>
          <p>还需要努力</p>
          <p>当然这也需要时间</p>
        </div>
      </div>
      <div class="demo-box">
        <div class="demo-box-title">
          关注的人也很少
        </div>
        <div>
          <p>可能关注的人其实并没有</p>
          <p>可以看到只有{{ star }}Star</p>
          <p>但是这并不重要</p>
          <p>会越来越多越来越好</p>
        </div>
      </div>
      <div class="demo-box">
        <div class="demo-box-title">
          一个人的开发
        </div>
        <div>
          <p>需要更多地人来帮助</p>
          <p>只有短暂的下班时间</p>
          <p>能力虽然不大</p>
          <p>好在大家都在一起加油</p>
        </div>
      </div>
    </div>

    <!--layui-tabs-->
    <!--<layui-tabs>-->
    <!--<layui-tab-pane name="tab1">tab1</layui-tab-pane>-->
    <!--<layui-tab-pane name="tab2">tab2</layui-tab-pane>-->
    <!--</layui-tabs>-->
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data: function () {
    return {
      star: 0
    };
  },
  created: function () {
    this.getStar();
  },
  methods: {
    async getStar () {
      const { data } = await axios(
        'https://api.github.com/repos/kouchao/vue-layui'
      );
      this.star = data.stargazers_count;
    },
    selectChange: function (val) {
      console.log(`change: val=${val}`);
    }
  }
};
</script>

<style scoped>
.demo-introduce {
  border-bottom: 1px solid #eaecef;
  border-top: 1px solid #eaecef;
  padding: 20px 0;
  display: flex;
  width: 900px;
  margin: 30px auto 0;
}

.demo-box {
  width: 240px;
  padding: 0 30px;
}

.demo-box-title {
  font-size: 18px;
  margin-bottom: 5px;
}

.demo-github {
  padding: 5px 10px;
  border: 1px solid #eee;
  display: flex;
  justify-content: center;
}

.demo-github + .demo-github {
  margin-left: 10px;
}

.demo-github span {
  padding-left: 10px;
}

@-webkit-keyframes site-zfj {
  0% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
  }
  10% {
    opacity: 0.8;
    -webkit-transform: translate3d(-100px, 0px, 0) rotate(10deg) scale(0.7);
  }
  35% {
    opacity: 0.6;
    -webkit-transform: translate3d(100px, 0px, 0) rotate(30deg) scale(0.4);
  }
  50% {
    opacity: 0.4;
    -webkit-transform: translate3d(0, 0, 0) rotate(360deg) scale(0);
  }
  80% {
    opacity: 0.2;
    -webkit-transform: translate3d(0, 0, 0) rotate(720deg) scale(1);
  }
  90% {
    opacity: 0.1;
    -webkit-transform: translate3d(0, 0, 0) rotate(3600deg) scale(6);
  }
  100% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0) rotate(3600deg) scale(1);
  }
}

@keyframes site {
  0% {
    opacity: 1;
    transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
  }
  10% {
    opacity: 0.8;
    transform: translate3d(-100px, 0px, 0) rotate(10deg) scale(0.7);
  }
  35% {
    opacity: 0.6;
    transform: translate3d(100px, 0px, 0) rotate(30deg) scale(0.4);
  }
  50% {
    opacity: 0.4;
    transform: translate3d(0, 0, 0) rotate(360deg) scale(0);
  }
  80% {
    opacity: 0.2;
    transform: translate3d(0, 0, 0) rotate(720deg) scale(1);
  }
  90% {
    opacity: 0.1;
    transform: translate3d(0, 0, 0) rotate(3600deg) scale(6);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0) rotate(3600deg) scale(1);
  }
}

.site-anim img {
  -webkit-animation-name: site;
  animation-name: site;
  -webkit-animation-duration: 5s;
  animation-duration: 5s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
}

i {
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
}
</style>
