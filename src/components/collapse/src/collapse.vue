<template>
    <form class="layui-collapse"
          :class="{
             'layui-form-pane': border
           }">
        <slot></slot>
    </form>
</template>

<script>
    import asyncValidator from 'async-validator'

	export default {
		name: 'LayCollapse',
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
	        validate(cb){
		        let validator = new asyncValidator(this.rules);
		        validator.validate(this.model, (errors, fields) => {
			        if(errors) {
				        cb(false)
			        } else {
				        cb(true)
                    }


		        });

            }
        }
	}
</script>

<style>

</style>
