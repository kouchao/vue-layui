<template>
    <fieldset v-if="title"
              class="layui-elem-field"
              :class="{
                    'layui-field-title': !border
                  }"
              :style="styleName">
        <legend>{{title}}</legend>
        <div class="layui-field-box" v-if="border">
            <slot></slot>
        </div>
    </fieldset>
    <blockquote v-else class="layui-elem-quote"
                :class="'layui-quote-' + theme"
                  :style="styleName">
        <slot></slot>
    </blockquote>


</template>

<script>
	export default {
		name: 'LayBlock',
		props: {
			color: String,
			title: String,
			border: Boolean,
            theme: String
		},
		data: function () {
			return {
				styleName: {
					'border-color': this.color
				}
			}
		}
	}
</script>

<style scoped>
    /*.layui-elem-quote {*/
        /*border-left: 5px solid #009688*/
    /*}*/

</style>
