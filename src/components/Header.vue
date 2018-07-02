<template>
  <header class="main-header">
    <div>
      <img src="~/assets/page-logo.png" alt="logo">
      <span class="title">{{title}}</span><span class="title-point">•</span><span class="title-sub">{{ title_sub }}</span>
    
    </div>
    <div>
      欢迎您！<span>{{username}}</span> <i class="iconfont icon-guanbi login-out"></i>
    </div>

  </header>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('checkUser', {}).then(res=>{
        console.log(res.data)
        this.username = res.data.username;
    });
     
   },
  data() {
    return {
      title: "公共数据",
      title_sub: "交换",
      username: "11"
    };
  }
};
</script>

<style lang='postcss'>
.main-header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  line-height: 80px;
  display: flex;
  background-color: #055486;
  z-index: 900;
  min-width: 500px;
  color: #fff;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 50px 0 20px;
  & .title {
    font-weight: 700;
    font-size: 26px;
    letter-spacing: 2px;
    vertical-align: middle;
    margin-left: 5px;
  }
  & .title-point {
    font-weight: 700;
    font-size: 30px;
    vertical-align: middle;
    margin: 0 5px;
  }
  & .title-sub {
    font-size: 24px;
    vertical-align: middle;
  }
  & .login-out {
    margin-left: 20px;
    cursor: pointer;
  }
}
</style>
