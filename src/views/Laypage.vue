<template>
  <div>
    <lay-block title="总页数低于页码总数"></lay-block>
    <lay-pagination
      :total="70"
      :current-page.sync="currentPage"
      @current-change="currentChange"
    >
    </lay-pagination>
    <lay-block title="总页数大于页码总数"></lay-block>
    <lay-pagination
      :total="100"
      :current-page.sync="currentPage"
      @current-change="currentChange"
    >
    </lay-pagination>
    <lay-block title="自定义主题 - 颜色随意定义"></lay-block>
    <lay-pagination
      :total="100"
      :current-page.sync="currentPage"
      @current-change="currentChange"
      color="#1E9FFF"
    >
    </lay-pagination>
    <br />
    <lay-pagination
      :total="100"
      :current-page.sync="currentPage"
      @current-change="currentChange"
      theme="red"
    >
    </lay-pagination>
    <br />
    <lay-pagination
      :total="100"
      :current-page.sync="currentPage"
      @current-change="currentChange"
      color="#FFB800"
    >
    </lay-pagination>
    <lay-block title="自定义上一页、下一页文本"></lay-block>
    <lay-pagination
      :total="100"
      :current-page.sync="currentPage"
      @current-change="currentChange"
      theme="red"
      prevText="自定义prev"
      nextText="自定义next"
    >
    </lay-pagination>
    <lay-block title="只显示上一页、下一页"></lay-block>
    <lay-pagination
      :total="100"
      :current-page.sync="currentPage"
      @current-change="currentChange"
      :layout="['prev', 'next']"
    >
    </lay-pagination>
    <lay-block title="显示完整功能"></lay-block>
    <lay-pagination
      :total="100"
      :current-page.sync="currentPage"
      @current-change="currentChange"
      :layout="['total', 'prev', 'body', 'next', 'limit', 'page']"
    >
    </lay-pagination>
    <lay-block title="自定义排版"></lay-block>
    <lay-pagination
      :total="100"
      :current-page.sync="currentPage"
      @current-change="currentChange"
      :layout="['limit', 'prev', 'body', 'next']"
    >
    </lay-pagination>
    <br />
    <lay-pagination
      :total="100"
      :current-page.sync="currentPage"
      @current-change="currentChange"
      :layout="['prev', 'next', 'body']"
    >
    </lay-pagination>
    <br />
    <lay-pagination
      :total="100"
      :current-page.sync="currentPage"
      @current-change="currentChange"
      :layout="['body', 'total']"
    >
    </lay-pagination>
    <lay-block title="自定义每页条数的选择项"></lay-block>

    <lay-block>
      修改pageSize就可以了。
    </lay-block>
  </div>
</template>

<script>
export default {
  name: "Laypage",
  data() {
    return {
      currentPage: 1
    };
  }
};
</script>

<style scoped></style>
