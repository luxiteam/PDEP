<template>
    <div class="graphical">
        <div class="chart-left">
            <!--业务交换量排名饼图统计-->
            <div id="depart-pie"></div>
        </div>
        <!--业务交换量排名饼图统计-->
        <div class="right-list">
            <div class="list-top clearfix">
                <!--统计范围-->
                <!--统计范围-->
            </div>
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
                <div class="chart-inner" id="depart-sort"></div>
            </div>
        </div>
    </div>
</template>

<script>
import echarts from 'echarts';
export default {
  mounted() {
    this.pie_chart("depart-pie", " ", this.chart_data);
    this.list_sort(
      "depart-sort",
      "#bbb",
      "#757e81",
      [
        "下城区",
        "省民政局",
        "省教育局",
        "湖州市",
        "杭州市",
        "嘉兴市",
        "台州市",
        "省林业局",
        "温州市",
        "西湖区"
      ],
      [230, 299, 321, 430, 520, 760, 968, 1029, 1167, 1399]
    );
  },
  data() {
    return {
      chart_data: [
        {
          name: "省发改委",
          value: 1600
        },
        {
          name: "杭州市",
          value: 200
        },
        {
          name: "省公安局",
          value: 1000
        },
        {
          name: "湖州市",
          value: 500
        },
        {
          name: "宁波市",
          value: 800
        },
        {
          name: "台州市",
          value: 1200
        },
        {
          name: "省经信委",
          value: 700
        },
        {
          name: "省司法局",
          value: 1500
        },
        {
          name: "温州市",
          value: 300
        },
        {
          name: "衢州市",
          value: 1000
        },
        {
          name: "绍兴市",
          value: 2000
        },
        {
          name: "嘉兴市",
          value: 300
        },
        {
          name: "省安全局",
          value: 600
        },
        {
          name: "下城区",
          value: 900
        },
        {
          name: "滨江区",
          value: 300
        },
        {
          name: "余杭区",
          value: 800
        }
      ]
    };
  },
  methods: {
    pie_chart(div_id, chart_name, chart_data) {
      var rose_pie = echarts.init(document.getElementById(div_id));
      var option = {
        tooltip: {
          trigger: "item",
          formatter: function(params) {
            var tips =
              params.name +
              " : <br>" +
              params.value +
              " ( " +
              params.percent +
              "% ) ";
            return tips;
          }
        },
        series: [
          {
            name: chart_name,
            type: "pie",
            radius: ["45%", "60%"],
            center: ["50%", "50%"],
            itemStyle: {
              normal: {
                borderWidth: 0.6,
                borderColor: "#fff",
                label: {
                  show: true,
                  position: "outer",
                  formatter: function(params) {
                    var tips =
                      params.name +
                      " : " +
                      parseFloat(params.percent).toFixed(1) +
                      " %";
                    return tips;
                  },
                  textStyle: {
                    fontSize: 12
                  }
                },
                labelLine: {
                  show: true,
                  length: 5
                }
              }
            },
            data: chart_data
          }
        ],
        color: [
          "#fbbb3f",
          "#f1b488",
          "#8ae6b6",
          "#3fca79",
          "#047036",
          "#298151",
          "#0eac57",
          "#6babce",
          "#489ecd",
          "#2a5975",
          "#166c9b",
          "#fac17c",
          "#f0ad42",
          "#9d5908",
          "#b67d38",
          "#f38f15",
          "#f9754f",
          "#9e2906",
          "#b75538",
          "#f34715",
          "#eb8060",
          "#46aaca",
          "#78bbd1",
          "#fbbb3f"
        ]
      };
      rose_pie.setOption(option);
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

<style>
</style>
