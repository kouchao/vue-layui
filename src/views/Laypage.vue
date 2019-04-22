<template>
  <div>
    <lay-block title="总页数低于页码总数" />
    <lay-pagination
      :total="70"
      :current-page.sync="currentPage"
      @current-change="currentChange"
    />
    <lay-block title="总页数大于页码总数" />
    <lay-pagination
      :total="100"
      :current-page.sync="currentPage"
      @current-change="currentChange"
    />
    <lay-block title="自定义主题 - 颜色随意定义" />
    <lay-pagination
      :total="100"
      :current-page.sync="currentPage"
      color="#1E9FFF"
      @current-change="currentChange"
    />
    <br>
    <lay-pagination
      :total="100"
      :current-page.sync="currentPage"
      theme="red"
      @current-change="currentChange"
    />
    <br>
    <lay-pagination
      :total="100"
      :current-page.sync="currentPage"
      color="#FFB800"
      @current-change="currentChange"
    />
    <lay-block title="自定义上一页、下一页文本" />
    <lay-pagination
      :total="100"
      :current-page.sync="currentPage"
      theme="red"
      prev-text="自定义prev"
      next-text="自定义next"
      @current-change="currentChange"
    />
    <lay-block title="只显示上一页、下一页" />
    <lay-pagination
      :total="100"
      :current-page.sync="currentPage"
      :layout="['prev', 'next']"
      @current-change="currentChange"
    />
    <lay-block title="显示完整功能" />
    <lay-pagination
      :total="100"
      :current-page.sync="currentPage"
      :layout="['total', 'prev', 'body', 'next', 'limit', 'page']"
      @current-change="currentChange"
    />
    <lay-block title="自定义排版" />
    <lay-pagination
      :total="100"
      :current-page.sync="currentPage"
      :layout="['limit', 'prev', 'body', 'next']"
      @current-change="currentChange"
    />
    <br>
    <lay-pagination
      :total="100"
      :current-page.sync="currentPage"
      :layout="['prev', 'next', 'body']"
      @current-change="currentChange"
    />
    <br>
    <lay-pagination
      :total="100"
      :current-page.sync="currentPage"
      :layout="['body', 'total']"
      @current-change="currentChange"
    />
    <lay-block title="自定义每页条数的选择项" />

    <lay-block>
      修改pageSize就可以了。
    </lay-block>
  </div>
</template>

<script>
export default {
  name: 'Laypage',
  data () {
    return {
      currentPage: 1
    };
  },
  methods: {
    currentChange () {}
  }
};
</script>

<style scoped></style>
