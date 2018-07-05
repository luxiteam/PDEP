<template>
  <div class="container-monitor">
    <bread-crumb></bread-crumb>
    <div class="monitoring-state">
        <div class="left">
          <ul>
            <li><span>监控对象:{{statusList.bsname}}</span></li>
            <li><span>网络状态:</span></li>
            <li><span>节点状态:</span></li>
            <li><span>数据源:</span></li>
          </ul>
        </div>
        <div class="right">
             <span>前置机监控（）</span>
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
  mounted() {
    let router = this.$router.history.current.fullPath;
    let code = (router.split(":"))[1];
    this.$store.dispatch("sendMonitor",{code:code}).then(res=>{
      console.log(res.data);
      this.statusList = res.data;
    })
  },
  components: {
    BreadCrumb,
    ItemBar
  },
  data() {
    return {
      statusList:[]

    };
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
