<lay-date-picker
    v-model="value1"
    type="date"
    placeholder="选择日期">
</lay-date-picker>

<script>
export default {
  name: "DataPicker",
  data(){
      return {
         value1: '' 
      }
  }
};
</script>