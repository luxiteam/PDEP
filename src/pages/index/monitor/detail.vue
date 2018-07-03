<template>
  <div class="container-monitor">
    <bread-crumb></bread-crumb>
    <item-bar></item-bar>
    <div class="monitoring-state">
        <div class="left">
            <el-row>监控对象</el-row>
            <el-row>网络状态</el-row>
            <el-row>节点状态</el-row>
            <el-row>数据源</el-row>
        </div>
        <div class="right">
            <el-progress type="circle" :percentage="80" color="#8e71c7"></el-progress>
            <el-progress type="circle" :percentage="100" status="success"></el-progress>
            <el-progress type="circle" :percentage="50" status="exception"></el-progress>
        </div>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "~/components/monitor/BreadCrumb.vue";
import ItemBar from "~/components/monitor/ItemBar.vue";

export default {
  mounted() {},
  components: {
    BreadCrumb,
    ItemBar
  },
  data() {
    return {};
  }
};
</script>

<style lang="postcss">
.monitoring-state{
  display: flex;
  
  & .left{
    flex:2;
    background:#fff;
    border-radius:4px;
    margin-right: 25px;
  }
  & .right{
    flex:5;
    background:#fff;
    border-radius:4px;
  }
}
</style>
