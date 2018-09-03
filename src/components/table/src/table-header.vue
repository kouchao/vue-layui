<template>
    <thead>
        <tr>
            <th v-for="item in children">{{item}}</th>
        </tr>

    </thead>
</template>

<script>
	export default {
		name: "LayTableHeader",
        props: {
	        children: Array
        }
	}
</script>

<style scoped>

</style>