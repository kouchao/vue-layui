<template>
    <ul class="layui-nav"
        :class="{
            'layui-nav-tree': this.mode == 'vertical'
        }">
        <slot></slot>
    </ul>
</template>

<script>
	import eventHub from '@/mixins/eventHub';

	export default {
		name: "LayMenu",
        data() {
		    return {
			    openeds: this.defaultOpeneds
            }
        },
        props: {
			// horizontal / vertical
	        mode: {
	        	type: String,
                default: 'vertical',
            },
	        defaultOpeneds: {
		        type: Array,
		        default() {
		        	return []
                },
            },
	        uniqueOpened: {
		        type: Boolean,
		        default: false
            }
        },
		mixins: [eventHub],
		provide() {
			return {
				rootMenu: this
			};
		},
		methods: {
	        handleItemClick(item) {
	        	const {index} = item
                const activeIndex = this.openeds.findIndex(o => o == index)
                if(activeIndex == -1){
	                this.uniqueOpened ? this.openeds = [index] : this.openeds.push(index)
                } else {
	                this.openeds.splice(activeIndex, 1)
                }

            }
        },
		mounted() {
			this.eventOn('menu-item-click', this.handleItemClick);
		}
	}
</script>

<style scoped>

</style>