<template>
  <div class="site-demo site-demo-body">
    <lay-block title="卡片面板" />
    <div style="padding: 20px; background-color: #F2F2F2;">
      <lay-row :space="20">
        <lay-col :md="6">
          <lay-card>
            <div slot="header">
              卡片面板
            </div>
            <div>
              <p>卡片式面板面板通常用于非白色背景色的主体内</p>
              <p>从而映衬出边框投影</p>
            </div>
          </lay-card>
        </lay-col>
        <lay-col :md="6">
          <lay-card>
            <div slot="header">
              卡片面板
            </div>
            <div>
              <p>结合 layui 的栅格系统</p>
              <p>轻松实现响应式布局</p>
            </div>
          </lay-card>
        </lay-col>
      </lay-row>
      <lay-row>
        <lay-card>
          <div slot="header">
            标题
          </div>
          <div>
            内容
          </div>
        </lay-card>
      </lay-row>
    </div>

    <lay-block
      title="常规折叠面板"
      style="margin-top: 30px;"
    />
    <lay-collapse>
      <lay-collapse-item :index="0">
        <template
          slot="title"
        >
          为什么JS社区大量采用未发布或者未广泛支持的语言特性？
        </template>
        <p>
          有不少其他答案说是因为JS太差。我下面的答案已经说了，这不是根本性的原因。但除此之外，我还要纠正一些对JS具体问题的误解。JS当初是被作为脚本语言设计的，所以某些问题并不是JS设计得差或者是JS设计者的失误。比如var的作用域问题，并不是“错误”，而是当时绝大部分脚本语言都是这样的，如perl/php/sh等。模块的问题也是，脚本语言几乎都没有模块/命名空间功能。弱类型、for-in之类的问题也是，只不过现在用那些老的脚本语言的人比较少，所以很多人都误以为是JS才有的坑。另外有人说JS是半残语言，满足不了开发需求，1999年就该死。半残这个嘛，就夸张了。JS虽然有很多问题，但是设计总体还是优秀的。——来自知乎@贺师俊
        </p>
      </lay-collapse-item>
      <lay-collapse-item :index="1">
        <template
          slot="title"
        >
          为什么前端工程师多不愿意用 Bootstrap 框架？
        </template>
        <p>
          因为不适合。如果希望开发长期的项目或者制作产品类网站，那么就需要实现特定的设计，为了在维护项目中可以方便地按设计师要求快速修改样式，肯定会逐步编写出各种业务组件、工具类，相当于为项目自行开发一套框架。——来自知乎@Kayo
        </p>
      </lay-collapse-item>
      <lay-collapse-item :index="2">
        <template
          slot="title"
        >
          vue-layui 更适合哪些开发者？
        </template>
        <p>
          layui是前后端开发者都比较喜欢的框架，由于各种不可描述的原因，有的老板要求前端开发者既要使用vue又要用layui，因此vue-layui诞生了。
        </p>
      </lay-collapse-item>
      <lay-collapse-item :index="3">
        <template
          slot="title"
        >
          贤心是男是女？
        </template>
        <p>反正他自己说是个男的。。。</p>
      </lay-collapse-item>
    </lay-collapse>

    <lay-block
      title="手风琴折叠"
      style="margin-top: 30px;"
    />
    <lay-collapse accordion>
      <lay-collapse-item :index="0">
        <template
          slot="title"
        >
          为什么JS社区大量采用未发布或者未广泛支持的语言特性？
        </template>
        <p>
          有不少其他答案说是因为JS太差。我下面的答案已经说了，这不是根本性的原因。但除此之外，我还要纠正一些对JS具体问题的误解。JS当初是被作为脚本语言设计的，所以某些问题并不是JS设计得差或者是JS设计者的失误。比如var的作用域问题，并不是“错误”，而是当时绝大部分脚本语言都是这样的，如perl/php/sh等。模块的问题也是，脚本语言几乎都没有模块/命名空间功能。弱类型、for-in之类的问题也是，只不过现在用那些老的脚本语言的人比较少，所以很多人都误以为是JS才有的坑。另外有人说JS是半残语言，满足不了开发需求，1999年就该死。半残这个嘛，就夸张了。JS虽然有很多问题，但是设计总体还是优秀的。——来自知乎@贺师俊
        </p>
      </lay-collapse-item>
      <lay-collapse-item :index="1">
        <template
          slot="title"
        >
          为什么前端工程师多不愿意用 Bootstrap 框架？
        </template>
        <p>
          因为不适合。如果希望开发长期的项目或者制作产品类网站，那么就需要实现特定的设计，为了在维护项目中可以方便地按设计师要求快速修改样式，肯定会逐步编写出各种业务组件、工具类，相当于为项目自行开发一套框架。——来自知乎@Kayo
        </p>
      </lay-collapse-item>
      <lay-collapse-item :index="2">
        <template
          slot="title"
        >
          vue-layui 更适合哪些开发者？
        </template>
        <p>
          layui是前后端开发者都比较喜欢的框架，由于各种不可描述的原因，有的老板要求前端开发者既要使用vue又要用layui，因此vue-layui诞生了。
        </p>
      </lay-collapse-item>
      <lay-collapse-item :index="3">
        <template
          slot="title"
        >
          贤心是男是女？
        </template>
        <p>反正他自己说是个男的。。。</p>
      </lay-collapse-item>
    </lay-collapse>

    <lay-block
      title="面板嵌套"
      style="margin-top: 30px;"
    />
    <lay-collapse accordion>
      <lay-collapse-item :index="0">
        <template
          slot="title"
        >
          文豪
        </template>
        <lay-collapse accordion>
          <lay-collapse-item :index="0">
            <template
              slot="title"
            >
              唐代
            </template>
            <lay-collapse accordion>
              <lay-collapse-item :index="0">
                <template
                  slot="title"
                >
                  杜甫
                </template>
                <p>伟大的诗人</p>
              </lay-collapse-item>
              <lay-collapse-item :index="1">
                <template
                  slot="title"
                >
                  李白
                </template>
                <p>据说是韩国人</p>
              </lay-collapse-item>
              <lay-collapse-item :index="2">
                <template
                  slot="title"
                >
                  王勃
                </template>
                <p>千古绝唱《滕王阁序》</p>
              </lay-collapse-item>
            </lay-collapse>
          </lay-collapse-item>
          <lay-collapse-item :index="1">
            <template
              slot="title"
            >
              宋代
            </template>
            <p>比如苏轼、李清照</p>
          </lay-collapse-item>
          <lay-collapse-item :index="2">
            <template
              slot="title"
            >
              当代
            </template>
            <p>比如贤心</p>
          </lay-collapse-item>
        </lay-collapse>
      </lay-collapse-item>
      <lay-collapse-item :index="1">
        <template
          slot="title"
        >
          科学家
        </template>
        <p>伟大的科学家</p>
      </lay-collapse-item>
      <lay-collapse-item :index="2">
        <template
          slot="title"
        >
          艺术家
        </template>
        <p>浑身散发着艺术细胞</p>
      </lay-collapse-item>
    </lay-collapse>

    <br>
    <p>支持无限嵌套，应用场景非常多！</p>
  </div>
</template>

<script>
export default {
  name: 'Panel'
};
</script>

<style scoped>
.site-demo {
  margin: 15px;
}
</style>
