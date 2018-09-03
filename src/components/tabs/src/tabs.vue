<template>
    <div class="layui-tab">
        <ul class="layui-tab-title">
            <li v-for="item in titles"
                :class="{
                    'layui-this': value == item.name
                }"
                @click="handleClick(item.name)">
                {{item.title}}
                <i v-if="closable"
                   class="layui-icon layui-unselect layui-tab-close layui-icon-close"
                    @click.stop="handleClose(item.name)"></i>
            </li>

        </ul>
        <div class="layui-tab-content">
            <slot></slot>
        </div>

    </div>

</template>

<script>
	export default {
		name: 'LayTabs',
		props: {
			activeName: String,
			value: String,
			closable: {
				type: Boolean,
                default() {
					return false
                }
            }
        },
        data(){
			return {
				titles: []
            }

        },
        methods: {
	        handleClick(value){
		        this.$emit('input', value)
            },
	        handleClose(value){
		        this.titles = this.titles.filter(o => o.name != value)
                this.value = this.titles.length ? this.titles[0].name : ''
		        this.$emit('close', value)
            }
        },
		mounted() {
			this.slots = this.$slots
			this.titles = this.$slots.default.map(o => {
				return {
					title: o.child.title,
                    name: o.child.name
                }
            })
		},
        watch: {
	        value(){
		        this.$emit('input', this.value)
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
