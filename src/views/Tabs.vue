<template>
    <div>
        <lay-block title="默认风格的Tab"></lay-block>
        <lay-tabs v-model="activeName">
            <lay-tab-pane title="网站设置" name="first">
                1. 高度默认自适应，也可以随意固宽。
                <br>2. Tab进行了响应式处理，所以无需担心数量多少。
            </lay-tab-pane>
            <lay-tab-pane title="用户管理" name="second">
                内容2
            </lay-tab-pane>
            <lay-tab-pane title="权限分配" name="third">
                内容3
            </lay-tab-pane>
            <lay-tab-pane title="商品管理" name="fourth">
                内容4
            </lay-tab-pane>
            <lay-tab-pane title="订单管理" name="fifth">
                内容5
            </lay-tab-pane>
        </lay-tabs>
        <lay-block title="动态操作Tab" style="margin-top: 50px;"></lay-block>
        <lay-tabs v-model="activeName" closable @close="handleClose">
            <lay-tab-pane v-for="item in tabs" :title="item.title" :name="item.name">
                {{item.content}}
            </lay-tab-pane>

        </lay-tabs>
        <!--<lay-button @click="handleAddTab">新增Tab项</lay-button>-->
    </div>
</template>

<script>
	export default {
		name: "Tabs",
        data(){
			return {
				activeName: 'first',
                tabs: [{
					name: 'first',
                    title: '网站设置',
	                content: '内容1'
                }, {
	                name: 'second',
	                title: '用户管理',
	                content: '内容2'
                }, {
	                name: 'third',
	                title: '权限分配',
	                content: '内容3'
                }]
            }
        },
        methods: {
	        handleClose(value){
		        console.log(value)

	        },
	        handleAddTab(){
                this.tabs.push({
	                name: 'second' + 1,
	                title: '用户管理',
	                content: '内容2'
                })
            }
        }
	}
</script>

<style scoped>

</style>