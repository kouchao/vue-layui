<template>
    <div>

        <lay-block>本模块与layui的验证方式完全不同。</lay-block>

        <lay-block title="表单集合演示"></lay-block>
        <lay-form :model="form" :rules="rules" ref="form">
            <lay-form-item label="单行输入框" prop="first" block>
                <lay-input v-model="form.first" placeholder="请输入标题"></lay-input>
            </lay-form-item>
            <lay-form-item label="验证必填项" prop="second" block>
                <lay-input v-model="form.second" placeholder="请输入"></lay-input>
            </lay-form-item>

            <lay-row>
                <lay-col :xs="4">
                    <lay-form-item label="验证手机号" prop="mobile" block>
                        <lay-input v-model="form.mobile" placeholder="请输入手机号"></lay-input>
                    </lay-form-item>
                </lay-col>

                <lay-col :xs="4">
                    <lay-form-item label="验证邮箱" prop="email" block>
                        <lay-input v-model="form.email" placeholder="请输入邮箱"></lay-input>
                    </lay-form-item>
                </lay-col>

            </lay-row>



            <lay-form-item type="" label="密码框" border :word-aux="input">
                <lay-input disabled placeholder="禁用"></lay-input>
            </lay-form-item>
            <lay-form-item label="单选框">
                <lay-radio v-model="radio" label="1">备选项</lay-radio>
                <lay-radio v-model="radio" label="2">备选项</lay-radio>
                <lay-radio v-model="radio" label="3">备选项</lay-radio>
                <lay-radio v-model="radio" label="4" disabled>禁选</lay-radio>
            </lay-form-item>

            <lay-form-item label="复选框" block prop="checkbox">
                <lay-checkbox v-model="form.checkbox" label="1" skin="primary">原始复选框</lay-checkbox>
                <lay-checkbox v-model="form.checkbox" label="2" skin="primary">未选中</lay-checkbox>
                <lay-checkbox v-model="form.checkbox" label="3" skin="primary" disabled>禁用</lay-checkbox>
                <lay-checkbox v-model="form.checkbox" label="4">美化复选框</lay-checkbox>
                <lay-checkbox v-model="form.checkbox" label="5">未选中</lay-checkbox>
                <lay-checkbox v-model="form.checkbox" label="6" disabled>禁用</lay-checkbox>
            </lay-form-item>

            <lay-form-item label="开关" block>
                <lay-checkbox v-model="form.checkbox" label="7" skin="switch" open-text="开"
                              close-text="关"></lay-checkbox>
                <lay-checkbox v-model="form.checkbox" label="8" skin="switch" open-text="开"
                              close-text="关"></lay-checkbox>
                <lay-checkbox v-model="form.checkbox" label="9" skin="switch" open-text="禁用" close-text="禁用"
                              disabled></lay-checkbox>
            </lay-form-item>

            <lay-form-item label="选择框" block>
                <lay-select @change="selectChange" v-model="selectValue" :open.sync="selectOpen" :label="select"
                            value-tag="id" text-tag="text" placeholder="请选择1"></lay-select>
                <lay-select @change="selectChange" v-model="selectValue" :open.sync="selectOpen" :label="select"
                            value-tag="id" text-tag="text" placeholder="请选择1" disabled></lay-select>
            </lay-form-item>

            <lay-form-item label="文本域" block>
                <lay-textarea placeholder="请输入内容" v-model="textarea"></lay-textarea>
            </lay-form-item>
            <lay-form-item block>
                <lay-button @click="resetData" >重置</lay-button>

            </lay-form-item>
        </lay-form>
    </div>
</template>

<script>
	export default {
		name: "Form",
		data() {
			return {
				form: {
					first: '',
					second: '',
					mobile: '',
					email: '',
					checkbox: ['1', '4', '7']
				},
				rules: {
					first: [
						{min: 5, message: '最少5个字符'}
					],
					second: [
						{type: "string", required: true, message: '此为必填项'},
					],
					mobile: [
						{pattern: /^[1][0-9]{10}$/,message: '手机号格式不正确'}
					],
					email: [
						{type: "email", message: '邮箱格式不正确'},
                    ],
					checkbox: [
						{type: "array", max: 2, message: '最多选2个'}
					]
				},
				radio: 1,
				input: 'test',
				select: [
					{
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
					}
                ],
				selectValue: '00003',
				selectOpen: false,
				textarea: '1231223'
			}
		},
		created() {

		},
		methods: {
			resetData(){
				console.log(23)
				this.form = {
					name: '',
					checkbox: []
                }
            },
			selectChange: function (val) {
				this.$refs.form.validate(res => {
					console.log(res)
				})
			}
		}
	}
</script>

<style scoped>

</style>