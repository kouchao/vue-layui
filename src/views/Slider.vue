<template>
    <div>
        <lay-block color="#FF5722">该组件正在开发中，存在严重bug</lay-block>

        <lay-block title="基本滑块"></lay-block>
        <lay-slider class="demo-slider"
                    v-model="slider">
        </lay-slider>
        <lay-block title="定义初始值"></lay-block>
        <lay-block>v-model</lay-block>
        <lay-block title="设置最大最小值"></lay-block>
        <lay-slider class="demo-slider"
                    v-model="slider1" :min="20" :max="80">
        </lay-slider>
    </div>
</template>

<script>
	export default {
		name: "Slider",
        data(){
			return {
				slider: 30,
				slider1: 30
            }
        }
	}
</script>

<style scoped>
    .demo-slider {
        margin: 45px 30px;
        width: 40%;
    }
</style>