<template>
    <div class="layui-carousel" lay-anim="" lay-indicator="inside" :lay-arrow="arrow"
         style="width: 600px;" :style="{
            height: height + 'px'
         }">
        <div carousel-item="">
            <slot></slot>
        </div>
        <div class="layui-carousel-ind">
            <ul>
                <li v-for="item in items" :class="{'layui-this': item.isActive}"></li>
            </ul>
        </div>
        <button class="layui-icon layui-carousel-arrow" @click="handleSub" lay-type="sub"></button>
        <button class="layui-icon layui-carousel-arrow" @click="handleAdd" lay-type="add"></button>
    </div>
</template>

<script>
	export default {
		name: "LayCarousel",
		data() {
			return {
				activeItem: '',
				nextItem: '',
				prevItem: '',
				items: [],
				righting: false,
				lefting: false
			}
		},
		props: {
			arrow: {
				type: String,
				default: 'always'
			},
			height: {
				type: Number,
				default: 280
			}
		},
		mounted() {

		},
		methods: {
			handleSub() {
				if (this.lefting) {
					return false
				}
				this.lefting = true
				this.updateItem()
				setTimeout(() => {

					this.lefting = false
					const activeIndex = this.items.findIndex(o => o === this.activeItem)
					if (activeIndex == 0) {
						this.setActiveItem(this.items[this.items.length - 1])
						return false;
					}
					this.setActiveItem(this.items[activeIndex - 1])
				}, 300)
			},
			handleAdd() {
				if (this.righting) {
					return false
				}
				this.righting = true
				this.updateItem()
				setTimeout(() => {
					this.righting = false
					const activeIndex = this.items.findIndex(o => o === this.activeItem)
					if (activeIndex == this.items.length - 1) {
						this.setActiveItem(this.items[0])
						return false;
					}
					this.setActiveItem(this.items[activeIndex + 1])

				}, 300)

			},
			updateItems() {
				this.items = this.$children.filter(child => child.$options.name === 'LayCarouselItem');
				this.setActiveItem(this.items[0])
			},
			updateItem() {
				this.items.forEach(o => {
					o.isActive = o == this.activeItem
					o.isPrev = o == this.prevItem
					o.isNext = o == this.nextItem
					o.isRighting = this.righting
					o.isLefting = this.lefting
				})
			},
			setActiveItem(item) {
				this.activeItem = item
				const activeIndex = this.items.findIndex(o => o === this.activeItem)

				this.nextItem = activeIndex == this.items.length - 1 ? this.items[0] : this.items[activeIndex + 1]
				this.prevItem = activeIndex == 0 ? this.items[this.items.length - 1] : this.items[activeIndex - 1]

				this.updateItem()
			}
		}
	}
</script>

<style scoped>

</style>