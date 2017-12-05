<template>
  <div class="layui-tab">
    <ul class="layui-tab-title">
      <li class="layui-this">权限分配</li>
    </ul>
    <ul class="layui-tab-title">
      <li>网站设置</li>
    </ul>
    <ul class="layui-tab-title">
      <li>网站设置</li>
    </ul>
    <div class="layui-tab-content">
      <div class="layui-tab-item layui-show">内容1</div>
      <div class="layui-tab-item">内容2</div>
      <div class="layui-tab-item">内容3</div>
      <div class="layui-tab-item">内容4</div>
      <div class="layui-tab-item">内容5</div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'layui-tab',
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
