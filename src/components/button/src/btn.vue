<template>
    <a v-if="url"
       :target="target"
       :href="url"
       :type="type"
       class="layui-btn"
       :class="[
                item ? 'layui-btn-' + item : '',
                size ? 'layui-btn-' + size : '',
                {
                    'layui-btn-radius': radius,
                    'layui-btn-fluid': fluid,
                    'layui-btn-disabled': disabled
                }]">
        <i v-if="icon && !right" class="left" :class="icon"></i>
        <slot><span style="margin: -2px"></span></slot>
        <i v-if="icon && right" class="right" :class="icon"></i></a>

    <button v-else :type="type" class="layui-btn"
            :class="[
                    item ? 'layui-btn-' + item : '',
                    size ? 'layui-btn-' + size : '',
                    {
                        'layui-btn-radius': radius,
                        'layui-btn-fluid': fluid,
                    'layui-btn-disabled': disabled
                    }]">
        <i v-if="icon && !right" class="left" :class="icon"></i>
        <slot><span style="margin: -2px"></span></slot>
        <i v-if="icon && right" class="right" :class="icon"></i>
    </button>

</template>

<script>
	export default {
		name: 'LayButton',
		props: {
			item: {
				item: String,
				default: 'default'
			},
			size: String,
			radius: Boolean,
			disabled: Boolean,
			icon: String,
			right: Boolean,
			type: String,
			fluid: Boolean,
			url: String,
			target: {
				type: String,
                default(){
					return '_blank'
                }
            }
		}
	}
</script>

<style scoped>
    i.right {
        padding-left: 4px;
    }

    i.left {
        padding-right: 4px;
    }

</style>
