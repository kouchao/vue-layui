<template>
    <div class="layui-slider" ref="slider">
        <div class="layui-slider-tips"
             style="display: inline-block"
             v-if="isShowTip"
             :style="{
                left: leftP + '%'
             }">
            {{_value}}
        </div>
        <div class="layui-slider-bar" :style="{
            background: 'rgb(0, 150, 136)',
            width: leftP + '%',
            left: '0%'
        }"></div>
        <div class="layui-slider-wrap"
             :style="{
                left: leftP + '%'
             }">
            <div class="layui-slider-wrap-btn"
                 style="border: 2px solid #009688;"
                 @mousedown="onDragStart"
                 @mouseenter="handleMouseEnter"
                 @mouseleave="handleMouseLeave"></div>
        </div>
    </div>

</template>

<script>
	export default {
		name: 'LaySlider',
		props: {
			value: {
				type: [Number, Array],
				requires: true
			},
			max: {
				type: Number,
				default: () => 100
			},
			min: {
				type: Number,
				default: () => 0
			}
		},
		data() {
			return {
				leftP: 0,
				isMouseDown: false,
				sliderWidth: 0,
				startX: 0,
				startP: 0,
				isShowTip: false,
				_value: 0
			}
		},
		mounted() {
			this.setData()
			this.sliderWidth = this.$refs.slider.offsetWidth
		},
		methods: {
			setData() {
				const {value, max, min} = this
				this._value = value

				let leftP = (value / (max - min) || 0) * 100
				if (leftP > 100) leftP = 100;

				if (leftP < 0) leftP = 0;
				this.leftP = leftP
			},
			handleMouseEnter() {
				this.isShowTip = true
			},
			handleMouseLeave() {
				if (!this.isMouseDown) this.isShowTip = false;
			},
			onDragging(e) {
				const {startX, isMouseDown, sliderWidth, startP, max, min} = this;

				if (!isMouseDown) return false;

				let leftP = startP + ((e.screenX - startX) / sliderWidth) * 100;

				if (leftP > 100) leftP = 100;

				if (leftP < 0) leftP = 0;

				this.leftP = leftP

				this._value = Math.round(min + leftP * (max - min) / 100);
			},
			onDragStart(e) {
				e.preventDefault();
				this.isMouseDown = true
				this.startX = e.screenX
				this.startP = this.leftP

				window.addEventListener('mousemove', this.onDragging);
				window.addEventListener('mouseup', this.onDragEnd);

			},
			onDragEnd(e) {
				e.returnValue = false;

				this.isMouseDown = false;
				this.isShowTip = false
				window.removeEventListener('mousemove', this.onDragging);
				window.removeEventListener('mouseup', this.onDragEnd);
				this.$emit('input', this._value)

			}
		},
		watch: {
			value() {
				this.setData()
			}
		}
	}
</script>

<style>

</style>
