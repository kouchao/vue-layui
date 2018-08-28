<template>
    <div>
        <lay-block title="表单集合演示"></lay-block>
        <lay-form :model="form" :rules="rules">
            <lay-form-item label="输入框" block>
                <lay-input v-model="form.name" placeholder="占位"></lay-input>
            </lay-form-item>
            <lay-form-item type="" label="密码框" border :word-aux="input">
                <lay-input disabled placeholder="禁用"></lay-input>
            </lay-form-item>
            <lay-form-item label="单选框">
                <lay-radio v-model="radio" label="1">备选项</lay-radio>
                <lay-radio v-model="radio" label="2">备选项</lay-radio>
                <lay-radio v-model="radio" label="3">备选项</lay-radio>
                <lay-radio v-model="radio" label="4" disabled>禁选</lay-radio>
            </lay-form-item>

            <lay-form-item  label="复选框" block>
                <lay-checkbox v-model="checkbox" label="1" skin="primary">原始复选框</lay-checkbox>
                <lay-checkbox v-model="checkbox" label="2" skin="primary">未选中</lay-checkbox>
                <lay-checkbox v-model="checkbox" label="3" skin="primary" disabled>禁用</lay-checkbox>
                <lay-checkbox v-model="checkbox" label="4">美化复选框</lay-checkbox>
                <lay-checkbox v-model="checkbox" label="5">未选中</lay-checkbox>
                <lay-checkbox v-model="checkbox" label="6" disabled>禁用</lay-checkbox>
            </lay-form-item>

            <lay-form-item  label="开关" block>
                <lay-checkbox v-model="checkbox" label="7" skin="switch" open-text="开" close-text="关"></lay-checkbox>
                <lay-checkbox v-model="checkbox" label="8" skin="switch" open-text="开" close-text="关"></lay-checkbox>
                <lay-checkbox v-model="checkbox" label="9" skin="switch" open-text="禁用" close-text="禁用" disabled></lay-checkbox>
            </lay-form-item>

            <lay-form-item  label="选择框" block>
                <lay-select @change="selectChange" v-model="selectValue" :open.sync="selectOpen" :label="select" value-tag="id" text-tag="text" placeholder="请选择1"></lay-select>
                <lay-select @change="selectChange" v-model="selectValue" :open.sync="selectOpen" :label="select" value-tag="id" text-tag="text" placeholder="请选择1" disabled></lay-select>
            </lay-form-item>

            <lay-form-item  label="文本域" block>
                <lay-textarea  placeholder="请输入内容" v-model="textarea"></lay-textarea>
            </lay-form-item>
            <lay-form-item block>
                <lay-button type="reset" item="primary">重置</lay-button>
            </lay-form-item>
        </lay-form>
    </div>
</template>

<script>
	export default {
		name: "Form",
        data(){
	        return {
		        form: {
			        name: 'lalal'
                },
		        rules: {
		            name: [
			            {type: "string", required: true, message: '请填写姓名'},
			            {max: 10, message: '最多10个字符'}
		            ]
                },
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
		methods: {
			selectChange: function (val) {
				console.log(`change: val=${val}`)
			}
		}
	}
</script>

<style scoped>

</style>