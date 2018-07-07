<template>
  <div class = 'container'>
    <el-row class = 'nav-bar'>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark left">
          <el-button class = "report-btn nav-btn" v-bind:class = "{active: reportisActive}" @click = 'callMenuType(1)'>追踪报告</el-button>
          <el-button class = "trace-btn nav-btn"  v-bind:class = "{active: traceisActive}"  @click = 'callMenuType(2)'>实时追踪</el-button>
        </div>
        <div class="grid-content bg-purple-dark right">
          <el-button-group class = 'nav-btn-list'>
            <el-button size = 'medium day report'   v-bind:class = "{active: dayisActive}"   @click = 'call(1)'>日报</el-button>
            <el-button size = 'medium month report' v-bind:class = "{active: monthisActive}" @click = 'call(2)'>月报</el-button>
          </el-button-group>
        </div>
      </el-col>
    </el-row>
    <component :is = 'componentName' ref = 'cl'></component>
  </div>
</template>

<script>
import Report from '~/components/tracking/Report'
import Realtime from '~/components/tracking/Realtime'

export default {
  data () {
    return{
      componentName:'Report',
      traceisActive: false, //实时追踪属性class
      reportisActive: true, //追踪报告属性class
      dayisActive: true, //日报属性class
      monthisActive: false, //月报属性class
    }
  },
  components:{
    Report,
    Realtime
  },
  methods: {
    call (val) {
      if (val == 1) {
        this.monthisActive = false
        this.dayisActive = true
      }else{
        this.monthisActive = true
        this.dayisActive = false
      }
      this.$refs.cl.cutreporType(val)
    },
    callMenuType (val) {
      if(val == '1'){
        this.traceisActive = false
        this.reportisActive = true
        this.componentName = 'Report'
      }else{
        this.reportisActive = false
        this.traceisActive = true
        this.componentName = 'Realtime'
      }
      this.$refs.cl.cutMenuType(val)
    }
  }
}
</script>
<style lang="postcss">
  .container {
    position: relative;
    height: 100%;
    min-width: 1200px;
    background: #f5f5f5;
  }
  .shadow-box {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
  & i {
      position: absolute;
      top: 45%;
      left: 50%;
      font-size: 30px;
      color: #979797;
    }
  }
  .nav-bar {
    background: #ffffff;
  }
  .nav-btn {
    margin: 20px;
  }
  .nav-btn.active {
    background: #5bbfde;
    color: #ffffff;
  }
  .nav-btn-list {
    margin: 20px 20px;
  }
  .report.active {
    color: #ffffff;
    background: #5bbfde;
  }
  /* 自定义样式 */
  .left {
    float: left;
  }
  .right {
    float: right;
  }
  .red {
    color: #d9544f;
  }
  .blue {
    color: #83dada;
  }
</style>
