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

<script>
export default {
  name: "DataPicker",
  data(){
      return {
         value1: '',
         value2: '',
         value3: ''
      }
  }
};
</script>