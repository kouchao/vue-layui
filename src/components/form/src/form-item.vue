<template>
    <div class="layui-form-item "
         :class="{
         'layui-form-pane': border
       }">
        <label v-if="label"
               class="layui-form-label"
               :class="{
                    'is-required': isRequired
               }">{{label}}</label>
        <div :class="block ? 'layui-input-block' : 'layui-input-inline'">
            <slot>{{value}}</slot>
        </div>
        <div v-if="wordAux" class="layui-form-mid layui-word-aux">{{wordAux}}</div>
        <div v-if="isError" class="layui-form-item__error">{{message}}</div>
    </div>
</template>

<script>
	import asyncValidator from 'async-validator'
	export default {
		name: 'LayFormItem',
		props: {
			label: String,
			block: Boolean,
			wordAux: String,
			border: Boolean,
			prop: String
		},
		data() {
			return {
				isRequired: false,
				isError: false,
				message: ''
            }
		},
		inject: ['rootForm'],
		created() {
			if (this.rootForm && this.rootForm.rules && this.rootForm.model && this.prop && this.rootForm.rules[this.prop]) {
				this.isRequired = this.rootForm.rules[this.prop].find(o => o.required) ? true : false
			}
		},
		computed: {
	        value(){
		        if (this.rootForm && this.rootForm.rules && this.prop && this.rootForm.rules[this.prop]) {
			        this.validate()
		        	return this.rootForm.model[this.prop]
		        }
            }
        },
		methods: {
			validate(){
				const descriptor = {};
				descriptor[this.prop] = this.rootForm.rules[this.prop]
				let validator = new asyncValidator(descriptor);
				validator.validate(this.rootForm.model, (errors, fields) => {
					if(errors) {
                        this.isError = true
                        this.message = errors[0].message
					} else {
						this.isError = false
                    }
				});

			}
		}
	}
</script>

<style scoped>
    .is-required.layui-form-label:before {
        content: "*";
        color: #f56c6c;
        margin-right: 4px;
    }

    .layui-form-item__error {
        color: #f56c6c;
        font-size: 12px;
        line-height: 1;
        padding-top: 4px;
        position: absolute;
        top: 100%;
        left: 110px;
    }

    .layui-form-item {
        position: relative;
        margin-bottom: 22px;
    }

</style>
