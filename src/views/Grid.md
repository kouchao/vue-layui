<lay-block>注意：下述演示中的颜色只是做一个区分作用，并非栅格内置。</lay-block>

<lay-block title="始终等比例水平排列"/>

<lay-row>
  <lay-col :xs="6">
    <div class="grid-demo grid-demo-bg1">6/12</div>
  </lay-col>
  <lay-col :xs="6">
    <div class="grid-demo">6/12</div>
  </lay-col>
</lay-row>
<lay-row>
  <lay-col :xs="3">
    <div class="grid-demo grid-demo-bg1">3/12</div>
  </lay-col>
  <lay-col :xs="3">
    <div class="grid-demo">3/12</div>
  </lay-col>
  <lay-col :xs="3">
    <div class="grid-demo grid-demo-bg1">3/12</div>
  </lay-col>
  <lay-col :xs="3">
    <div class="grid-demo">3/12</div>
  </lay-col>
</lay-row>

::: demo

```html
  <lay-row>
    <lay-col :xs="6">
      <div class="grid-demo grid-demo-bg1">6/12</div>
    </lay-col>
    <lay-col :xs="6">
      <div class="grid-demo">6/12</div>
    </lay-col>
  </lay-row>
  <lay-row>
    <lay-col :xs="3">
      <div class="grid-demo grid-demo-bg1">3/12</div>
    </lay-col>
    <lay-col :xs="3">
      <div class="grid-demo">3/12</div>
    </lay-col>
    <lay-col :xs="3">
      <div class="grid-demo grid-demo-bg1">3/12</div>
    </lay-col>
    <lay-col :xs="3">
      <div class="grid-demo">3/12</div>
    </lay-col>
  </lay-row>
```

:::

<lay-block title="移动设备、桌面端的组合响应式展现"></lay-block>
<lay-row>
  <lay-col :xs="12" :md="8">
    <div class="grid-demo grid-demo-bg1">移动：12/12、桌面：8/12</div>
  </lay-col>
  <lay-col :xs="6" :md="4">
    <div class="grid-demo">移动：6/12、桌面：4/12</div>
  </lay-col>
  <lay-col :xs="6" :md="12">
    <div class="grid-demo grid-demo-bg2">移动：6/12、桌面：12/12</div>
  </lay-col>
</lay-row>

::: demo

```html
  <lay-row>
    <lay-col :xs="12" :md="8">
      <div class="grid-demo grid-demo-bg1">移动：12/12、桌面：8/12</div>
    </lay-col>
    <lay-col :xs="6" :md="4">
      <div class="grid-demo">移动：6/12、桌面：4/12</div>
    </lay-col>
    <lay-col :xs="6" :md="12">
      <div class="grid-demo grid-demo-bg2">移动：6/12、桌面：12/12</div>
    </lay-col>
  </lay-row>
```

:::

<lay-block title="移动设备、平板、桌面端的复杂组合响应式展现"></lay-block>

<lay-row>
  <lay-col :xs="6" :sm="6" :md="4">
    <div class="grid-demo grid-demo-bg1">
      移动：6/12 | 平板：6/12 | 桌面：4/12
    </div>
  </lay-col>
  <lay-col :xs="6" :sm="6" :md="4">
    <div class="grid-demo layui-bg-red">
      移动：6/12 | 平板：6/12 | 桌面：4/12
    </div>
  </lay-col>
  <lay-col :xs="4" :sm="12" :md="4">
    <div class="grid-demo layui-bg-blue">
      移动：4/12 | 平板：12/12 | 桌面：4/12
    </div>
  </lay-col>
  <lay-col :xs="4" :sm="7" :md="8">
    <div class="grid-demo layui-bg-green">
      移动：4/12 | 平板：7/12 | 桌面：8/12
    </div>
  </lay-col>
  <lay-col :xs="4" :sm="5" :md="4">
    <div class="grid-demo layui-bg-black">
      移动：4/12 | 平板：5/12 | 桌面：4/12
    </div>
  </lay-col>
</lay-row>

::: demo

```html
<lay-row>
  <lay-col :xs="6" :sm="6" :md="4">
    <div class="grid-demo grid-demo-bg1">
      移动：6/12 | 平板：6/12 | 桌面：4/12
    </div>
  </lay-col>
  <lay-col :xs="6" :sm="6" :md="4">
    <div class="grid-demo layui-bg-red">
      移动：6/12 | 平板：6/12 | 桌面：4/12
    </div>
  </lay-col>
  <lay-col :xs="4" :sm="12" :md="4">
    <div class="grid-demo layui-bg-blue">
      移动：4/12 | 平板：12/12 | 桌面：4/12
    </div>
  </lay-col>
  <lay-col :xs="4" :sm="7" :md="8">
    <div class="grid-demo layui-bg-green">
      移动：4/12 | 平板：7/12 | 桌面：8/12
    </div>
  </lay-col>
  <lay-col :xs="4" :sm="5" :md="4">
    <div class="grid-demo layui-bg-black">
      移动：4/12 | 平板：5/12 | 桌面：4/12
    </div>
  </lay-col>
</lay-row>
```

