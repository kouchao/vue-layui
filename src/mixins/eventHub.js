/**
 * kouchao 创建于 2018/8/27
 */
import Vue from 'vue'
const eventHub = new Vue()

export default {
	methods: {
		eventEmit(eventName, data){
			const parent = this.$parent || this.$root;

			if(parent && parent._uid){
				const uid = parent._uid;
				eventHub.$emit(eventName + uid, data)
			}
		},
		eventOn(eventName, cb){
			eventHub.$on(eventName + this._uid, cb)
		}
	}
}