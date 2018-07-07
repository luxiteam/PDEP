<template>
    <div>
        <div class="abnormal-view">
            <ul>
                <li><span>11</span><b>流量异常</b></li>
                <li><span>45</span><b>节点异常</b></li>
                <li><span>23</span><b>网络异常</b></li>
                <li><span>89</span><b>数据源异常</b></li>
                <li><span>12</span><b>硬盘异常</b></li>
                <li><span>32</span><b>数据异常</b></li>
                <li><span>51</span><b>延迟交换异常</b></li>
                <li><span>9</span><b>数据更新异常</b></li>
                <li><span>1</span><b>任务预算异常</b></li>
                <li><span>10</span><b>清理预警</b></li>
            </ul>
        </div>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column type="index" label="序号" width="100">
            </el-table-column>
            <el-table-column prop="bsname" label="异常类型" min-width="180">
            </el-table-column>
            <el-table-column prop="tableName" label="异常发现时间" min-width="180">
            </el-table-column>
            <el-table-column prop="todayReceive" label="异常说明" min-width="180">
            </el-table-column>
        </el-table>
        <Page/>
    </div>
</template>

<script>
import Page from "~/components/public/Page.vue";
export default {
  data() {
    return {
      tableData: []
    };
  },
  components: {
    Page
  }
};
</script>

<style lang="postcss">
</style>
