<template>
  <div class="container-monitor">
    <bread-crumb></bread-crumb>
    <item-bar :bar-list="barList" :go-detail="goDetail"></item-bar>
    <data-block :data-list="dataList"></data-block>
    <div class="tabs">
      <el-tabs type="border-card" v-model="activeName"> 
        <el-tab-pane v-for="(item,index) in moduleBlock" :key="index" :label="item.moduleDesc" :name="item.moduleName" v-if="item.flag==1">
          <day-distribution v-if="item.moduleName=='jktj_rfb'"></day-distribution>
          <anomaly-monitoring v-if="item.moduleName=='jktj_ycjk'"></anomaly-monitoring>
          <business-exchange  v-if="item.moduleName=='jktj_ywjhl'"></business-exchange>
          <depart-exchange  v-if="item.moduleName=='jktj_bmjhl'"></depart-exchange>
          <focus-nodes  v-if="item.moduleName=='jktj_zdgzjd'"></focus-nodes>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "~/components/monitor/BreadCrumb.vue";
import ItemBar from "~/components/monitor/ItemBar.vue";
import DataBlock from "~/components/monitor/DataBlock.vue";
import DepartExchange from "~/components/monitor/DepartExchange.vue";
import DayDistribution from "~/components/monitor/DayDistribution.vue";
import AnomalyMonitoring from "~/components/monitor/AnomalyMonitoring.vue";
import BusinessExchange from "~/components/monitor/BusinessExchange.vue";
import FocusNodes from "~/components/monitor/FocusNodes.vue";
export default {
  created() {
    this.$store
      .dispatch("permissions", {
        parentModule: "jktj_tx"
      })
      .then(res => {
        console.log(res.data);
        this.moduleBlock = res.data;
      
      });
  },
  mounted() {
    this.$store.dispatch("deptMenu").then(res => {
      this.barList = res.data;
    });
    this.$store.dispatch("monitorHeader", {}).then(res => {
      this.dataList = res.data;
    });
  },
  components: {
    BreadCrumb,
    ItemBar,
    DataBlock,
    DepartExchange,
    DayDistribution,
    AnomalyMonitoring,
    BusinessExchange,
    FocusNodes
  },
  methods: {
    goDetail(id) {
      this.$router.push({
        path: `/monitor/detail/:${id}`
      });
      let monitorObj = $(`#${id}`).text();
      console.log(monitorObj);
      localStorage.monitorObj = monitorObj;
    }
  },
  data() {
    return {
      activeName:"jktj_rfb",
      moduleBlock: [],
      echartsBlock: [],
      dataList: [],
      barList: []
    };
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
      padding: 30px;
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
  .el-table th,
  .el-table tr {
    background: inherit;
    border-bottom: 1px solid #bbb;
    height: 60px;
  }
  .el-table--border {
    border: 1px solid #bbb;
  }
  .el-table--border td,
  .el-table--border th,
  .el-table__body-wrapper
    .el-table--border.is-scrolling-left
    ~ .el-table__fixed {
    border-right: 1px solid #bbb;
    text-align: center;
    color: #555;
  }
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
  from {
  }
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
