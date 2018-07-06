<template>
  <div class="tabs"  v-if="moduleBlock">
    <el-tabs v-model='activeName'   type="border-card"    @tab-click="handleClick">
      <el-tab-pane label="交换日分布统计" name="tongji"  id="jktj_rfb" v-if="true">
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
      </el-tab-pane>
      <el-tab-pane label="部门/地方交换量排名" name="local_rank" id="jktj_bmjhl" v-if="true"  >
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
      </el-tab-pane>
      <el-tab-pane label="业务交换量排名" name="business_rank" id="jktj_ywjhl" v-if="true" >
        <div class="graphical">
          <div class="chart-left">
            <!--业务交换量排名饼图统计-->
            <div id="business-pie"></div>
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
              <div class="chart-inner" id="business-sort"></div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="重点关注节点" name="focus_node" id="jktj_zdgz" v-if="true" >
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
      </el-tab-pane>
      <el-tab-pane label="异常监控" name="abnormal" id="jktj_ycjk" v-if="true" >
        <div class="abnormal-view">
          <ul>
            <li><span>11</span><b>流量异常</b></li>
            <li><span>45</span><b>节点异常</b></li>
            <li><span>23</span><b>网络异常</b></li>
            <li><span>89</span><b>数据源异常</b></li>
            <li><span>12</span><b>硬盘异常</b></li>
            <li><span>32</span><b>数据异常</b></li>
            <li><span>51</span><b>延迟交换异常</b></li>
            <li><span>9</span><b>数据更新异常</b></li>
            <li><span>1</span><b>任务预算异常</b></li>
            <li><span>10</span><b>清理预警</b></li>
          </ul>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="index" label="序号" width="100">
          </el-table-column>
          <el-table-column prop="bsname" label="异常类型" min-width="180">
          </el-table-column>
          <el-table-column prop="tableName" label="异常发现时间" min-width="180">
          </el-table-column>
          <el-table-column prop="todayReceive" label="异常说明" min-width="180">
          </el-table-column>
        </el-table>
        <Page/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import Page from "~/components/public/Page"
  export default {
    mounted() {
     this.$store
      .dispatch("displayPermissions", {
        parentModule: "jktj"
      })
      .then(res => {
        for (let i = 0; i < res.data.length; i++) {
          let id = res.data[i].moduleNo;
          console.log(id);
          Object.defineProperty(this.moduleBlock, id, {
              value: true
          });
           // document.querySelector(`#${id}`).style.display = "block";
        }
        console.log(this.moduleBlock.jktj_rfb)
      })

      this.user_num_month();
      this.list_sort(
        "list-sort",
        "#bbb",
        "#8cd2e8", [
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
        ], [230, 299, 321, 430, 520, 760, 968, 1029, 1167, 1399]
      );
    },
    components: {
      Page
    },
    data() {
      return {
        moduleBlock:{},
        tableData: [],
        activeName: "tongji",
        chart_data: [{
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
        ],
        business_data: [{
            name: "办件返回",
            value: 1600
          },
          {
            name: "办件上报",
            value: 200
          },
          {
            name: "统一申报",
            value: 1000
          },
          {
            name: "处罚公开",
            value: 500
          },
          {
            name: "裁量信息",
            value: 800
          },
          {
            name: "多证合一",
            value: 1200
          },
          {
            name: "电子证照",
            value: 700
          },
          {
            name: "权力事项",
            value: 1500
          },
          {
            name: "其他八类",
            value: 300
          },
          {
            name: "双打办",
            value: 1000
          },
          {
            name: "数据共享",
            value: 2000
          },
          {
            name: "厅局汇聚",
            value: 300
          },
          {
            name: "投资项目",
            value: 600
          },
          {
            name: "投资返回",
            value: 900
          },
          {
            name: "信用返回",
            value: 300
          },
          {
            name: "行政处罚",
            value: 800
          }
        ]
      };
    },
    props: ["tabList"],
    methods: {
      handleClick(tab, event) {
        console.log(tab.name);
        if (tab.name == "tongji") {} else if (tab.name == "local_rank") {
          this.pie_chart("depart-pie", " ", this.chart_data);
          this.list_sort(
            "depart-sort",
            "#bbb",
            "#757e81", [
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
            ], [230, 299, 321, 430, 520, 760, 968, 1029, 1167, 1399]
          );
        } else if (tab.name == "business_rank") {
          this.pie_chart("business-pie", " ", this.business_data);
          this.list_sort(
            "business-sort",
            "#bbb",
            "#5086aa", [
              "处罚下发",
              "行政审批",
              "中介超市",
              "办件返回",
              "办件上报",
              "统一申报",
              "处罚公开",
              "裁量信息",
              "多证合一",
              "电子证照"
            ], [230, 299, 321, 430, 520, 760, 968, 1029, 1167, 1399]
          );
        } else if (tab.name == "focus_node") {
          this.circle();
          this.list_sort(
            "key-sort",
            "#bbb",
            "#b790ee", [
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
            ], [230, 299, 321, 430, 520, 760, 968, 1029, 1167, 1399]
          );
        }
      },
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
          series: [{
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
          }]
        };
        myChart5.setOption(option);
      },
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
          series: [{
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
          }],
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
          xAxis: [{
            type: "value",
            axisLabel: {
              textStyle: {
                fontSize: 11,
                color: "#666"
              }
            }
          }],
          yAxis: [{
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
          }],
          series: [{
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
          }]
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

<style lang="postcss">
  .tabs {
    & .graphical {
      display: flex;
      & .chart-left {
        flex: 1;
        position: relative;
      }
      & .right-list {
        flex: 2;
        position: relative;
      }
    }
  }
  
  #user_num_month {
    width: 400px;
    height: 400px;
    margin: 0 auto;
    border-radius: 50%;
  }
  
  #depart-pie,
  #business-pie {
    width: 500px;
    height: 400px;
    border-radius: 50%;
  }
  
  
  /*散点分布*/
  
  #nodeShow {
    width: 400px;
    height: 400px;
    position: relative;
    & li {
      box-sizing: border-box;
      cursor: pointer;
      position: absolute;
      color: #fff;
      & h6 {
        color: #fff;
      }
    }
  }
  
  @-webkit-keyframes 'bounce' {
    from {}
    50% {
      transform: translateY(-8px);
    }
    to {
      transform: translateY(0);
    }
  }
  
  .bigCirle {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background: #ff6f5c;
    position: absolute;
    color: #fff;
    text-align: center;
    padding-top: 60px;
    font-size: 18px;
    line-height: 24px;
    animation: "bounce" 8s infinite;
  }
  
  .bigCirle h6 {
    font-size: 18px;
    color: #fff;
  }
  
  .midCirle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #38deba;
    position: absolute;
    color: #fff;
    text-align: center;
    padding: 32px 5px 0 5px;
    font-size: 14px;
    line-height: 20px;
    animation: "bounce" 5s infinite;
  }
  
  .midCirle h6 {
    font-size: 14px;
    color: #fff;
  }
  
  .smallCirle {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: #6fc5fe;
    position: absolute;
    color: #fff;
    text-align: center;
    padding: 24px 6px 0 6px;
    font-size: 12px;
    line-height: 13px;
    animation: "bounce" 3s infinite;
  }
  
  #nodeShow li:hover {
    z-index: 999;
  }
  
  .bigCirle:hover {
    border: #ff6f5c 10px solid;
    background: #fff;
    width: 170px;
    height: 170px;
    padding-top: 55px;
    border-radius: 50%;
    margin: -15px 0 0 -15px;
  }
  
  .bigCirle:hover span,
  .bigCirle:hover h6 {
    color: #ff6f5c;
  }
  
  .midCirle:hover {
    border: #38deba 10px solid;
    background: #fff;
    width: 120px;
    height: 120px;
    padding-top: 25px;
    border-radius: 50%;
    margin: -15px 0 0 -15px;
  }
  
  .midCirle:hover span,
  .midCirle:hover h6 {
    color: #38deba;
  }
  
  .smallCirle:hover {
    border: #6fc5fe 8px solid;
    background: #fff;
    width: 80px;
    height: 80px;
    padding-top: 15px;
    border-radius: 50%;
    margin: -15px 0 0 -15px;
  }
  
  .smallCirle:hover span,
  .smallCirle:hover h6 {
    color: #6fc5fe;
  }
  
  
  /*散点分布*/
  
  .center-data {
    width: 60px;
    height: 60px;
    background: rgba(255, 255, 255, 0.95);
    border: #40cbcc 5px solid;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -43px;
    margin-top: -43px;
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
    width: 600px;
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
    width: 700px;
    height: 350px;
  }
  
  .abnormal-view {
    width: 100%;
    margin-bottom: 20px;
    font-size: 14px;
    text-align: center;
    background: #5bbfde;
    padding: 10px 0;
    color: #fff;
    border-radius: 3px;
    & ul {
      & li {
        display: inline-block;
        width: 9%;
        & span {
          display: block;
          font-size: 24px;
          line-height: 20px;
          margin-bottom: 5px;
          height: 20px;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        & b {
          display: block;
          height: 16px;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 13px;
        }
      }
    }
  }
</style>
