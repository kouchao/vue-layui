<template>
    <colgroup>
        <col v-for="item in children" :width="item">
        <div style="display: none">
            <slot></slot>
        </div>
    </colgroup>
</template>

<script>
	export default {
		name: "LayTableColgroup",
		props: {
			children: Array
		}
	}
</script>

<style scoped>

</style>