:::

<lay-block title="常规布局：从小屏幕堆叠到桌面水平排列"></lay-block>

<lay-row>
  <lay-col :md="1">
    <div class="grid-demo grid-demo-bg1">1/12</div>
  </lay-col>
  <lay-col :md="1">
    <div class="grid-demo">1/12</div>
  </lay-col>
  <lay-col :md="1">
    <div class="grid-demo grid-demo-bg1">1/12</div>
  </lay-col>
  <lay-col :md="1">
    <div class="grid-demo">1/12</div>
  </lay-col>
  <lay-col :md="1">
    <div class="grid-demo grid-demo-bg1">1/12</div>
  </lay-col>
  <lay-col :md="1">
    <div class="grid-demo">1/12</div>
  </lay-col>
  <lay-col :md="1">
    <div class="grid-demo grid-demo-bg1">1/12</div>
  </lay-col>
  <lay-col :md="1">
    <div class="grid-demo">1/12</div>
  </lay-col>
  <lay-col :md="1">
    <div class="grid-demo grid-demo-bg1">1/12</div>
  </lay-col>
  <lay-col :md="1">
    <div class="grid-demo">1/12</div>
  </lay-col>
  <lay-col :md="1">
    <div class="grid-demo grid-demo-bg1">1/12</div>
  </lay-col>
  <lay-col :md="1">
    <div class="grid-demo">1/12</div>
  </lay-col>
</lay-row>

<lay-row>
  <lay-col :md="9">
    <div class="grid-demo grid-demo-bg1">75%</div>
  </lay-col>
  <lay-col :md="3">
    <div class="grid-demo">25%</div>
  </lay-col>
</lay-row>
<lay-row>
  <lay-col :md="4">
    <div class="grid-demo grid-demo-bg1">33.33%</div>
  </lay-col>
  <lay-col :md="4">
    <div class="grid-demo">33.33%</div>
  </lay-col>
  <lay-col :md="4">
    <div class="grid-demo grid-demo-bg1">33.33%</div>
  </lay-col>
</lay-row>
<lay-row>
  <lay-col :md="6">
    <div class="grid-demo grid-demo-bg1">50%</div>
  </lay-col>
  <lay-col :md="6">
    <div class="grid-demo">50%</div>
  </lay-col>
</lay-row>

::: demo

```html
<lay-row>
  <lay-col :md="1">
    <div class="grid-demo grid-demo-bg1">1/12</div>
  </lay-col>
  <lay-col :md="1">
    <div class="grid-demo">1/12</div>
  </lay-col>
  <lay-col :md="1">
    <div class="grid-demo grid-demo-bg1">1/12</div>
  </lay-col>
  <lay-col :md="1">
    <div class="grid-demo">1/12</div>
  </lay-col>
  <lay-col :md="1">
    <div class="grid-demo grid-demo-bg1">1/12</div>
  </lay-col>
  <lay-col :md="1">
    <div class="grid-demo">1/12</div>
  </lay-col>
  <lay-col :md="1">
    <div class="grid-demo grid-demo-bg1">1/12</div>
  </lay-col>
  <lay-col :md="1">
    <div class="grid-demo">1/12</div>
  </lay-col>
  <lay-col :md="1">
    <div class="grid-demo grid-demo-bg1">1/12</div>
  </lay-col>
  <lay-col :md="1">
    <div class="grid-demo">1/12</div>
  </lay-col>
  <lay-col :md="1">
    <div class="grid-demo grid-demo-bg1">1/12</div>
  </lay-col>
  <lay-col :md="1">
    <div class="grid-demo">1/12</div>
  </lay-col>
</lay-row>

<lay-row>
  <lay-col :md="9">
    <div class="grid-demo grid-demo-bg1">75%</div>
  </lay-col>
  <lay-col :md="3">
    <div class="grid-demo">25%</div>
  </lay-col>
</lay-row>
<lay-row>
  <lay-col :md="4">
    <div class="grid-demo grid-demo-bg1">33.33%</div>
  </lay-col>
  <lay-col :md="4">
    <div class="grid-demo">33.33%</div>
  </lay-col>
  <lay-col :md="4">
    <div class="grid-demo grid-demo-bg1">33.33%</div>
  </lay-col>
</lay-row>
<lay-row>
  <lay-col :md="6">
    <div class="grid-demo grid-demo-bg1">50%</div>
  </lay-col>
  <lay-col :md="6">
    <div class="grid-demo">50%</div>
  </lay-col>
</lay-row>
```

