<template>
    <el-breadcrumb class="local" separator="/">
        <span class="el-breadcrumb__item"> 您当前位于：</span>
        <el-breadcrumb-item v-for="(item,index) in breadList" :key="index" >{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
  mounted() {
    let fval = $(".nav-main li a.nuxt-link-active span").html();
    let sval = $(".module-block li a.nuxt-link-exact-active").html();
    this.breadList.push(fval,sval);
  },
  data () {
    return {
      breadList:[]
    }
  }

  
};
</script>

<style lang="postcss">
.local {
  color: #555;
  font-size: 14px;
  padding: 5px 10px 10px;
}
</style>
