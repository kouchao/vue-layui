<template>
  <div>
    <lay-block title="引用区块 - 默认风格" />
    <lay-block>这个貌似不用多介绍，因为你已经在太多的地方都看到</lay-block>

    <lay-block title="引用区块 - 一般风格" />
    <lay-block theme="nm">
      <p>猿强，则国强。国强，则猿更强！</p>
      <p>——孟子（好吧。。这是贤心大大说的）</p>
    </lay-block>

    <lay-block title="字段集区块" />

    <lay-block title="爱好">
      你可以在这里放任何内容，比如表单神马的
    </lay-block>

    <lay-block title="带标题的横线" />
    内容区域

    <lay-block title="分割线" />

    默认分割线
    <LayLine />
    赤色分割线
    <LayLine theme="red" />
    橙色分割线
    <LayLine theme="orange" />
    墨绿分割线
    <LayLine theme="green" />
    青色分割线
    <LayLine theme="cyan" />
    蓝色分割线
    <LayLine theme="blue" />
    黑色分割线
    <LayLine theme="black" />
    灰色分割线
    <LayLine theme="gray" />

    <lay-block title="纯圆角" />
    <lay-block theme="nm">
      <p>border-radius: 100%;</p>
      <p>——这句是我说的</p>
    </lay-block>
  </div>
</template>

<script>
export default {
  name: 'Auxiliar'
};
</script>

<style scoped></style>
