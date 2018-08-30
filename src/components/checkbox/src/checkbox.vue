<template>
    <span @click="handleClick">
        <input type="checkbox" :name="name" title="写作" :value="label">
        <div class="layui-unselect" :class="[{
        'layui-checkbox-disbaled layui-disabled': disabled
        },

        skin == 'switch' ? 'layui-form-switch' : 'layui-form-checkbox',
        hasValue && skin == 'switch' ? 'layui-form-onswitch' : '',
        hasValue && skin != 'switch' ? 'layui-form-checked' : '']" :lay-skin="skin">
          <span v-if="skin != 'switch'"><slot></slot></span>

          <em v-if="skin == 'switch'">{{text}}</em>
          <i v-if="skin == 'switch'"></i>

          <i v-if="skin == 'primary'" class="layui-icon layui-icon-ok"></i>
          <i v-if="!skin" class="layui-icon layui-icon-ok"></i>
        </div>
    </span>


</template>

<script>
	export default {
		name: 'LayCheckbox',
		data: function () {
			return {
				hasValue: false,
				text: ''
			}
		},
		props: {
			value: Array,
			label: [String, Number],
			disabled: Boolean,
			name: String,
			skin: [String],
			openText: [String],
			closeText: [String]
		},
		methods: {
			handleClick: function () {
				if (!this.disabled) {
					if (!this.value.includes(this.label)) {
						this.value.push(this.label)
					} else {
						let index = this.value.indexOf(this.label)
						this.value.splice(index, 1)
					}
					console.log(this.value)
					this.value.includes(this.label) ? this.hasValue = true : this.hasValue = false
					if (this.value.includes(this.label)) {
						this.hasValue = true
						this.text = this.openText
					} else {
						this.hasValue = false
						this.text = this.closeText
					}
					this.$emit('input', this.value)
				}
			}
		},
		created: function () {
			if (this.value.includes(this.label)) {
				this.hasValue = true
				this.text = this.openText
			} else {
				this.hasValue = false
				this.text = this.closeText
			}
		}
	}
</script>

<style>

</style>
