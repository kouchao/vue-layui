<template>
  <div>
    <h1>当前展示的页面为开发中 可能存在严重bug 请点击其他模块预览</h1>
    <layui-hr color="orange"></layui-hr>
    <layui-hr color="green"></layui-hr>
    <layui-hr color="cyan"></layui-hr>




    layui-tabs
    <layui-tabs>
      <layui-tab-pane name="tab1">tab1</layui-tab-pane>
      <layui-tab-pane name="tab2">tab2</layui-tab-pane>
    </layui-tabs>
  </div>
</template>

<script>
	export default {
		name: 'app',
		data: function () {
			return {
				radio: 1,
				input: 'test',
				checkbox: ['1', '4', '7'],
				select: [{
					id: '00001',
					text: '选项1'
				},
					{
						id: '00002',
						text: '选项2'
					},
					{
						id: '00003',
						text: '选项3'
					},
					{
						id: '00004',
						text: '选项4'
					}],
				selectValue: '00003',
				selectOpen: false,
				textarea: '1231223'
			}
		},
		created: function () {
			this.testLayui()
		},
		methods: {
			selectChange: function (val) {
				console.log(`change: val=${val}`)
			}
		}
	}
</script>

<style>

</style>
