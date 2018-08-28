<template>
  <div>
    <layui-hr color="orange"></layui-hr>
    <layui-hr color="green"></layui-hr>
    <layui-hr color="cyan"></layui-hr>





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

      <layui-form-item  label="选择框" block>
        <layui-select @change="selectChange" v-model="selectValue" :open.sync="selectOpen" :label="select" value-tag="id" text-tag="text" placeholder="请选择1"></layui-select>
        <layui-select @change="selectChange" v-model="selectValue" :open.sync="selectOpen" :label="select" value-tag="id" text-tag="text" placeholder="请选择1" disabled></layui-select>
      </layui-form-item>

      <layui-form-item  label="文本域" block>
        <layui-textarea  placeholder="请输入内容" v-model="textarea"></layui-textarea>
      </layui-form-item>
      <layui-form-item block>
        <layui-btn type="reset" item="primary">重置</layui-btn>
      </layui-form-item>
    </layui-form>


    layui-tabs
    <layui-tabs>
      <layui-tab-pane name="tab1">tab1</layui-tab-pane>
      <layui-tab-pane name="tab2">tab2</layui-tab-pane>
    </layui-tabs>
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
				selectOpen: false,
				textarea: '1231223'
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

</style>
