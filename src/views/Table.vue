<template>
  <div>
    <lay-block>表格是一个大工程，bug肯定会有，欢迎提交bug。。</lay-block>
    <lay-block
      title="默认表格"
      style="margin-top: 20px;"
    />

    <lay-table :data="tableData">
      <lay-table-column
        prop="name"
        label="人物"
        :width="300"
      />
      <lay-table-column
        prop="nation"
        label="民族"
        :width="150"
      />
      <lay-table-column
        prop="date"
        label="出场时间"
        :width="200"
      />
      <lay-table-column
        prop="motto"
        label="格言"
      />
    </lay-table>

    <lay-block
      title="行边框表格"
      style="margin-top: 50px;"
    />
    <lay-table
      :data="tableData"
      skin="line"
    >
      <lay-table-column
        prop="name"
        label="人物"
        :width="300"
      />
      <lay-table-column
        prop="nation"
        label="民族"
        :width="150"
      />
      <lay-table-column
        prop="date"
        label="出场时间"
        :width="200"
      />
      <lay-table-column
        prop="motto"
        label="格言"
      />
    </lay-table>
    <lay-block
      title="列边框表格"
      style="margin-top: 50px;"
    />
    <lay-table
      :data="tableData"
      skin="row"
      :even="true"
    >
      <lay-table-column
        prop="name"
        label="人物"
        :width="300"
      />
      <lay-table-column
        prop="nation"
        label="民族"
        :width="150"
      />
      <lay-table-column
        prop="date"
        label="出场时间"
        :width="200"
      />
      <lay-table-column
        prop="motto"
        label="格言"
      />
    </lay-table>
    <lay-block
      title="无边框表格"
      style="margin-top: 50px;"
    />
    <lay-table
      :data="tableData"
      skin="nob"
      :even="true"
    >
      <lay-table-column
        prop="name"
        label="人物"
        :width="300"
      />
      <lay-table-column
        prop="nation"
        label="民族"
        :width="150"
      />
      <lay-table-column
        prop="date"
        label="出场时间"
        :width="200"
      />
      <lay-table-column
        prop="motto"
        label="格言"
      />
    </lay-table>
    <lay-block
      title="其它尺寸表格"
      style="margin-top: 50px;"
    />
    <lay-table
      :data="tableData"
      size="lg"
    >
      <lay-table-column
        prop="name"
        label="人物"
        :width="300"
      />
      <lay-table-column
        prop="nation"
        label="民族"
        :width="150"
      />
      <lay-table-column
        prop="date"
        label="出场时间"
        :width="200"
      />
      <lay-table-column
        prop="motto"
        label="格言"
      />
    </lay-table>
    <lay-table
      :data="tableData"
      size="sm"
    >
      <lay-table-column
        prop="name"
        label="人物"
        :width="300"
      />
      <lay-table-column
        prop="nation"
        label="民族"
        :width="150"
      />
      <lay-table-column
        prop="date"
        label="出场时间"
        :width="200"
      />
      <lay-table-column
        prop="motto"
        label="格言"
      />
    </lay-table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  data () {
    return {
      tableData: [
        {
          name: '贤心',
          nation: '汉族',
          date: '1989-10-14',
          motto: '人生似修行'
        },
        {
          name: '张爱玲',
          nation: '汉族',
          date: '1920-09-30',
          motto:
            '于千万人之中遇见你所遇见的人，于千万年之中，时间的无涯的荒野里…'
        },
        {
          name: 'Helen Keller',
          nation: '拉丁美裔',
          date: '1880-06-27',
          motto: 'Life is either a daring adventure or nothing.'
        },
        {
          name: '岳飞',
          nation: '汉族',
          date: '1103-北宋崇宁二年',
          motto: '教科书再滥改，也抹不去“民族英雄”的事实'
        },
        {
          name: '孟子',
          nation: '华夏族（汉族）',
          date: '公元前-372年',
          motto: '猿强，则国强。国强，则猿更强！'
        }
      ]
    };
  }
};
</script>

<style scoped></style>
