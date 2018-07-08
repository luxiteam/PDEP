<template>
  <div class="container-monitor">
    <bread-crumb></bread-crumb>
    <item-bar :bar-list="barList" :get-data="getData"></item-bar>
    <data-block :data-list="dataList"></data-block>
    <div class="tabs">
      <el-tabs type="border-card" v-model="activeName">
        <el-tab-pane v-for="(item,index) in moduleBlock" :key="index" :label="item.moduleDesc" :name="item.moduleName" v-if="item.flag==1">
          <div v-if="item.moduleName=='jktj_rfb'">
           <day-distribution></day-distribution>
          </div>
          <div v-if="item.moduleName=='jktj_ycjk'">
            <anomaly-monitoring></anomaly-monitoring>
          </div>
          <div v-if="item.moduleName=='jktj_ywjhl'">
            <business-exchange></business-exchange>
          </div>
          <div v-if="item.moduleName=='jktj_bmjhl'">
             <depart-exchange></depart-exchange>
          </div>
          <div v-if="item.moduleName=='jktj_zdgzjd'">
            <focus-nodes></focus-nodes>
          </div>
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
          console.log(res.data)
          this.moduleBlock = res.data;
        });
    },
    mounted() {
      this.$store.dispatch("bscodeMenu", {}).then(res => {
        if (res.status == 0 && res.data.length > 0) {
          this.barList = res.data;
          let code = res.data[0].bscode;
          this.getData(code);
        }
      });
    },
    data() {
      return {
        activeName:"jktj_rfb",
        moduleBlock: [],
        barList: [],
        dataList: []
      };
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
      getData(code) {
        this.$store.dispatch("businessHeader", {
          bscode: code
        }).then(res => {
          this.dataList = res.data;
        });
      }
    }
  };
</script>

<style>
  
</style>
