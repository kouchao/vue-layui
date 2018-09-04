<template>
    <div>
        <lay-alert :visible.sync="dialogVisible"
                   :buttons="buttons"
                   title="弹窗"
                   modal
                   skin="lan">
            普通弹窗
        </lay-alert>

        <lay-button @click="dialogVisible = true">弹出</lay-button>

        <LaySwitch v-model="value"
                   active-value="100"
                   inactive-value="0"
                   disabled>
        </LaySwitch>
    </div>
</template>

<script>
	export default {
		name: "Layer",
		data() {
			return {
				dialogVisible: false,
				buttons: [{
					title: '确认',
					handler: this.close,
					isImportant: true
				}, {
					title: '关闭',
					handler: this.close
				}],
				value: '100'
			}
		},
		methods: {
			close() {
				this.dialogVisible = false
			}
		}
	}
</script>

<style scoped>

</style>