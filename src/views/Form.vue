<template>
  <div>
    <lay-block>本模块与layui的验证方式完全不同。</lay-block>
    <lay-block color="#FFB800">
      表单验证有一些小问题
    </lay-block>
    <lay-block title="表单集合演示" />
    <lay-form
      ref="form"
      :model="form"
      :rules="rules"
    >
      <lay-form-item
        label="单行输入框"
        prop="first"
        block
      >
        <lay-input
          v-model="form.first"
          placeholder="请输入标题"
        />
      </lay-form-item>
      <lay-form-item
        label="验证必填项"
        prop="second"
        block
      >
        <lay-input
          v-model="form.second"
          placeholder="请输入"
        />
      </lay-form-item>

      <lay-row>
        <lay-col :xs="2">
          <lay-form-item
            label="验证手机号"
            prop="mobile"
            block
          >
            <lay-input
              v-model="form.mobile"
              placeholder="请输入手机号"
            />
          </lay-form-item>
        </lay-col>

        <lay-col :xs="2">
          <lay-form-item
            label="验证邮箱"
            prop="email"
            block
          >
            <lay-input
              v-model="form.email"
              placeholder="请输入邮箱"
            />
          </lay-form-item>
        </lay-col>
      </lay-row>

      <lay-row>
        <lay-col :xs="2">
          <lay-form-item
            label="多规则验证"
            prop="more"
            block
          >
            <lay-input
              v-model="form.more"
              placeholder="请输入"
            />
          </lay-form-item>
        </lay-col>
        <lay-col :xs="2">
          <lay-form-item
            label="验证链接"
            prop="url"
            block
          >
            <lay-input
              v-model="form.url"
              placeholder="请输入链接"
            />
          </lay-form-item>
        </lay-col>
      </lay-row>

      <lay-form-item
        label="验证身份证"
        prop="idCode"
        block
      >
        <lay-input
          v-model="form.idCode"
          placeholder="请输入身份证号"
        />
      </lay-form-item>

      <lay-form-item
        label="自定义验证"
        word-aux="请填写6到12位密码"
        prop="password"
      >
        <lay-input
          v-model="form.password"
          type="password"
          placeholder="请输入密码"
        />
      </lay-form-item>

      <lay-form-item label="范围">
        <lay-input
          v-model="form.start"
          placeholder="¥"
          style="width: 100px"
        />
        <div class="layui-form-mid">
          -
        </div>
        <lay-input
          v-model="form.end"
          placeholder="¥"
          style="width: 100px"
        />
      </lay-form-item>

      <lay-form-item
        label="单行选择框"
        block
      >
        <lay-select
          v-model="selectValue"
          :data="select"
          :prop="{
            lable: 'text',
            value: 'id'
          }"
          placeholder="请选择"
          @change="selectChange"
        />
      </lay-form-item>

      <lay-row>
        <lay-col :xs="3">
          <lay-form-item label="分组选择框">
            <lay-select
              v-model="form.groupValue"
              :data="groups"
              :group="true"
              :prop="{
                lable: 'text',
                value: 'id'
              }"
              placeholder="请选择问题"
              @change="selectChange"
            />
          </lay-form-item>
        </lay-col>
      </lay-row>
      <lay-form-item
        label="联动选择框"
        word-aux="此处只是演示联动排版，并未做联动交互"
      >
        <lay-select
          v-model="form.provinceId"
          :data="provinces"
          :prop="{
            lable: 'text',
            value: 'id'
          }"
          placeholder="请选择省"
        />
        <lay-select
          v-model="form.cityId"
          :data="citys"
          :prop="{
            lable: 'text',
            value: 'id'
          }"
          placeholder="请选择市"
        />
        <lay-select
          v-model="form.areaId"
          :data="areas"
          :prop="{
            lable: 'text',
            value: 'id'
          }"
          placeholder="请选择区/县"
        />
      </lay-form-item>

      <lay-form-item
        label="复选框"
        block
      >
        <lay-checkbox
          v-model="form.checkbox"
          label="4"
        >
          写作
        </lay-checkbox>
        <lay-checkbox
          v-model="form.checkbox"
          label="5"
        >
          阅读
        </lay-checkbox>
        <lay-checkbox
          v-model="form.checkbox"
          label="6"
          disabled
        >
          游戏
        </lay-checkbox>
      </lay-form-item>

      <lay-form-item
        label="原始复选框"
        block
      >
        <lay-checkbox
          v-model="form.checkbox"
          label="1"
          skin="primary"
        >
          写作
        </lay-checkbox>
        <lay-checkbox
          v-model="form.checkbox"
          label="2"
          skin="primary"
        >
          阅读
        </lay-checkbox>
        <lay-checkbox
          v-model="form.checkbox"
          label="3"
          skin="primary"
          disabled
        >
          游戏
        </lay-checkbox>
      </lay-form-item>

      <lay-form-item label="开关-默认关">
        <lay-switch
          v-model="form.open"
          active-value="100"
          inactive-value="0"
        />
      </lay-form-item>

      <lay-form-item label="开关-默认开">
        <lay-switch
          v-model="form.close"
          active-value="100"
          inactive-value="0"
        />
      </lay-form-item>

      <lay-form-item label="单选框">
        <lay-radio
          v-model="radio"
          label="1"
        >
          男
        </lay-radio>
        <lay-radio
          v-model="radio"
          label="2"
        >
          女
        </lay-radio>
        <lay-radio
          v-model="radio"
          label="4"
          disabled
        >
          禁用
        </lay-radio>
      </lay-form-item>

      <lay-form-item
        label="文本域"
        block
      >
        <lay-textarea
          v-model="textarea"
          placeholder="请输入内容"
        />
      </lay-form-item>
      <lay-form-item
        label=" "
        block
      >
        <lay-button @click="submit">
          立即提交
        </lay-button>
      </lay-form-item>
    </lay-form>

    <lay-block title="初始赋值演示" />
    <lay-block color="#FF5722">
      双向数据绑定，暂时不稳定
    </lay-block>

    <lay-block title="方框风格的表单集合" />
    <lay-form
      ref="form"
      :model="form"
      :rules="rules"
    >
      <lay-form-item
        label="单行输入框"
        prop="first"
        block
        border
      >
        <lay-input
          v-model="form.first"
          placeholder="请输入标题"
        />
      </lay-form-item>
      <lay-form-item
        label="验证必填项"
        prop="second"
        block
        border
      >
        <lay-input
          v-model="form.second"
          placeholder="请输入"
        />
      </lay-form-item>

      <lay-row>
        <lay-col :xs="2">
          <lay-form-item
            label="验证手机号"
            prop="mobile"
            block
            border
          >
            <lay-input
              v-model="form.mobile"
              placeholder="请输入手机号"
            />
          </lay-form-item>
        </lay-col>

        <lay-col :xs="2">
          <lay-form-item
            label="验证邮箱"
            prop="email"
            block
            border
          >
            <lay-input
              v-model="form.email"
              placeholder="请输入邮箱"
            />
          </lay-form-item>
        </lay-col>
      </lay-row>

      <lay-row>
        <lay-col :xs="2">
          <lay-form-item
            label="多规则验证"
            prop="more"
            block
            border
          >
            <lay-input
              v-model="form.more"
              placeholder="请输入"
            />
          </lay-form-item>
        </lay-col>
        <lay-col :xs="2">
          <lay-form-item
            label="验证链接"
            prop="url"
            block
            border
          >
            <lay-input
              v-model="form.url"
              placeholder="请输入链接"
            />
          </lay-form-item>
        </lay-col>
      </lay-row>

      <lay-form-item
        label="验证身份证"
        prop="idCode"
        block
        border
      >
        <lay-input
          v-model="form.idCode"
          placeholder="请输入身份证号"
        />
      </lay-form-item>

      <lay-form-item
        label="自定义验证"
        word-aux="请填写6到12位密码"
        prop="password"
        border
      >
        <lay-input
          v-model="form.password"
          type="password"
          placeholder="请输入密码"
        />
      </lay-form-item>

      <lay-form-item
        label="范围"
        border
      >
        <lay-input
          v-model="form.start"
          placeholder="¥"
          style="width: 100px"
        />
        <div class="layui-form-mid">
          -
        </div>
        <lay-input
          v-model="form.end"
          placeholder="¥"
          style="width: 100px"
        />
      </lay-form-item>

      <lay-form-item
        label="单行选择框"
        block
        border
      >
        <lay-select
          v-model="selectValue"
          :data="select"
          :prop="{
            lable: 'text',
            value: 'id'
          }"
          placeholder="请选择"
          @change="selectChange"
        />
      </lay-form-item>

      <lay-row>
        <lay-col :xs="3">
          <lay-form-item
            label="分组选择框"
            border
          >
            <lay-select
              v-model="form.groupValue"
              :data="groups"
              :group="true"
              :prop="{
                lable: 'text',
                value: 'id'
              }"
              placeholder="请选择问题"
              @change="selectChange"
            />
          </lay-form-item>
        </lay-col>
      </lay-row>
      <lay-form-item
        label="联动选择框"
        word-aux="此处只是演示联动排版，并未做联动交互"
        border
      >
        <lay-select
          v-model="form.provinceId"
          :data="provinces"
          :prop="{
            lable: 'text',
            value: 'id'
          }"
          placeholder="请选择省"
        />
        <lay-select
          v-model="form.cityId"
          :data="citys"
          :prop="{
            lable: 'text',
            value: 'id'
          }"
          placeholder="请选择市"
        />
        <lay-select
          v-model="form.areaId"
          :data="areas"
          :prop="{
            lable: 'text',
            value: 'id'
          }"
          placeholder="请选择区/县"
        />
      </lay-form-item>

      <lay-form-item
        label="复选框"
        block
        border
      >
        <lay-checkbox
          v-model="form.checkbox"
          label="4"
        >
          写作
        </lay-checkbox>
        <lay-checkbox
          v-model="form.checkbox"
          label="5"
        >
          阅读
        </lay-checkbox>
        <lay-checkbox
          v-model="form.checkbox"
          label="6"
          disabled
        >
          游戏
        </lay-checkbox>
      </lay-form-item>

      <lay-form-item
        label="原始复选框"
        block
        border
      >
        <lay-checkbox
          v-model="form.checkbox"
          label="1"
          skin="primary"
        >
          写作
        </lay-checkbox>
        <lay-checkbox
          v-model="form.checkbox"
          label="2"
          skin="primary"
        >
          阅读
        </lay-checkbox>
        <lay-checkbox
          v-model="form.checkbox"
          label="3"
          skin="primary"
          disabled
        >
          游戏
        </lay-checkbox>
      </lay-form-item>

      <lay-form-item
        label="开关-默认关"
        border
      >
        <lay-switch
          v-model="form.close"
          active-value="100"
          inactive-value="0"
        />
      </lay-form-item>

      <lay-form-item
        label="开关-默认开"
        border
      >
        <lay-switch
          v-model="form.open"
          active-value="100"
          inactive-value="0"
        />
      </lay-form-item>

      <lay-form-item
        label="单选框"
        border
      >
        <lay-radio
          v-model="radio"
          label="1"
        >
          男
        </lay-radio>
        <lay-radio
          v-model="radio"
          label="2"
        >
          女
        </lay-radio>
        <lay-radio
          v-model="radio"
          label="4"
          disabled
        >
          禁用
        </lay-radio>
      </lay-form-item>

      <lay-form-item
        label="文本域"
        block
        border
      >
        <lay-textarea
          v-model="textarea"
          placeholder="请输入内容"
        />
      </lay-form-item>
      <lay-form-item
        label=" "
        block
      >
        <lay-button @click="submit">
          立即提交
        </lay-button>
      </lay-form-item>
    </lay-form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      form: {
        first: '',
        second: '',
        mobile: '',
        email: '',
        more: '',
        url: '',
        idCode: '',
        password: '',
        start: '',
        end: '',
        groupValue: '',
        provinceId: '',
        cityId: '',
        areaId: '',
        open: '100',
        close: '0',
        checkbox: ['1', '4', '8']
      },
      rules: {
        first: [{ min: 5, message: '最少5个字符' }],
        second: [{ type: 'string', required: true, message: '此为必填项' }],
        mobile: [{ pattern: /^[1][0-9]{10}$/, message: '手机号格式不正确' }],
        email: [{ type: 'email', message: '邮箱格式不正确' }],
        more: [
          { min: 5, message: '最少5个字符' },
          { max: 8, message: '最少8个字符' }
        ],
        url: [{ type: 'url', message: '链接格式不正确' }],
        idCode: [
          {
            pattern: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
            message: '身份证格式不正确'
          }
        ],

        password: [
          { min: 6, message: '请填写6到12位密码' },
          { max: 12, message: '请填写6到12位密码' }
        ]
      },
      radio: 1,
      input: 'test',
      select: [
        {
          id: '00001',
          text: '写作'
        },
        {
          id: '00002',
          text: '阅读'
        },
        {
          id: '00003',
          text: '游戏'
        },
        {
          id: '00004',
          text: '音乐'
        },
        {
          id: '00005',
          text: '旅行'
        }
      ],
      groups: [
        {
          title: '城市记忆',
          data: [
            {
              id: '00001',
              text: '你工作的第一个城市'
            }
          ]
        },
        {
          title: '学生时代',
          data: [
            {
              id: '00002',
              text: '你的工号'
            },
            {
              id: '00003',
              text: '你最喜欢的老师'
            }
          ]
        }
      ],
      provinces: [
        {
          id: '00001',
          text: '山东省'
        },
        {
          id: '00002',
          text: '河南省'
        }
      ],

      citys: [
        {
          id: '00001',
          text: '潍坊市'
        },
        {
          id: '00002',
          text: '青岛市'
        }
      ],

      areas: [
        {
          id: '00001',
          text: '诸城市'
        }
      ],
      selectValue: '00003',
      textarea: '1231223'
    };
  },
  methods: {
    submit () {
      this.$refs.form.validate(res => {
        alert(res ? '验证通过' : '验证不通过');
      });
    },
    selectChange: function (val) {
      console.log(val);
    }
  }
};
</script>

<style scoped></style>
