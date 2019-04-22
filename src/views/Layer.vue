<template>
  <div>
    <lay-block>体验一下Layer。</lay-block>
    <lay-form>
      <lay-form-item label="遮罩">
        <lay-switch v-model="modal" />
      </lay-form-item>
      <lay-form-item label="皮肤">
        <lay-radio
          v-model="skin"
          label="page"
        >
          默认
        </lay-radio>
        <lay-radio
          v-model="skin"
          label="molv"
        >
          墨绿
        </lay-radio>
        <lay-radio
          v-model="skin"
          label="lan"
        >
          深蓝
        </lay-radio>
      </lay-form-item>
      <lay-form-item label="按钮对齐">
        <lay-radio
          v-model="btnDirection"
          label="left"
        >
          居左
        </lay-radio>
        <lay-radio
          v-model="btnDirection"
          label="center"
        >
          居中
        </lay-radio>
        <lay-radio
          v-model="btnDirection"
          label="right"
        >
          居右
        </lay-radio>
      </lay-form-item>
      <lay-form-item label=" ">
        <lay-button @click="dialogVisible = true">
          点击弹窗
        </lay-button>
      </lay-form-item>
    </lay-form>

    <lay-alert
      :visible.sync="dialogVisible"
      :buttons="buttons"
      title="弹窗"
      :skin="skin"
      :modal="modal"
      :btn-direction="btnDirection"
    >
      普通弹窗
    </lay-alert>
  </div>
</template>

<script>
export default {
  name: 'Layer',
  data () {
    return {
      dialogVisible: false,
      buttons: [
        {
          title: '确认',
          handler: this.close,
          isImportant: true
        },
        {
          title: '关闭',
          handler: this.close
        }
      ],
      modal: true,
      skin: 'page',
      btnDirection: 'right'
    };
  },
  methods: {
    close () {
      this.dialogVisible = false;
    }
  }
};
</script>

<style scoped></style>
