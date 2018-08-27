<template>
    <dd><a href="javascript:;" @click="handleClick">列表一</a></dd>
</template>

<script>
	import Menu from './menu-mixin';
	import eventHub from '@/mixins/eventHub';
	export default {
		name: "LayMenuChildItem",
		props: {
            title: {
	            type: String
            },
            to: {
            	type: Object
            }
		},
        mixins: [Menu, eventHub],
        methods: {
	        handleClick() {
	        	if(this.$route && this.to){
			        this.$route.push(this.to)
                }
            }
        }
	}
</script>

<style scoped>

</style>