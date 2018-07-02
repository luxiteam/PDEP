<template>
  <div class="container-monitor">
    <bread-crumb :bread-list="breadList"></bread-crumb>
    <item-bar :bar-list="barList"></item-bar>
    <data-block :data-list="dataList"></data-block>
    <tab-block :tab-list="tabList"></tab-block>
  </div>
</template>

<script>
import BreadCrumb from "~/components/monitor/BreadCrumb.vue";
import ItemBar from "~/components/monitor/ItemBar.vue";
import DataBlock from "~/components/monitor/DataBlock.vue";
import TabBlock from "~/components/monitor/TabBlock.vue";
export default {
  mounted() {},
  components: {
    BreadCrumb,
    ItemBar,
    DataBlock,
    TabBlock

  },
  data() {
    return {
      breadList:[
        "交换监控",
        "区县详情"
      ],
      barList: [
        {
          name: "区本级"
        },
        {
          name: "区发改委"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        }
      ],
      dataList: [
        {
          leftval: "接入规模",
          num1: "74",
          num2: "11",
          text1: "接入部门",
          text2: "接入业务",
          iclass: "iconfont icon-icon"
        },
        {
          leftval: "交换总量",
          num1: "74",
          num2: "11",
          text1: "总接收量",
          text2: "总发送量",
          iclass: "iconfont icon-jiaohuan1"
        },
        {
          leftval: "当日交换量",
          num1: "74",
          num2: "11",
          text1: "总接收量",
          text2: "总发送量",
          iclass: "iconfont icon-duidiaojiaohuanduihuan"
        }
      ],
      tabList: [
        {
          name: "交换日分布统计"
        },
        {
          name: "部门交换量排名"
        },
        {
          name: "业务交换量排名"
        },
        {
          name: "异常监控"
        }
      ]
    };
  }
};
</script>

<style lang="postcss">

</style>
