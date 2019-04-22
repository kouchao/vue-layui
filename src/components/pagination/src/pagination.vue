<template>
  <div class="layui-box layui-laypage layui-laypage-default">
    <template v-for="lay in layout">
      <span
        v-if="lay == 'total'"
        :key="lay"
        class="layui-laypage-count"
      >共 {{ total }} 条</span>
      <a
        v-if="lay == 'prev'"
        :key="lay"
        href="javascript:;"
        class="layui-laypage-prev "
        :class="{
          'layui-disabled': currentPage <= 1
        }"
        @click="handlePrev"
      >
        {{ prevText }}
      </a>

      <template v-if="lay == 'body'">
        <p
          v-if="pages.length > pagerCount"
          :key="lay"
          style="display: inline-block"
        >
          <a
            v-if="currentPage != 1"
            href="javascript:;"
            @click="handleClick(1)"
          >1</a>
          <span
            v-if="currentPage > 1 + (pagerCount - 1) / 2"
            class="layui-laypage-spr"
          >…</span>

          <template v-for="page in pages">
            <a
              v-if="
                page != currentPage &&
                  page > 1 &&
                  page < pages.length &&
                  (page > currentPage - (pagerCount - 1) / 2 &&
                  page < currentPage + (pagerCount - 1) / 2)
              "
              :key="page"
              href="javascript:;"
              @click="handleClick(page)"
            >{{ page }}</a>
            <span
              v-if="page == currentPage"
              :key="page"
              class="layui-laypage-curr"
            >
              <em
                class="layui-laypage-em"
                :class="'layui-bg-' + theme"
                :style="color ? 'background-color: ' + color : ''"
              />
              <em>{{ page }}</em>
            </span>
          </template>
          <span
            v-if="currentPage < pages.length - (pagerCount - 1) / 2"
            class="layui-laypage-spr"
          >…</span>
          <a
            v-if="currentPage != pages.length"
            href="javascript:;"
            @click="handleClick(pages.length)"
          >{{ pages.length }}</a>
        </p>
        <p
          v-else
          :key="lay"
          style="display: inline-block"
        >
          <template v-for="page in pages">
            <a
              v-if="page != currentPage"
              :key="page"
              href="javascript:;"
              @click="handleClick(page)"
            >{{ page }}</a>
            <span
              v-if="page == currentPage"
              :key="page"
              class="layui-laypage-curr"
            >
              <em
                class="layui-laypage-em"
                :class="'layui-bg-' + theme"
                :style="color ? 'background-color: ' + color : ''"
              />
              <em>{{ page }}</em>
            </span>
          </template>
        </p>
      </template>

      <a
        v-if="lay == 'next'"
        :key="lay"
        href="javascript:;"
        class="layui-laypage-next"
        :class="{
          'layui-disabled': currentPage >= pages.length
        }"
        @click="handleNext"
      >
        {{ nextText }}
      </a>

      <span
        v-if="lay == 'limit'"
        :key="lay"
        class="layui-laypage-limits"
      >
        <select
          :value="size"
          @change="handleChange"
        >
          <option
            v-for="num in limits"
            :key="num"
            :value="num"
          >{{ num }} 条/页</option>
        </select>
      </span>

      <span
        v-if="lay == 'page'"
        :key="lay"
        class="layui-laypage-skip"
      >
        到第<input
          type="text"
          :value="currentPage"
          class="layui-input"
          @change="handleChangePage"
        >页
      </span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'LayPagination',
  props: {
    total: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default () {
        return 10;
      }
    },
    currentPage: {
      type: Number,
      default () {
        return 1;
      }
    },
    prevText: {
      type: String,
      default () {
        return '上一页';
      }
    },
    nextText: {
      type: String,
      default () {
        return '下一页';
      }
    },
    theme: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    pagerCount: {
      type: Number,
      default () {
        return 7;
      }
    },
    layout: {
      type: Array,
      default () {
        return ['prev', 'body', 'next'];
      }
    },
    limits: {
      type: Array,
      default () {
        return [10, 20, 30];
      }
    }
  },
  data () {
    return {
      pages: [],
      size: 0
    };
  },
  watch: {
    total () {
      this.changePages();
    },
    pageSize () {
      this.changePages();
    }
  },
  mounted () {
    this.size = this.pageSize;
    this.changePages();
  },
  methods: {
    changePages () {
      const length = Math.ceil(this.total / this.size);
      const pages = [];
      for (let i = 1; i <= length; i++) {
        pages.push(i);
      }
      this.pages = pages;
    },
    handleChangePage (e) {
      let page = parseInt(e.target.value) || 1;
      page = page > this.pages.length ? this.pages.length : page;
      this.handleClick(page);
    },
    handleChange (e) {
      this.size = parseInt(e.target.value);

      this.changePages();
      this.$emit('update:pageSize', this.size);
      this.$emit('size-change', this.size);
    },
    handleClick (page) {
      this.$emit('update:currentPage', page);
      this.$emit('current-change', page);
    },
    handleNext () {
      const { currentPage, pages, handleClick } = this;
      const page = currentPage + 1;
      if (currentPage < pages.length) {
        handleClick(page);
      }
    },
    handlePrev () {
      const { currentPage, handleClick } = this;
      const page = currentPage - 1;
      if (currentPage > 1) {
        handleClick(page);
      }
    }
  }
};
</script>

<style scoped></style>
