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
</style>
