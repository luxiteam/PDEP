<template>
<div class="container">
  <el-row class = 'nav-bar'>
    <el-col :span="24">
      <div class="grid-content bg-purple-dark left">
        <el-button class = "report-btn nav-btn" v-bind:class = "{active: reportisActive}" @click = 'cutMenuType(1)'>追踪报告</el-button>
        <el-button class = "trace-btn nav-btn"  v-bind:class = "{active: traceisActive}"  @click = 'cutMenuType(2)'>实时追踪</el-button>
      </div>
      <div class="grid-content bg-purple-dark right">
        <el-button-group class = 'nav-btn-list'>
          <el-button size = 'medium day report'   v-bind:class = "{active: dayisActive}"   @click = 'cutreporType(1)'>日报</el-button>
          <el-button size = 'medium month report' v-bind:class = "{active: monthisActive}" @click = 'cutreporType(2)'>月报</el-button>
        </el-button-group>
      </div>
    </el-col>
  </el-row>
</div>
</template>

<script>
    export default {
       data () {
         return {
           dayisActive:true,    //日报属性class
           monthisActive:false, //月报属性class
           traceisActive:false, //实时追踪属性class
           reportisActive:true, //追踪报告属性class
         }
       },
      methods: {
        cutMenuType (typeID) {
          if (typeID == 1) {
            this.traceisActive = false
            this.reportisActive = true
            this.updatePath('追踪报告',2)
          }else if (typeID == 2) {
            this.reportisActive = false
            this.traceisActive = true
            this.updatePath('实时追踪',2)
          }
        },    //切换二级菜单

        updatePath (pathname, rank) {
          this.path[rank].pathname = pathname
        }    //导航条数据切换
      }
    }
</script>

<style scoped>

</style>
