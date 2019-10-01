<template>
  <table class="layui-table" :lay-skin="skin" :lay-even="even" :lay-size="size">
    <lay-table-colgroup :children="colgroup" />
    <lay-table-header :children="header" />
    <tbody>
      <lay-table-tr v-for="(item,index) in data" :key="index" :children="tr" :data="item" />
      <div style="display: none">
        <slot />
      </div>
    </tbody>
  </table>
</template>

<script>
import LayTableColgroup from "./table-colgroup";
import LayTableHeader from "./table-header";
import LayTableTr from "./table-tr";
//import LayTableColumn from "./table-column";

export default {
  name: "LayTable",
  components: {
    LayTableColgroup,
    LayTableHeader,
    LayTableTr //,
    //LayTableColumn
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    skin: {
      type: String,
      default: ""
    },
    even: {
      type: [Boolean,String],
      default: ""
    },
    size: {
      type: String,
      default: ""
    },
    columns: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      children: [],
      colgroup: [],
      header: [],
      tr: []
    };
  },
  provide() {
    return {
      rootTable: this
    };
  },
  mounted() {
    //console.log(this.$slots)
    let slotStatus = this.$slots.default ? false : true;
    if (!this.$slots.default) {
      //console.log(this.$slots);
      //计算合并把表格
      this.children = this.columns;
    } else {
      this.children = this.$slots.default
        .map(o => o.child)
        .map(a => {
          return {
            prop: a.prop,
            label: a.label,
            width: a.width
          };
        });
    }
    let lastColumns;
    //递归算法
    let stack = colunms => {
      let arry = [];
      colunms.forEach(a => {
        if (!a.children) {
          arry.push(a);
        } else {
          stack(a.children).forEach(b => {
            arry.push(b);
          });
        }
      });
      return arry;
    };
    lastColumns = stack(this.children);
    this.colgroup = lastColumns.filter(o => o.prop).map(o => o.width || "");
    //this.header = this.children.filter(o => o.prop).map(o => o.label || "");
    //console.log(this.children)
    //计算表头
    let headers = [];
    let stack1 = (colunms, index) => {
      if (!colunms) {
        colunms = this.children;
        index = 1;
      }
      let currentIndex = index;
      //console.log(colunms)
      let arry = colunms.filter(a => a.children);

      arry.forEach(element => {
        let nextIndex = stack1(element.children, index + 1);
        if (currentIndex < nextIndex) {
          currentIndex = nextIndex;
        }
      });
      return currentIndex;
    };
    let maxIndex = stack1();
    let seq = 0;
    let stack2 = (colunms, index, parentNode) => {
      let arry = [];
      colunms.forEach(a => {
        seq++;
        let obj = {
          currentNode: a,
          parent: parentNode,
          index: index,
          child: [],
          key: seq
        };
        arry.push(obj);

        if (a.children) {
          stack2(a.children, index + 1, obj).forEach(b => {
            obj.child.push(b);
          });
        }
      });
      return arry;
    };
    let _cArry = stack2(this.children, 1, undefined);

    let stack3 = colunms => {
      let arry = [];
      colunms.forEach(a => {
        if (!a.currentNode.children) {
          arry.push(a);
        } else {
          stack3(a.child).forEach(b => {
            arry.push(b);
          });
        }
      });
      return arry;
    };
    let cLastColumns = stack3(_cArry);
    let getCount = column => {
      if (column.child.length == 0) {
        return 1;
      } else {
        let index = 0;
        column.child.forEach(a => {
          if (a.child.length == 0) {
            index++;
          } else {
            getCount(a);
          }
        });
        return index;
      }
    };
    let _cArry1 = [...cLastColumns];
    for (let index = maxIndex; index > 0; index--) {
      let header = {
        index: index,
        data: []
      };
      headers.unshift(header);
      if (slotStatus) {
        //console.log("x2当前层："+index);
        //console.log(_cArry1)
      }
      header.data = _cArry1.map(a => {
        return {
          name: a.currentNode.label,
          style:a.currentNode.headerStyle,
          colspan: getCount(a),
          rowspan: index - a.index + 1,
          key:a.key
        };
      });
      //清RowSpan
      if (index != maxIndex) {
        let lastHeader = headers[headers.length - 1];

        header.data.forEach(b => {
          for (let index1 = 0; index1 < lastHeader.data.length; index1++) {
            if (lastHeader.data[index1].key == b.key) {
              b.rowspan=lastHeader.data[index1].rowspan;

              lastHeader.data.splice(index1, 1);
              break;
            }
          }

        });

      }

      let arry = [];
      _cArry1.forEach(a => {
        if (slotStatus) {
          //console.log(a);
        }
        if (a.index < index) {
          arry.push(a);
        } else {
          if (
            arry.filter(b => (b.parent ? b.key == a.parent.key : a.parent))
              .length == 0
          ) {
            if (slotStatus) {
              //console.log("z1当前层：" + index);
              //console.log(a);
              //console.log(arry)
            }
            if (a.parent) {
              arry.push(a.parent);
            }
            //arry.push(a.parent)
          }
        }
      });
      _cArry1 = arry;
    }
    this.header = headers;
    this.tr = lastColumns.filter(o => o.prop);
  }
};
</script>

<style scoped></style>
