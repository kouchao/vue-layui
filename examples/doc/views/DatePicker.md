<lay-date-picker
    v-model="value1"
    type="date"
    placeholder="选择日期">
</lay-date-picker>

<lay-date-picker
    v-model="value2"
    type="month"
    placeholder="选择月份">
</lay-date-picker>

<lay-date-picker
    v-model="value3"
    type="year"
    placeholder="选择年">
</lay-date-picker>

<lay-date-picker
    v-model="value4"
    format="YYYY年MM月DD日"
    placeholder="选择格式化">
</lay-date-picker>

<lay-date-picker
    festival
    v-model="value5"
    format="YYYY年MM月DD日"
    placeholder="节日">
</lay-date-picker>
<lay-date-picker
    v-model="value6"
    format="YYYY年MM月DD日"
    :important-days="importantDays"
    placeholder="自定义重要日子">
</lay-date-picker>


<lay-date-picker
    v-model="value7"
    format="YYYY年MM月DD日"
    min="2019-3-10"
    max="2019-8-10"
    placeholder="限制时间">
</lay-date-picker>


<script>
export default {
  name: "DataPicker",
  data(){
      return {
         value1: '',
         value2: '',
         value3: '',
         value4: '',
         value5: '',
         value6: '',
         value7: '',
         importantDays: {
             '1-10': '测试',
             '2-11': '测试',
             '3-12': '测试',
             '4-13': '测试',
             '5-14': '测试',
             '6-15': '测试',
             '7-16': '测试',
             '8-17': '测试',
             '9-18': '测试',
             '10-19': '测试',
             '11-9': '测试',
             '12-8': '测试'
         }
      }
  }
};
</script>