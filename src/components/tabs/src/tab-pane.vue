<template>
    <div class="layui-tab-item"
         :class="{
            'layui-show': name == $parent.value
         }">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'LayTabPane',
        props: {
	        title: String,
	        name: String
        }
    }
</script>

<style scoped>

</style>
