<template>
  <div class="index">
    <div class="aside">
      <button @click='exportTestData("test")'>导出数据测试</button>
    </div>
    <div class="content">
      <HotTable :root="root" ref="testHot" :settings="hotSettings"></HotTable>
    </div>
  </div>
</template>

<script>
import XLSX from "xlsx";
import { HotTable } from "@handsontable/vue";
import "handsontable/dist/handsontable.full.css";
import { EventBus } from "../utils/eventBus";
let onlyData = "";
export default {
  data() {
    return {
      temp: "",
      root: "test-hot",
      hotSettings: {
        data: [
          //数据可以是二维数组，也可以是数组对象
          ["20080101", 10, 11, 12, 13, true],
          ["20090101", 20, 11, 14, 13, true],
          ["20010101", 30, 15, 12, 13, true],
          ["20010101", 32, 213, 21, 312, true],
          ["20010201", 32, 213, 21, 312, true],
          ["20010301", 32, 213, 21, 312, true],
          ["20010401", 32, 213, 21, 312, true],
          ["20010501", 32, 213, 21, 312, true],
          ["20010601", 32, 213, 21, 312, true]
        ],
        startRows: 11, //行列范围
        startCols: 6,
        minRows: 5, //最小行列
        minCols: 5,
        // maxRows: 150, //最大行列
        maxCols: 20,
        rowHeaders: true, //行表头，可以使布尔值（行序号），可以使字符串（左侧行表头相同显示内容，可以解析html），也可以是数组（左侧行表头单独显示内容）。
        colHeaders: ["题目", "A选项", "B选项", "C选项", "D选项", "答案"], //自定义列表头or 布尔值
        // minSpareCols: 2, //列留白
        minSpareRows: 2, //行留白
        currentRowClassName: "currentRow", //为选中行添加类名，可以更改样式
        currentColClassName: "currentCol", //为选中列添加类名
        autoWrapRow: true, //自动换行
        contextMenu: {
          //自定义右键菜单，可汉化，默认布尔值
          items: {
            row_above: {
              name: "上方插入一行"
            },
            row_below: {
              name: "下方插入一行"
            },
            col_left: {
              name: "左方插入列"
            },
            col_right: {
              name: "右方插入列"
            },
            hsep1: "---------", //提供分隔线
            remove_row: {
              name: "删除行"
            },
            remove_col: {
              name: "删除列"
            },
            make_read_only: {
              name: "只读"
            }
          }
        },
        afterChange(changes, source) {
          //数据改变时触发此方法
          console.log(this.getData());
          console.log(changes);
          console.log(source);
          // console.log("thisssssss", this);
          onlyData = this.getData();
        },
        manualColumnFreeze: true, //手动固定列
        manualColumnMove: true, //手动移动列
        manualRowMove: true, //手动移动行
        manualColumnResize: true, //手工更改列距
        manualRowResize: true, //手动更改行距
        comments: true, //添加注释
        cell: [{ row: 1, col: 1, comment: { value: "this is test" } }],
        customBorders: [], //添加边框
        columnSorting: true, //排序
        stretchH: "all" //根据宽度横向扩展，last:只扩展最后一列，none：默认不扩展
      }
    };
  },
  name: "handsonTable",
  created() {},
  components: {
    HotTable
  },
  methods: {
    saveData() {
      var examData = this.$refs.testHot.table.getData(); //这里要注意，如果使用this.hotSettings.data 保存表格数据，拖拽完以后数据的顺序将不会更新，因此使用 this.$refs.testHot.table.getData(); 来获取数据，获取的数据格式为二维数组。
      console.log("example", examData);
    },
    // 加载新数据
    swapHotData() {
      // The Handsontable instance is stored under the `hotInstance` property of the wrapper component.
      this.$refs.testHot.hotInstance.loadData([["new", "data"]]);
    },
    exportTestData(excelname) {
      // console.log("asdasdasd", this.$refs.testHot);
      // console.log("---------", this.hotSettings.data);
      // EventBus.$emit("exportData", this.hotSettings.data);
      console.log("-----------xxxxxxxxxxaaaaaaaa", onlyData);
      // var self = this;
      var _data = [
        ["id", "name", "value"],
        [1, "sheetjs", 7262],
        [2, "js-xlsx", 6969]
      ];
      var worksheet = XLSX.utils.aoa_to_sheet(_data);
      var new_workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(
        new_workbook,
        worksheet,
        excelname ? excelname : "SheetJS"
      );
      XLSX.writeFile(
        new_workbook,
        excelname ? excelname + ".xlsx" : "sheetjs.xlsx"
      );
    },
    mounted() {
      EventBus.$on("exportData", data => {
        console.log("[][][][][][][][", data);
      });
    }
  }
};
</script>
<style>
.index {
  height: 100%;
  min-height: 400px;
  flex: 1;
  background-color: blue;
  margin: 50px !important;
  display: flex;
}
.index .aside {
  width: 100px !important;
  height: 100%;
  background-color: brown;
}
.index .aside button {
  width: 100px;
}
.index .content {
  position: relative;
  width: 100%;
  height: 100%;
  flex: 1;
  background-color: aquamarine;
  overflow-y: auto;
}
.handsontableInput {
  width: 155px !important;
}
#hot-display-license-info {
  display: none;
}
</style>