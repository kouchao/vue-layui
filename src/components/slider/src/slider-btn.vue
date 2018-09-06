<template>

    <div class="layui-slider-wrap"
         :style="(vertical ? 'bottom: ' + left + '%' : 'left: ' + left + '%')">
        <div class="layui-slider-wrap-btn"
             :class="['layui-bd-' + this.theme, {'layui-disabled': disabled}]"
             style="border: 2px; border-style: solid"
             @mousedown="onDragStart"
             @mouseenter="handleMouseEnter"
             @mouseleave="handleMouseLeave">
        </div>
    </div>
</template>

<script>
	export default {
		name: "LaySliderBtn",
        data(){
			return {
				left: 0,
				btnValue: 0,
				isMouseDown: false,
				startX: 0,
				startLeft: 0
            }
        },
        props: {
	        value: {
		        type: Number,
		        requires: true
	        },
	        max: {
		        type: Number,
		        default: () => 100
	        },
	        min: {
		        type: Number,
		        default: () => 0
	        },
	        step: {
		        type: Number,
		        default: () => 1
	        },
	        sliderWidth: {
		        type: Number,
            },
	        steps: {
	        	type: Array
            },
	        vertical: {
	        	type: Boolean
            },
	        theme: String,
	        disabled: Boolean
        },
		mounted() {
			this.setData()
		},
        methods: {
	        setData(){
		        const {value, max, min} = this
		        this.btnValue = value

		        let left = ((value -min) / (max - min) || 0) * 100
		        if (left > 100) left = 100;

		        if (left < 0) left = 0;
		        this.left = left
            },
	        handleMouseEnter() {

		        this.$emit('tip', [true, this.left, this.btnValue])
	        },
	        handleMouseLeave() {
		        if (!this.isMouseDown) this.$emit('tip', [false, this.left, parseInt(this.btnValue)])
	        },
	        handleChange(){
		        const {btnValue, max, min} = this
		        if(btnValue > max) this.btnValue = max
		        if(btnValue < min) this.btnValue = min
		        this.$emit('tip', [true, this.left, this.btnValue])
		        this.$emit('input', parseInt(this.btnValue))
	        },
	        onDragStart(e) {
		        e.preventDefault();
		        this.isMouseDown = true
		        this.startX = this.vertical ? -e.screenY : e.screenX
		        this.startLeft = this.left

		        window.addEventListener('mousemove', this.onDragging);
		        window.addEventListener('mouseup', this.onDragEnd);

	        },
	        onDragging(e) {
	        	if (this.disabled) {
	        		return false
                }
		        const {startX, isMouseDown, sliderWidth, startLeft, max, min, steps} = this;
		        const screenX = this.vertical ? -e.screenY : e.screenX
		        if (!isMouseDown) return false;

		        let left = startLeft + ((screenX - startX) / sliderWidth) * 100;

		        if (left > 100) left = 100;

		        if (left < 0) left = 0;

		        left = steps.filter(o => o <= left).pop()
		        this.left = left;
		        this.btnValue = Math.round(min + left * (max - min) / 100)
		        this.handleChange()
	        },
	        onDragEnd(e) {
		        e.returnValue = false;

		        this.isMouseDown = false;
		        this.$emit('tip', [false, this.left, this.btnValue])
		        window.removeEventListener('mousemove', this.onDragging);
		        window.removeEventListener('mouseup', this.onDragEnd);
	        }
        },
		watch: {
			value() {
				this.setData()
			}
		}
	}
</script>

<style scoped>

</style>