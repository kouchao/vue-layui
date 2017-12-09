<template>
  <div class="layui-tab">
    <!--<ul class="layui-tab-title">-->
      <!--<li class="layui-this">权限分配</li>-->
      <!--<li>网站设置</li>-->
      <!--<li>网站设置</li>-->
    <!--</ul>-->
    <!--<div class="layui-tab-content">-->
      <!--<div class="layui-tab-item layui-show">内容1</div>-->
      <!--<div class="layui-tab-item">内容2</div>-->
      <!--<div class="layui-tab-item">内容3</div>-->
      <!--<div class="layui-tab-item">内容4</div>-->
      <!--<div class="layui-tab-item">内容5</div>-->
    <!--</div>-->
    <!--{{$slots.default}}-->
  </div>

</template>

<script>
  export default {
    name: 'layui-tabs',
    props: {
      item: {
        item: String,
        default: 'default'
      },
      size: String,
      radius: Boolean,
      icon: String,
      right: Boolean,
      type: String
    },
    created: function () {
      console.log(this.$slots.default)
    }
  }
</script>

<style scoped>
  i.right{
    padding-left: 4px;
  }

  i.left{
    padding-right: 4px;
  }

</style>
