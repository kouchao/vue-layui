<template>
  <div
    :class="{
      'layui-this': isActive,
      'layui-carousel-next': isNext,
      'layui-carousel-prev': isPrev,
      'layui-carousel-left': (isActive || isNext) && isRighting,
      'layui-carousel-right': (isActive || isPrev) && isLefting
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'LayCarouselItem',
  data () {
    return {
      isNext: false,
      isActive: false,
      isPrev: false,
      isRighting: false,
      isLefting: false
    };
  },
  created () {
    this.$parent && this.$parent.updateItems();
  },
  destroyed () {
    this.$parent && this.$parent.updateItems();
  }
};
</script>

<style scoped></style>
