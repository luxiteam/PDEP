<template>
  <div class="tabs">
    <el-tabs type="border-card">
      <el-tab-pane label="交换日分布统计">
        <div class="chart-left">
          <!--圆盘开始-->
          <div class="left_pie" id="user_num_month"></div>
          <div class="center-data">
            <span>12312</span>
          </div>
        </div>
        <!--圆盘结束-->
        <div class="right-list">
          <div class="date-all">
            <div class="month-select">
              <b class="left-arrow"></b>
              <ul>
                <li>1月</li>
                <li>2月</li>
                <li>3月</li>
                <li>4月</li>
                <li class="cur">5月</li>
                <li>6月</li>
                <li>7月</li>
                <li>8月</li>
                <li>9月</li>
                <li>10月</li>
                <li>11月</li>
                <li>12月</li>
              </ul>
              <b class="right-arrow disabled"></b>
            </div>
          </div>
          <div class="sort-chart">
            <div class="chart-inner" id="list-sort"></div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="部门交换量排名">
  
      </el-tab-pane>
      <el-tab-pane label="业务交换量排名">
  
      </el-tab-pane>
      <el-tab-pane label="异常监控">
  
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  mounted() {
    this.user_num_month();
    this.list_sort(
      "list-sort",
      "#bbb",
      "#8cd2e8",
      [
        "5月3日",
        "5月10日",
        "5月1日",
        "5月9日",
        "5月2日",
        "5月4日",
        "5月5日",
        "5月6日",
        "5月12日",
        "5月8日"
      ],
      [230, 299, 321, 430, 520, 760, 968, 1029, 1167, 1399]
    );
  },
  data() {
    return {};
  },
  props: ["tabList"],
  methods: {
    user_num_month() {
      var myChart5 = this.get_myChart("user_num_month");
      //高亮日期
      var cur_month = "1";
      var cur_val = 0;
      var option = {
        backgroundColor: "#5bbfde",
        tooltip: {
          show: true,
          formatter: function(param) {
            $(".center-data span").html(param["value"]);
          }
        },
        angleAxis: {
          type: "category",
          data: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30",
            "31"
          ],
          axisLine: {
            show: true,
            lineStyle: {
              color: "#dcf2f8"
            }
          },
          axisLabel: {
            color: "#fff"
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#dcf2f8"
            }
          }
        },
        radiusAxis: {
          show: false
        },
        polar: {},
        series: [
          {
            type: "bar",
            itemStyle: {
              normal: {
                color: function(param) {
                  if (param["name"] == cur_month) {
                    cur_val = param["value"];
                  }
                  $(".center-data span").html(cur_val);
                  return param["name"] == cur_month ? "#9861e7" : "#def2f8";
                }
              },
              emphasis: {
                color: "#9861e7"
              }
            },
            data: [
              8020,
              7102,
              9310,
              4194,
              6013,
              5025,
              3911,
              3819,
              7310,
              9001,
              10282,
              9021
            ],
            coordinateSystem: "polar"
          }
        ]
      };
      myChart5.setOption(option);
    },

    list_sort(div_id, color1, color2, left_data, data_val) {
      var myChart1 = this.get_myChart(div_id);
      var option = {
        tooltip: {
          trigger: "axis"
        },
        grid: {
          x: 80,
          x2: 20,
          y: 20,
          y2: 20
        },
        calculable: true,
        xAxis: [
          {
            type: "value",
            axisLabel: {
              textStyle: {
                fontSize: 11,
                color: "#666"
              }
            }
          }
        ],
        yAxis: [
          {
            type: "category",
            splitLine: {
              lineStyle: {
                type: "dotted",
                width: 1,
                color: "#ccc"
              }
            },
            axisLabel: {
              textStyle: {
                fontSize: 11,
                color: "#666"
              }
            },
            data: left_data
          }
        ],
        series: [
          {
            name: "交换量",
            type: "bar",
            itemStyle: {
              normal: {
                //color: '#8cd2e8',
                color: function(params) {
                  if (params.dataIndex % 2 == 0) {
                    return color1;
                  } else {
                    return color2;
                  }
                  console.log(params.dataIndex % 2 == 0);
                },
                label: {
                  show: true,
                  position: "right",
                  textStyle: {
                    fontSize: 12
                  }
                }
              }
            },
            barWidth: "8",
            data: data_val
          }
        ]
      };
      myChart1.setOption(option);
    },

    get_myChart(ele_ID) {
      return echarts.getInstanceByDom(document.getElementById(ele_ID)) ===
        undefined
        ? echarts.init(document.getElementById(ele_ID))
        : echarts.getInstanceByDom(document.getElementById(ele_ID));
    }
  }
};
</script>

