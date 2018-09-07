<template>
    <div>
        <lay-block color="#f00">该模块正在开发中</lay-block>
        <lay-carousel>
            <lay-carousel-item>1</lay-carousel-item>
            <lay-carousel-item>2</lay-carousel-item>
            <lay-carousel-item>3</lay-carousel-item>
            <lay-carousel-item>4</lay-carousel-item>
        </lay-carousel>
        <br>
        <lay-carousel arrow="hover" :height="100">
            <lay-carousel-item>1</lay-carousel-item>
            <lay-carousel-item>2</lay-carousel-item>
            <lay-carousel-item>3</lay-carousel-item>
            <lay-carousel-item>4</lay-carousel-item>
        </lay-carousel>


    </div>
</template>

<script>
	export default {
		name: "Carousel"
	}
</script>

<style>
    div[carousel-item] > * {
        text-align: center;
        color: #fff;
    }

    div[carousel-item] > *:nth-child(2n) {
        background-color: #009688;
    }

    div[carousel-item] > *:nth-child(2n+1) {
        background-color: #5FB878;
    }
</style>