# BaseCard 基础卡片

<!-- {.md} -->

---

<!-- {.md} -->

## 基础用法

<!-- {.md} -->

使用`slot="content"` 插槽来自定义卡片上部内容，
使用`slot="footer"` 插槽来自定义卡片底部内容。

<lay-block>
    测试
</lay-block>

::: demo

```html
<template>
  <lay-block :id="aaa">
    测试
  </lay-block>
</template>

<style>
  .demo-container {
      overflow: hidden;
  }

  .docs-demo {
      background: #1f1d20;
      color: #fff;
  }
</style>
```

:::

## Attributes

<!-- {.md} -->

| 参数          | 说明             | 类型     | 可选值                             | 默认值    |
| ------------- | ---------------- | -------- | ---------------------------------- | --------- |
| themeType     | 卡片主题色       | `String` | `default | primary`                | `default` |