<style lang="postcss">
.tabs {
  & .el-tabs--border-card {
    background: none;
    border: none;
    box-shadow: none;
    & > .el-tabs__header {
      background: none;
      border-bottom: 0;
    }
    & > .el-tabs__content {
      background: #fff;
      min-height: 450px;
    }
    & > .el-tabs__header .el-tabs__item.is-active {
      border: 0;
      color: #222;
      &:before {
        background: #40cbcc;
      }
    }
    & .el-tabs__item {
      border: 0;
      transition: inherit;
      width: 200px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      font-size: 16px;
      padding: 0 30px;
      height: 60px;
      line-height: 60px;
      margin-right: 10px !important;
      background: #e1e1e1;
      color: #555;
      font-weight: 700;
      &:before {
        content: "";
        display: inline-block;
        width: 3px;
        height: 20px;
        background: #555;
        vertical-align: -4px;
        margin-right: 10px;
      }
    }
  }
  &
    .el-tabs--border-card
    > .el-tabs__header
    .el-tabs__item:not(.is-disabled):hover {
    color: #333;
  }
}

.chart-left {
  width: 400px;
  float: left;
  position: relative;
}

.right-list {
  width: 650px;
  float: left;
  position: relative;
}

#user_num_month {
  width: 400px;
  height: 400px;
  border-radius: 50%;
}

.center-data {
  width: 90px;
  height: 90px;
  background: rgba(255, 255, 255, 0.95);
  border: #40cbcc 5px solid;
  position: absolute;
  left: 35%;
  top: 35%;
  z-index: 99;
  border-radius: 50%;
  padding: 8px;
  & span {
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 62px;
    border-radius: 50%;
    background: #5bbfde;
    color: #fff;
    font-size: 13px;
  }
}

.date-all {
  position: relative;
  margin: 10px 10px 0 0;
  user-select: none;
  z-index: 13;
  & span {
    display: block;
    width: 80px;
    line-height: 30px;
    font-size: 14px;
    color: #333;
    float: left;
    text-align: center;
    cursor: pointer;
  }
}
.month-select {
  border: #bbb 1px solid;
  line-height: 28px;
  margin-left: 80px;
  border-radius: 3px;
  text-align: center;
  background: #fff;
  position: relative;
  & ul {
    margin: 0 25px;
    height: 30px;
    padding-top: 5px;
    & li {
      display: block;
      width: 40px;
      font-size: 12px;
      color: #333;
      border-radius: 8px;
      line-height: 18px;
      height: 20px;
      float: left;
      cursor: pointer;
      border: #fff 1px solid;
      &:hover {
        background: #e5e5e5;
      }
      & li.cur {
        display: inline-block;
        background: #8cd2e8;
        color: #fff;
      }
    }
  }
  & b {
    display: inline-block;
    cursor: pointer;
    width: 8px;
    height: 8px;
    border-left: #888 2px solid;
    border-top: #888 2px solid;
    position: absolute;
  }
  & .disabled {
    border-left: #ddd 2px solid;
    border-top: #ddd 2px solid;
  }
  & b.left-arrow {
    left: 10px;
    top: 11px;
    transform: rotate(-45deg);
  }
  & b.right-arrow {
    right: 10px;
    top: 11px;
    transform: rotate(135deg);
  }
}
.chart-inner {
  width: 650px;
  height: 350px;
}
</style>
