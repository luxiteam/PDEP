<template>
    <div class="graphical">
        <div class="chart-left">
            <!--业务交换量排名饼图统计-->
            <div id="nodeShow">
                <ul>
                    <li><span>省发改委</span>
                        <h6>2234</h6>
                    </li>
                    <li><span>杭州市</span>
                        <h6>1245</h6>
                    </li>
                    <li><span>下城区</span>
                        <h6>816</h6>
                    </li>
                    <li><span>省林业局</span>
                        <h6>586</h6>
                    </li>
                    <li><span>温州市</span>
                        <h6>434</h6>
                    </li>
                    <li><span>省公安局</span>
                        <h6>134</h6>
                    </li>
                    <li><span>嘉兴市</span>
                        <h6>93</h6>
                    </li>
                    <li><span>西湖区</span>
                        <h6>66</h6>
                    </li>
                </ul>
            </div>
            <!--业务交换量排名饼图统计-->
        </div>
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
                <div class="chart-inner" id="key-sort"></div>
            </div>
        </div>
    </div>
</template>

<script>

import echarts from 'echarts';

export default {
  mounted() {
    this.circle();
    this.list_sort(
      "key-sort",
      "#bbb",
      "#b790ee",
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
  methods: {
    circle() {
      //散点分布
      var largeC = 160,
        centerC = 100,
        smallC = 70,
        left = $("#nodeShow").width() - 80,
        bottom = $("#nodeShow").height() - 50,
        x = 80,
        y = 10;
      var li_val = new Array(),
        max_val = parseInt(
          $("#nodeShow li")
            .eq(1)
            .find("h6")
            .html()
        ),
        min_val = max_val;
      for (var i = 0; i < $("#nodeShow li").length; i++) {
        li_val[i] = parseInt(
          $("#nodeShow li")
            .eq(i)
            .find("h6")
            .html()
        );
        if (
          parseInt(
            $("#nodeShow li")
              .eq(i)
              .find("h6")
              .html()
          ) > max_val
        ) {
          max_val = parseInt(
            $("#nodeShow li")
              .eq(i)
              .find("h6")
              .html()
          );
        }
        if (
          parseInt(
            $("#nodeShow li")
              .eq(i)
              .find("h6")
              .html()
          ) < min_val
        ) {
          min_val = parseInt(
            $("#nodeShow li")
              .eq(i)
              .find("h6")
              .html()
          );
        }
      }
      var mid1_val = (max_val + min_val) / 3 * 2,
        mid2_val = (max_val + min_val) / 3;
      $("#nodeShow li").each(function(index, li) {
        if (
          parseInt(
            $(li)
              .find("h6")
              .html()
          ) > mid1_val
        ) {
          $(li).addClass("bigCirle");
          x = randomC(0, left - largeC);
          y = randomC(0, bottom - largeC);
        } else if (
          mid1_val >
            parseInt(
              $(li)
                .find("h6")
                .html()
            ) &&
          parseInt(
            $(li)
              .find("h6")
              .html()
          ) >= mid2_val
        ) {
          $(li).addClass("midCirle");
          x = randomC(0, left - centerC);
          y = randomC(0, bottom - centerC);
        } else {
          $(li).addClass("smallCirle");
          x = randomC(0, left - smallC);
          y = randomC(0, bottom - smallC);
        }
        $(li).css({
          left: x,
          top: y
        });
      });

      function randomC(minV, maxV) {
        return Math.floor(minV + Math.random() * (maxV - minV));
      }
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
          undefined ?
          echarts.init(document.getElementById(ele_ID)) :
          echarts.getInstanceByDom(document.getElementById(ele_ID));
      }
  }
};
</script>

<style>
</style>
