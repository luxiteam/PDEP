<template>
    <el-breadcrumb class="local" separator="/">
        <span class="el-breadcrumb__item"> 您当前位于：</span>
        <el-breadcrumb-item v-for="(item,index) in breadList" :key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
  mounted() {},
  props: ["breadList"]
};
</script>

<style lang="postcss">
.local {
  color: #555;
  font-size: 14px;
  margin-bottom: 10px;
}
</style>
