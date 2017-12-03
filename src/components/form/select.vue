<template>
  <span>
    {{value}}
    <select>
      <option value="">请选择省</option>
      <option v-for="item in label"
              :value="item[valueTag]"
              :selected="item[valueTag] == value ? 'selected': false">{{item[textTag]}}</option>
    </select>
    <div class="layui-unselect layui-form-select"
         :class="{'layui-form-selected layui-form-selectup': open}"
         @click="handleClick">
      <div class="layui-select-title">
        <input type="text" placeholder="请选择省" :value="selectText" readonly="" class="layui-input layui-unselect">
        <i class="layui-edge"></i>
      </div>
      <dl class="layui-anim layui-anim-upbit" style="">
        <dd lay-value="" class="layui-select-tips">请选择省</dd>
        <dd v-for="item in label"
            @click.stop="selectOption(item)"
            :value="item[valueTag]"
            :class="item[valueTag] == value ? 'layui-this' : ''">{{item[textTag]}}</dd>
      </dl>
    </div>
    <!--<select>-->
      <!--<option value="">请选择省</option>-->
      <!--<option value="浙江" selected="">浙江省</option>-->
      <!--<option value="你的工号">江西省</option>-->
      <!--<option value="你最喜欢的老师">福建省</option>-->
    <!--</select>-->
    <!--<div class="layui-unselect layui-form-select"-->
         <!--:class="{'layui-form-selected layui-form-selectup': open}"-->
         <!--@click="handleClick">-->
      <!--<div class="layui-select-title">-->
        <!--<input type="text" placeholder="请选择省" value="浙江省" readonly="" class="layui-input layui-unselect">-->
        <!--<i class="layui-edge"></i>-->
      <!--</div>-->
      <!--<dl class="layui-anim layui-anim-upbit" style="">-->
        <!--<dd lay-value="" class="layui-select-tips">请选择省</dd>-->
        <!--<dd lay-value="浙江" class="layui-this">浙江省</dd>-->
        <!--<dd lay-value="你的工号" class="">江西省</dd>-->
        <!--<dd lay-value="你最喜欢的老师" class="">福建省</dd>-->
      <!--</dl>-->
    <!--</div>-->
  </span>



</template>

<script>
  export default {
    name: 'layui-select',
    props: {
      disabled: Boolean,
      value: [String, Number],
      open: Boolean,
      label: Object,
      valueTag: String,
      textTag: String
    },
    data: function () {
      return {
        selected: false,
        selectText: ''
      }
    },
    methods: {
      handleClick: function () {
        if (!this.disabled) {
          this.open = !this.open
        }
      },
      selectOption: function (item) {
        this.value = item.value
        this.selectText = item.text
      }
    }
  }
</script>

<style>

</style>
