<template>
    <div>

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
        <lay-block title="设置步长"></lay-block>
        <lay-slider class="demo-slider"
                    v-model="slider2" :min="0" :max="100" :step="10">
        </lay-slider>
        <lay-slider class="demo-slider"
                    v-model="slider2" :min="0" :max="100" :step="10" show-stops>
        </lay-slider>
        <lay-block title="设置提示文本"></lay-block>
        <lay-slider class="demo-slider"
                    v-model="slider3" :min="0" :max="100">
            <template slot-scope="scope">
                {{scope.value}}GB
            </template>
        </lay-slider>
        <lay-slider class="demo-slider"
                    v-model="slider4" :min="0" :max="100" :show-tip="false">
        </lay-slider>
        <div style="position:relative; left: 30px; top: -20px;">当前数值：{{slider4}}</div>
        <lay-block title="开启输入框"></lay-block>
        <lay-slider class="demo-slider"
                    v-model="slider5" :min="0" :max="100" show-input>
        </lay-slider>

        <lay-block title="开启范围选择"></lay-block>
        <lay-slider class="demo-slider"
                    v-model="slider6">
        </lay-slider>
        <div style="position:relative; left: 30px; top: -20px;">开始值：{{slider6[0]}}、结尾值：{{slider6[1]}}</div>

        <lay-block title="垂直滑块"></lay-block>
        <lay-slider class="demo-slider-vertical"
                    v-model="slider1"
                    vertical>
        </lay-slider>
        <lay-slider class="demo-slider-vertical"
                    v-model="slider6"
                    vertical>
        </lay-slider>
        <lay-slider class="demo-slider-vertical"
                    v-model="slider2" :min="0" :max="100" :step="20" show-stops vertical>
        </lay-slider>
        <lay-slider class="demo-slider-vertical"
                    v-model="slider5" :min="0" :max="100" show-input vertical>
        </lay-slider>
        <lay-block title="自定义颜色"></lay-block>
        <lay-slider class="demo-slider"
                    v-model="slider5"
                    :min="0"
                    :max="100"
                    theme="blue">
        </lay-slider>
        <lay-slider class="demo-slider"
                    v-model="slider5"
                    :min="0"
                    :max="100"
                    theme="red">
        </lay-slider>
        <lay-block title="禁用滑块"></lay-block>

        <lay-slider class="demo-slider"
                    v-model="slider5"
                    :min="0"
                    :max="100"
                    theme="gray"
                    disabled>
        </lay-slider>

    </div>
</template>

<script>
	export default {
		name: "Slider",
		data() {
			return {
				slider: 30,
				slider1: 30,
				slider2: 40,
				slider3: 20,
				slider4: 10,
				slider5: 30,
				slider6: [30, 80]
			}
		}
	}
</script>

<style scoped>
    .demo-slider {
        margin: 45px 30px;
        width: 40%;
    }

    .demo-slider-vertical {
        display: inline-block;
    }
</style>