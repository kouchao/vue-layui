<template>
    <dd><a href="javascript:;" @click="handleClick">{{title}}</a></dd>
</template>

<script>
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
        mixins: [eventHub],
		inject: ['rootMenu'],
        methods: {
	        handleClick() {
	        	if(this.$route && this.to){
			        this.$router.push(this.to)
                }
            }
        }
	}
</script>

<style scoped>

</style>