:::

<lay-block title="列间隔"></lay-block>

<lay-row :space="1">
  <lay-col :md="3">
    <div class="grid-demo grid-demo-bg1">1/4</div>
  </lay-col>
  <lay-col :md="3">
    <div class="grid-demo">1/4</div>
  </lay-col>
  <lay-col :md="3">
    <div class="grid-demo grid-demo-bg1">1/4</div>
  </lay-col>
  <lay-col :md="3">
    <div class="grid-demo">1/4</div>
  </lay-col>
</lay-row>

<lay-row :space="5">
  <lay-col :md="4">
    <div class="grid-demo grid-demo-bg1">1/3</div>
  </lay-col>
  <lay-col :md="4">
    <div class="grid-demo">1/3</div>
  </lay-col>
  <lay-col :md="4">
    <div class="grid-demo grid-demo-bg1">1/3</div>
  </lay-col>
</lay-row>

<lay-row :space="10">
  <lay-col :md="9">
    <div class="grid-demo grid-demo-bg1">9/12</div>
  </lay-col>
  <lay-col :md="3">
    <div class="grid-demo">3/12</div>
  </lay-col>
</lay-row>

<lay-row :space="15">
  <lay-col :md="7">
    <div class="grid-demo grid-demo-bg1">7/12</div>
  </lay-col>
  <lay-col :md="5">
    <div class="grid-demo">5/12</div>
  </lay-col>
</lay-row>

<lay-row :space="30">
  <lay-col :md="7">
    <div class="grid-demo grid-demo-bg1">7/12</div>
  </lay-col>
  <lay-col :md="5">
    <div class="grid-demo">5/12</div>
  </lay-col>
</lay-row>

::: demo

```html
<lay-row :space="1">
  <lay-col :md="3">
    <div class="grid-demo grid-demo-bg1">1/4</div>
  </lay-col>
  <lay-col :md="3">
    <div class="grid-demo">1/4</div>
  </lay-col>
  <lay-col :md="3">
    <div class="grid-demo grid-demo-bg1">1/4</div>
  </lay-col>
  <lay-col :md="3">
    <div class="grid-demo">1/4</div>
  </lay-col>
</lay-row>
<lay-row :space="5">
  <lay-col :md="4">
    <div class="grid-demo grid-demo-bg1">1/3</div>
  </lay-col>
  <lay-col :md="4">
    <div class="grid-demo">1/3</div>
  </lay-col>
  <lay-col :md="4">
    <div class="grid-demo grid-demo-bg1">1/3</div>
  </lay-col>
</lay-row>
<lay-row :space="10">
  <lay-col :md="9">
    <div class="grid-demo grid-demo-bg1">9/12</div>
  </lay-col>
  <lay-col :md="3">
    <div class="grid-demo">3/12</div>
  </lay-col>
</lay-row>
<lay-row :space="15">
  <lay-col :md="7">
    <div class="grid-demo grid-demo-bg1">7/12</div>
  </lay-col>
  <lay-col :md="5">
    <div class="grid-demo">5/12</div>
  </lay-col>
</lay-row>
<lay-row :space="30">
  <lay-col :md="7">
    <div class="grid-demo grid-demo-bg1">7/12</div>
  </lay-col>
  <lay-col :md="5">
    <div class="grid-demo">5/12</div>
  </lay-col>
</lay-row>
```

:::


<lay-block title="列偏移"></lay-block>

<lay-row>
  <lay-col :md="4">
    <div class="grid-demo grid-demo-bg1">4/12</div>
  </lay-col>
  <lay-col :md="4" :offset="4">
    <div class="grid-demo">偏移4列</div>
  </lay-col>
  <lay-col :md="1" :offset="5">
    <div class="grid-demo grid-demo-bg1">偏移5列</div>
  </lay-col>
  <lay-col :md="1">
    <div class="grid-demo">不偏移</div>
  </lay-col>
</lay-row>

<lay-row>
  <lay-col :md="3" :offset="3">
    <div class="grid-demo grid-demo-bg1">偏移3列</div>
  </lay-col>
  <lay-col :md="3" :offset="1">
    <div class="grid-demo">偏移1列</div>
  </lay-col>
</lay-row>


::: demo

```html
<lay-row>
  <lay-col :md="4">
    <div class="grid-demo grid-demo-bg1">4/12</div>
  </lay-col>
  <lay-col :md="4" :offset="4">
    <div class="grid-demo">偏移4列</div>
  </lay-col>
  <lay-col :md="1" :offset="5">
    <div class="grid-demo grid-demo-bg1">偏移5列</div>
  </lay-col>
  <lay-col :md="1">
    <div class="grid-demo">不偏移</div>
  </lay-col>
</lay-row>

<lay-row>
  <lay-col :md="3" :offset="3">
    <div class="grid-demo grid-demo-bg1">偏移3列</div>
  </lay-col>
  <lay-col :md="3" :offset="1">
    <div class="grid-demo">偏移1列</div>
  </lay-col>
</lay-row>
```

