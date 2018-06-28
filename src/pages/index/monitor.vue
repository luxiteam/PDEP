<template>
    <div>
        <el-tabs :tab-position="tabPosition" style="height: 200px;">
            <el-tab-pane label="监控统计">
                <p>您当前位于：交换监控/监控统计</p>
                
            </el-tab-pane>
            <el-tab-pane label="业务域监控">配置管理</el-tab-pane>
            <el-tab-pane label="区县详情">角色管理</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
  data() {
    return {
      tabPosition: "top"
    };
  }
};
</script>

<style lang="postcss">
.el-tabs {
  & .el-tabs__active-bar {
    display: none;
  }
  & .el-tabs__nav {
    margin-left: 15px;
    & .el-tabs__item {
      padding: 0;
      width: 110px;
      background: #f5f5f5;
      margin: 10px 15px;
      text-align: center;
      border-radius: 4px;
      &:hover {
        background: #5bbfde;
        color: #fff;
      }
    }
    & .el-tabs__item.is-active {
      background: #5bbfde;
      color: #fff;
    }
  }
}
</style>
