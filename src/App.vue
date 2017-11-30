<template>
  <div id="app">
    <layui-container :fluid="true">
      <layui-row>
        <layui-col :xs="6" :md="5">
          123123
        </layui-col>
        <layui-col :xs="6">
          123132
        </layui-col>
      </layui-row>
    </layui-container>
    <layui-btn>123</layui-btn>
    <layui-btn type="primary">123</layui-btn>
    <layui-btn type="normal">123</layui-btn>
    <layui-btn type="warm">123</layui-btn>
    <layui-btn type="danger" icon="fa fa-bolt" right>123</layui-btn>
    <layui-btn type="disabled" size="lg" radius>123</layui-btn>

    <layui-btn-group>
      <layui-btn type="danger" icon="fa fa-bolt">123</layui-btn>
      <layui-btn type="warm">123</layui-btn>
      <layui-btn type="danger" icon="fa fa-bolt" right>123</layui-btn>
    </layui-btn-group>

    <layui-btn-group>
      <layui-btn type="danger" icon="fa fa-bolt"></layui-btn>
      <layui-btn type="danger" icon="fa fa-bolt" right></layui-btn>
    </layui-btn-group>


    <layui-form >
      <layui-form-item label="输入框">
        <div class="layui-input-block">
          <input type="text" name="title" required  lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input">
        </div>
      </layui-form-item>
      <layui-form-item label="密码框">
        <div class="layui-input-inline">
          <input type="password" name="password" required lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input">
        </div>
        <div class="layui-form-mid layui-word-aux">辅助文字</div>
      </layui-form-item>
      <div class="layui-form-item">
        <label class="layui-form-label">选择框</label>
        <div class="layui-input-block">
          <select name="city" lay-verify="required">
            <option value=""></option>
            <option value="0">北京</option>
            <option value="1">上海</option>
            <option value="2">广州</option>
            <option value="3">深圳</option>
            <option value="4">杭州</option>
          </select>
        </div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">复选框</label>
        <div class="layui-input-block">
          <input type="checkbox" name="like[write]" title="写作">
          <input type="checkbox" name="like[read]" title="阅读" checked>
          <input type="checkbox" name="like[dai]" title="发呆">
        </div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">开关</label>
        <div class="layui-input-block">
          <input type="checkbox" name="switch" lay-skin="switch">
        </div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">单选框</label>
        <div class="layui-input-block">
          <input type="radio" name="sex" value="男" title="男">
          <input type="radio" name="sex" value="女" title="女" checked>
        </div>
      </div>
      <div class="layui-form-item layui-form-text">
        <label class="layui-form-label">文本域</label>
        <div class="layui-input-block">
          <textarea name="desc" placeholder="请输入内容" class="layui-textarea"></textarea>
        </div>
      </div>
      <div class="layui-form-item">
        <div class="layui-input-block">
          <button class="layui-btn" lay-submit lay-filter="formDemo">立即提交</button>
          <button type="reset" class="layui-btn layui-btn-primary">重置</button>
        </div>
      </div>
    </layui-form>
  </div>
</template>

<script>
export default {
  name: 'app',
  created: function () {
    this.testLayui()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
