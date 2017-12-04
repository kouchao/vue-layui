<template>
  <div id="app">
    <layui-container :fluid="true">
      <layui-row>
        <layui-col :xs="6" :md="5">
          123123
        </layui-col>
        <layui-col :xs="6">
          123132
        </layui-col>
      </layui-row>
    </layui-container>
    <layui-hr color="red" title="标题"></layui-hr>
    <layui-hr color="orange"></layui-hr>
    <layui-hr color="green"></layui-hr>
    <layui-hr color="cyan"></layui-hr>
    <layui-btn>123</layui-btn>
    <layui-btn type="primary">123</layui-btn>
    <layui-btn type="normal">123</layui-btn>
    <layui-btn type="warm">123</layui-btn>
    <layui-btn type="danger" icon="fa fa-bolt" right>123</layui-btn>
    <layui-btn type="disabled" size="lg" radius>123</layui-btn>

    <layui-btn-group>
      <layui-btn type="danger" icon="fa fa-bolt">123</layui-btn>
      <layui-btn type="warm">123</layui-btn>
      <layui-btn type="danger" icon="fa fa-bolt" right>123</layui-btn>
    </layui-btn-group>

    <layui-btn-group>
      <layui-btn type="danger" icon="fa fa-bolt"></layui-btn>
      <layui-btn type="danger" icon="fa fa-bolt" right></layui-btn>
    </layui-btn-group>


    <layui-form>
      <layui-form-item label="输入框" block>
        <layui-input v-model="input" placeholder="占位"></layui-input>
      </layui-form-item>
      <layui-form-item type="" label="密码框" border :word-aux="input">
        <layui-input disabled placeholder="禁用"></layui-input>
      </layui-form-item>
      <layui-form-item label="单选框">
        <layui-radio v-model="radio" label="1">备选项</layui-radio>
        <layui-radio v-model="radio" label="2">备选项</layui-radio>
        <layui-radio v-model="radio" label="3">备选项</layui-radio>
        <layui-radio v-model="radio" label="4" disabled>禁选</layui-radio>
      </layui-form-item>

      <layui-form-item  label="复选框" block>
        <layui-checkbox v-model="checkbox" label="1" skin="primary">原始复选框</layui-checkbox>
        <layui-checkbox v-model="checkbox" label="2" skin="primary">未选中</layui-checkbox>
        <layui-checkbox v-model="checkbox" label="3" skin="primary" disabled>禁用</layui-checkbox>
        <layui-checkbox v-model="checkbox" label="4">美化复选框</layui-checkbox>
        <layui-checkbox v-model="checkbox" label="5">未选中</layui-checkbox>
        <layui-checkbox v-model="checkbox" label="6" disabled>禁用</layui-checkbox>
      </layui-form-item>

      <layui-form-item  label="开关" block>
        <layui-checkbox v-model="checkbox" label="7" skin="switch" open-text="开" close-text="关"></layui-checkbox>
        <layui-checkbox v-model="checkbox" label="8" skin="switch" open-text="开" close-text="关"></layui-checkbox>
        <layui-checkbox v-model="checkbox" label="9" skin="switch" open-text="禁用" close-text="禁用" disabled></layui-checkbox>
      </layui-form-item>
{{selectValue}}
      <layui-form-item  label="选择框">
        <layui-select @change="selectChange" v-model="selectValue" :open.sync="selectOpen" :label="select" value-tag="id" text-tag="text" placeholder="请选择1"></layui-select>
      </layui-form-item>

      <div class="layui-form-item">
        <label class="layui-form-label">选择框</label>
        <div class="layui-input-block">
          <select name="city" lay-verify="required">
            <option value=""></option>
            <option value="0">北京</option>
            <option value="1">上海</option>
            <option value="2">广州</option>
            <option value="3">深圳</option>
            <option value="4">杭州</option>
          </select>
        </div>
      </div>



      <div class="layui-form-item layui-form-text">
        <label class="layui-form-label">文本域</label>
        <div class="layui-input-block">
          <textarea name="desc" placeholder="请输入内容" class="layui-textarea"></textarea>
        </div>
      </div>
      <div class="layui-form-item">
        <div class="layui-input-block">
          <button class="layui-btn" lay-submit lay-filter="formDemo">立即提交</button>
          <button type="reset" class="layui-btn layui-btn-primary">重置</button>
        </div>
      </div>
    </layui-form>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data: function () {
      return {
        radio: 1,
        input: 'test',
        checkbox: ['1', '4', '7'],
        select: [{
          id: '00001',
          text: '选项1'
        },
        {
          id: '00002',
          text: '选项2'
        },
        {
          id: '00003',
          text: '选项3'
        },
        {
          id: '00004',
          text: '选项4'
        }],
        selectValue: '00003',
        selectOpen: false
      }
    },
    created: function () {
      this.testLayui()
    },
    methods: {
      selectChange: function (val) {
        console.log(`change: val=${val}`)
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    padding: 50px 0 ;
  }
</style>
