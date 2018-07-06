<template>
  <div class="container-monitor">
    <bread-crumb></bread-crumb>
    <item-bar :bar-list="barList" :go-detail="goDetail"></item-bar>
    <data-block :data-list="dataList"></data-block>
    <echarts-block></echarts-block>
  </div>
</template>

<script>
import BreadCrumb from "~/components/monitor/BreadCrumb.vue";
import ItemBar from "~/components/monitor/ItemBar.vue";
import DataBlock from "~/components/monitor/DataBlock.vue";
import EchartsBlock from "~/components/monitor/EchartsBlock.vue";
export default {
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
    EchartsBlock
  },
  methods: {
    goDetail(id) {
      this.$router.push({ path: `/monitor/detail/:${id}` });
      let monitorObj = $(`#${id}`).text();
      console.log(monitorObj);
      localStorage.monitorObj = monitorObj;
    }
  },
  data() {
    return {
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
}
</style>
