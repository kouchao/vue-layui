<template>
    <li :key="index"
        class="layui-nav-item"
        :class="{
            'layui-nav-itemed': isActive
        }"
        @mouseleave="onMouseLeave"
        @mouseenter="onMouseEnter">
        <a @click="handleClick"
           :class="{
                'layui-nav-item-bar': isVertical
           }"
           href="javascript:;">
            <slot name="title"></slot>
            <span class="layui-nav-more" v-if="this.$slots.default"></span>
        </a>
        <dl class="layui-nav-child" v-if="this.$slots.default">
            <slot></slot>
        </dl>
    </li>
</template>

<script>
	import Menu from './menu-mixin';
	import eventHub from '@/mixins/eventHub';
	export default {
		name: "LayMenuItem",
		props: {
			index: {
				type: Number,
				required: true
			},
            title: {
	            type: String
            }
		},

        mixins: [Menu, eventHub],
        methods: {
	        handleClick() {
	        	if(this.$slots.default && this.rootMenu.mode == 'vertical'){
			        this.eventEmit('menu-item-click', this);
                }
            },
	        onMouseEnter(){
		        if(this.$slots.default && this.rootMenu.mode == 'horizontal'){
			        this.eventEmit('menu-item-click', this);
		        }
            },
	        onMouseLeave(){
		        if(this.$slots.default && this.rootMenu.mode == 'horizontal'){
			        this.eventEmit('menu-item-click', this);
		        }
            }
        },
		computed: {
			isActive() {
				const isActive = this.rootMenu.openeds.findIndex(o => o == this.index) != -1
				return isActive
            },
            isVertical(){
	            return this.rootMenu.mode == 'vertical'
            }
        }
	}
</script>

<style scoped>
    .layui-nav .layui-nav-item a.layui-nav-item-bar {
        transition-duration: 0s;
    }
    .layui-nav-item-bar:hover {
        border-left: 5px solid rgb(0, 150, 136);
        padding-left: 15px;
    }
</style>