:::

<lay-block title="栅格嵌套"></lay-block>

<lay-row class="layui-row">
  <lay-col :md="5">
    <lay-row class="grid-demo">
      <lay-col cla :md="3">
        <div class="grid-demo grid-demo-bg1">内部列</div>
      </lay-col>
      <lay-col :md="9">
        <div class="grid-demo grid-demo-bg2">内部列</div>
      </lay-col>
      <lay-col :md="12">
        <div class="grid-demo grid-demo-bg3">内部列</div>
      </lay-col>
    </lay-row>
  </lay-col>
  <lay-col :md="7">
    <lay-row class="grid-demo grid-demo-bg1">
      <lay-col :md="12">
        <div class="grid-demo">内部列</div>
      </lay-col>
      <lay-col :md="9">
        <div class="grid-demo grid-demo-bg2">内部列</div>
      </lay-col>
      <lay-col :md="3">
        <div class="grid-demo grid-demo-bg3">内部列</div>
      </lay-col>
    </lay-row>
  </lay-col>
</lay-row>

::: demo

```html
<lay-row class="layui-row">
  <lay-col :md="5">
    <lay-row class="grid-demo">
      <lay-col cla :md="3">
        <div class="grid-demo grid-demo-bg1">内部列</div>
      </lay-col>
      <lay-col :md="9">
        <div class="grid-demo grid-demo-bg2">内部列</div>
      </lay-col>
      <lay-col :md="12">
        <div class="grid-demo grid-demo-bg3">内部列</div>
      </lay-col>
    </lay-row>
  </lay-col>
  <lay-col :md="7">
    <lay-row class="grid-demo grid-demo-bg1">
      <lay-col :md="12">
        <div class="grid-demo">内部列</div>
      </lay-col>
      <lay-col :md="9">
        <div class="grid-demo grid-demo-bg2">内部列</div>
      </lay-col>
      <lay-col :md="3">
        <div class="grid-demo grid-demo-bg3">内部列</div>
      </lay-col>
    </lay-row>
  </lay-col>
</lay-row>
```

:::

<lay-block title="流体容器（宽度自适应，不固定）"></lay-block>

<lay-container :fluid="true">
  <lay-row>
    <lay-col :sm="3">
      <div class="grid-demo grid-demo-bg1">25%</div>
    </lay-col>
    <lay-col :sm="3">
      <div class="grid-demo">25%</div>
    </lay-col>
    <lay-col :sm="3">
      <div class="grid-demo grid-demo-bg1">25%</div>
    </lay-col>
    <lay-col :sm="3">
      <div class="grid-demo">25%</div>
    </lay-col>
  </lay-row>
</lay-container>

::: demo

```html
<lay-container :fluid="true">
  <lay-row>
    <lay-col :sm="3">
      <div class="grid-demo grid-demo-bg1">25%</div>
    </lay-col>
    <lay-col :sm="3">
      <div class="grid-demo">25%</div>
    </lay-col>
    <lay-col :sm="3">
      <div class="grid-demo grid-demo-bg1">25%</div>
    </lay-col>
    <lay-col :sm="3">
      <div class="grid-demo">25%</div>
    </lay-col>
  </lay-row>
</lay-container>
```

:::


<lay-block title="row 属性"></lay-block>
<!-- {.md} -->

| 参数 | 说明 | 类型 | 可选值 | 默认值 
| --- | --- | --- | --- | --- |
| space | 列间隔 | `Number` | `0, 1, 3, 5, 8, 10, 12, 15, 18, 20, 22, 28, 30` | `0` |


<lay-block title="col 属性"></lay-block>
<!-- {.md} -->

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| xs | 屏幕<768px | `Number` | -- | `0` |
| sm | 屏幕≥768px | `Number` | -- | `0` |
| md | 屏幕≥992px | `Number` | -- | `0` |
| lg | 屏幕≥1200px | `Number` | -- | `0` |
| offset | 列偏移 | `Number` | -- | `0` |

<script>
export default {
  name: "Grid"
};
</script>

<style scoped>
.grid-demo {
  padding: 10px;
  line-height: 50px;
  text-align: center;
  background-color: #79c48c;
  color: #fff;
}

.grid-demo-bg1 {
  background-color: #63ba79;
}

.grid-demo-bg2 {
  background-color: #49a761;
}

.grid-demo-bg3 {
  background-color: #38814a;
}

.site-demo .layui-row {
  margin-bottom: 10px;
}
</style>
