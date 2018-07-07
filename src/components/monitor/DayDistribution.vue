<template>
    <div class="graphical">
        <div class="chart-left">
            <!--圆盘开始-->
    
            <div class="left-pie" id="user_num_month"></div>
    
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
    </div>
</template>

<script>
import echarts from 'echarts';
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
    get_myChart(ele_ID) {
      return echarts.getInstanceByDom(document.getElementById(ele_ID)) ===
        undefined
        ? echarts.init(document.getElementById(ele_ID))
        : echarts.getInstanceByDom(document.getElementById(ele_ID));
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
    }
  }
};
</script>

<style lang="postcss">
</style>
