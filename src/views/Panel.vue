<template>
    <div>
        <lay-block title="卡片面板"></lay-block>
        <div style="padding: 20px; background-color: #F2F2F2;">
            <lay-row :space="20">
                <lay-col :md="6">
                    <lay-card>
                        <div slot="header">卡片面板</div>
                        <div>
                            <p>卡片式面板面板通常用于非白色背景色的主体内</p>
                            <p>从而映衬出边框投影</p>
                        </div>
                    </lay-card>
                </lay-col>
                <lay-col :md="6">
                    <lay-card>
                        <div slot="header">卡片面板</div>
                        <div>
                            <p>结合 layui 的栅格系统</p>
                            <p>轻松实现响应式布局</p>
                        </div>
                    </lay-card>
                </lay-col>
            </lay-row>
            <lay-row>
                <lay-card>
                    <div slot="header">标题</div>
                    <div>
                        内容
                    </div>
                </lay-card>
            </lay-row>
        </div>

        <lay-block title="常规折叠面板" style="margin-top: 30px;"></lay-block>
    </div>
</template>

<script>
	export default {
		name: "Panel"
	}
</script>

<style scoped>

</style>