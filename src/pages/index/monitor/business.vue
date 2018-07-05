<template>
    <div class="container-monitor">
        <bread-crumb ></bread-crumb>
        <item-bar :bar-list="barList" :get-data="getData"></item-bar>
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
      barList: [],
      dataList: []
    };
  },
  components: {
    BreadCrumb,
    ItemBar,
    DataBlock,
    EchartsBlock
  },
  methods: {
    getData(code) {
      this.$store.dispatch("businessHeader", { bscode: code }).then(res => {
        this.dataList = res.data;
      });
    }
  }
};
</script>

<style>
</style>
