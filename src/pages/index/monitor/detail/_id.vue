<template>
  <div class="container-monitor">
    <bread-crumb></bread-crumb>
    <div class="monitoring-state">
      <div class="left">
        <ul>
          <li><span class="w">监控对象：</span><span>{{monitorObj}}</span></li>
          <li>
            <span class="w">网络状态：</span>
            <span v-if="statusList.net">
                 <em v-if="statusList.net.statu==0">正常</em>
                 <em v-if="statusList.net.statu!=0" class="red">断开</em>
                 <em v-if="statusList.net==null" class="blue">未知</em>
              </span>
          </li>
          <li>
            <span class="w">节点状态：</span>
            <span v-if="statusList.node">
                 <em v-if="statusList.net.statu==0">正常</em>
                 <em v-if="statusList.net.statu!=0" class="red">断开</em>
                 <em v-if="statusList.net==null" class="blue">未知</em>
              </span>
          </li>
          <li>
            <span class="w">数据源：</span>
            <span v-if="statusList.datasouce">
                 <em v-if="statusList.net.statu==0">正常</em>
                 <em v-if="statusList.net.statu!=0" class="red">断开</em>
                 <em v-if="statusList.net==null" class="blue">未知</em>
              </span>
          </li>
  
        </ul>
      </div>
      <div class="right">
        <span class="title">前置机监控（）</span>
        <el-progress type="circle" :percentage="30" width="100" color="#5cb85c"></el-progress>
        <el-progress type="circle" :percentage="50" width="100" color="#f0ad4e"></el-progress>
        <el-progress type="circle" :percentage="70" width="100" color="#d9544f"></el-progress>
      </div>
    </div>
    <div class="tabs">
      <el-tabs type="border-card">
        <el-tab-pane label="发送监控">
          <el-table :data="tableData" border style="width: 100%" class="send-table">
            <el-table-column type="index" label="序号" width="100">
            </el-table-column>
            <el-table-column prop="bsname" label="所属业务" min-width="180">
            </el-table-column>
            <el-table-column prop="tableName" label="业务表" min-width="180">
            </el-table-column>
            <el-table-column prop="todaySend" label="当日发送" min-width="180">
            </el-table-column>
            <el-table-column prop="totalSend" label="发送总量" min-width="180">
            </el-table-column>
          </el-table>
          <Page/>
        </el-tab-pane>
        <el-tab-pane label="接受监控">
          <el-table :data="tableData1" border style="width: 100%" class="receive-table">
            <el-table-column type="index" label="序号" width="100">
            </el-table-column>
            <el-table-column prop="bsname" label="所属业务" min-width="180">
            </el-table-column>
            <el-table-column prop="tableName" label="业务表" min-width="180">
            </el-table-column>
            <el-table-column prop="todayReceive" label="当日发送" min-width="180">
            </el-table-column>
            <el-table-column prop="totalReceive" label="发送总量" min-width="180">
            </el-table-column>
          </el-table>
          <Page/>
        </el-tab-pane>
        <el-tab-pane label="历史交换记录">
  
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import BreadCrumb from "~/components/monitor/BreadCrumb.vue";
  import ItemBar from "~/components/monitor/ItemBar.vue";
  import Page from "~/components/public/Page.vue";
  
  export default {
    created() {},
    mounted() {
      let me = this;
      this.monitorObj = localStorage.parentName + " - " + localStorage.monitorObj;
      let router = this.$router.history.current.fullPath;
      if(router.split(":")[0]=="/monitor/detail/"){
        $(".module-block li:last").children("a").addClass("nuxt-link-exact-active");
      }else{
        $(".module-block li:last").children("a").removeClass("nuxt-link-exact-active");

      }
      let code = router.split(":")[1];
      this.$store
        .dispatch("monitorStatus", {
          code: code
        })
        .then(res => {
          me.statusList = res.data;
          console.log(me.statusList);
        });
      this.$store
        .dispatch("monitorDetail", {
          code: code
        })
        .then(res => {
          console.log(res.data);
        });
      this.$store
        .dispatch("sendMonitor", {
          code: code
        })
        .then(res => {
          this.tableData = res.data;
        });
      this.$store
        .dispatch("reciveMonitor", {
          code: code
        })
        .then(res => {
          this.tableData1 = res.data;
        });
    },
    components: {
      BreadCrumb,
      ItemBar,
      Page
    },
    methods: {},
    data() {
      return {
        monitorObj: "",
        status: "",
        statusList: [],
        tableData: [],
        tableData1: []
      };
    }
  };
</script>

<style lang="postcss">
  .monitoring-state {
    display: flex;
    margin-bottom: 20px;
    & .left {
      flex: 2;
      background: #fff;
      border-radius: 4px;
      margin-right: 25px;
      & ul {
        padding: 15px 30px 10px 80px;
        & li {
          line-height: 26px;
          & .w {
            display: inline-block;
            width: 80px;
          }
          & em {
            font-style: normal;
          }
          & em.red {
            color: #de6b66;
          }
          & em.blue {
            color: #5bbfde;
          }
        }
      }
    }
    & .right {
      flex: 5;
      background: #fff;
      border-radius: 4px;
      & .title {
        font-size: 18px;
        display: inline-block;
        height: 26px;
        margin: 20px;
        border-left: 3px solid #5bbfde;
        padding: 0 10px;
        vertical-align: top;
      }
      & .el-progress--circle{
        margin:15px 30px;
      }
    }
  }
  
  .tabs {
    & .el-tabs--border-card {
      background: none;
      border: none;
      box-shadow: none;
      &>.el-tabs__header {
        background: none;
        border-bottom: 0;
      }
      &>.el-tabs__content {
        background: #fff;
        min-height: 450px;
        padding: 30px 20px;
      }
      &>.el-tabs__header .el-tabs__item.is-active {
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
    & .el-tabs--border-card>.el-tabs__header .el-tabs__item:not(.is-disabled):hover {
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
    .el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed {
      border-right: 1px solid #bbb;
      text-align: center;
      color: #555;
    }
    .send-table {
      .el-table__header-wrapper {
        & table {
          background: #cdecf5;
        }
      }
    }
    .receive-table {
      .el-table__header-wrapper {
        & table {
          background: #ceeace;
        }
      }
    }
  }
</style>
