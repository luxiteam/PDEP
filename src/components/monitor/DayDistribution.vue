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
        <el-select v-model="yearIndex" class="year-select">
          <el-option v-for="item in yearList" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <div class="month-select">
          <b :class="monthIndex==0?'left-arrow disabled':'left-arrow'" @click="prevMonth"></b>
          <ul>
            <li v-for="(item,index) in monthList" :key="index" :class="monthIndex==index?'cur':''" @click="selectMonth(index)">{{item}}</li>
          </ul>
          <b :class="monthIndex==11?'right-arrow disabled':'right-arrow'" @click="nextMonth"></b>
        </div>
      </div>
      <div class="sort-chart">
        <div class="chart-inner" id="list-sort"></div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {
      monthList: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      ],
      yearList: [
        {
          value: "1",
          label: "2018"
        },
        {
          value: "2",
          label: "2017"
        },
        {
          value: "3",
          label: "2016"
        },
        {
          value: "4",
          label: "2015"
        },
        {
          value: "5",
          label: "2014"
        },
        {
          value: "6",
          label: "2013"
        },
        {
          value: "7",
          label: "2012"
        },
        {
          value: "8",
          label: "2011"
        }
      ],
      monthIndex: 0,
      isState: false,
      yearIndex: ""
    };
  },
  created() {
    this.yearIndex = new Date().getUTCFullYear();
    this.monthIndex = new Date().getUTCMonth();
    let month = new Date().getUTCMonth() + 1;
    month = month < 10 ? "0" + month : month;
    let date = this.yearIndex + "-" + month;
    this.loderData(date);
  },
  mounted() {},
  methods: {
    loderData(date) {
      console.log(date)
      this.$store.dispatch("exDaySta", { date: date }).then(res => {
        console.log(res.data);
        let pie = res.data.pie;
        let bar = res.data.bar;
        let pieDate = [],
          pieAmount = [],
          barDate = [],
          barAmount = [];
        for (let i = 0; i < pie.length; i++) {
          pieDate.push(pie[i].date);
          pieAmount.push(pie[i].exAmount);
        }
        for (let i = 0; i < bar.length; i++) {
          bar[i].date = this.monthIndex + 1 + "月" + bar[i].date + "日";
          barDate.push(bar[i].date);
          barAmount.push(bar[i].exAmount);
        }
        this.user_num_month(pieDate, pieAmount);
        this.list_sort("list-sort", "#bbb", "#8cd2e8", barDate, barAmount);
      });
    },
    toggle() {
      this.isState = !this.isState;
    },
    prevMonth() {
      if (this.monthIndex > 0) {
        this.monthIndex--;
        let month = this.monthIndex + 1;
        month = month < 10 ? "0" + month : month;
        let date = this.yearIndex + "-" + month;
        this.loderData(date);
      }
    },
    nextMonth() {
      if (this.monthIndex < 11) {
        this.monthIndex++;
        let month = this.monthIndex + 1;
        month = month < 10 ? "0" + month : month;
        let date = this.yearIndex + "-" + month;
        this.loderData(date);
      }
    },
    selectMonth(index) {
      this.monthIndex = index;
      let month = this.monthIndex + 1;
      month = month < 10 ? "0" + month : month;
      let date = this.yearIndex + "-" + month;
      this.loderData(date);
    },
    user_num_month(date, amount) {
      let self = this;
      var myChart5 = this.get_myChart("user_num_month");
      //高亮日期

      var cur_month = new Date().getUTCDate();
      var cur_val = 0;
      let option = {
        backgroundColor: "#5bbfde",
        tooltip: {
          show: true,
          formatter: function(param) {
            $(".center-data span").html(param["value"]);
          }
        },
        angleAxis: {
          type: "category",
          data: date,
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
            data: amount,
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
