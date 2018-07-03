<template>
    <div class="container-monitor">
        <bread-crumb ></bread-crumb>
        <item-bar></item-bar>
        <data-block></data-block>
        <echarts-block></echarts-block>
    </div>
</template>

<script>
import BreadCrumb from "~/components/monitor/BreadCrumb.vue";
import ItemBar from "~/components/monitor/ItemBar.vue";
import DataBlock from "~/components/monitor/DataBlock.vue";
import EchartsBlock from "~/components/monitor/EchartsBlock.vue";

export default {
  mounted() {},
  data() {
    return {};
  },
  components: {
    BreadCrumb,
    ItemBar,
    DataBlock,
    EchartsBlock
  }
};
</script>

<style>
</style>
