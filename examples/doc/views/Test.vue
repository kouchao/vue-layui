<template>
  <div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <lay-select
      :data="[
        {
          id: '00001',
          text: '诸城市'
        }
      ]"
      :prop="{
        lable: 'text',
        value: 'id'
      }"
      placeholder="请选择区/县"
    />

    <button @click="createPopper">
      createPopper
    </button>

    <button @click="updatePopper">
      updatePopper
    </button>
    <button @click="destroyPopper">
      destroyPopper
    </button>

    <!-- <p
      ref="reference"
      class="aaa"
    >
      aaaaaa
    </p>
    <div
      ref="popper"
      class="bbb"
    >
      <p>bbbbbb</p>
      <p>bbbbbb</p>
      <p>bbbbbb</p>
      <p>bbbbbb</p>
      <p>bbbbbb</p>
      <p>bbbbbb</p>
      <p>bbbbbb</p>
    </div> -->
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
import Popper from '@/mixins/popper';

export default {
  mixins: [Popper]
};

</script>

<style scoped>
.aaa {
  position: absolute;
  width: 100px;
  border: 1px solid red
}
.bbb {
  width: 100px;
  background: rgb(78, 67, 67);
}
</style>
