<template>
    <form class="layui-form"
          :class="{
             'layui-form-pane': border
           }">
        <slot></slot>
    </form>
</template>

<script>
    import schema from 'async-validator'

	export default {
		name: 'LayForm',
		props: {
			border: Boolean,
			model: Object,
			rules: Object
		},
		provide() {
			return {
				rootForm: this
			};
		},
        methods: {
	        handlerChange(){
		        let validator = new schema(this.rules);
		        validator.validate(this.model, (errors, fields) => {
			        if(errors) {
				        console.log(errors)
			        }
		        });
            }
        },
		watch: {
			model: {
				deep: true,
				handler(){
					this.handlerChange()
                }

            }
		}
	}
</script>

<style>

</style>
