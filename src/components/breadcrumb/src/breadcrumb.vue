<template>
    <span class="layui-breadcrumb" style="visibility: visible;">
        <slot></slot>
    </span>
</template>
<script>
    export default {
    	name: 'LayBreadcrumb',
        props: {
	        separator: {
	        	type: String,
                default(){
	        		return '/'
                }
            }
        },
	    provide() {
		    return {
			    layBreadcrumb: this
		    };
	    },
	    mounted() {
		    const items = this.$el.querySelectorAll('.layui-breadcrumb-item .separator');
		    if (items.length) {
			    items[items.length - 1].style.display = 'none'
		    }
	    }
    }
</script>

<style scoped>

</style>