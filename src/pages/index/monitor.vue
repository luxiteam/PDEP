<template>
    <div>
        <ul class="module-block">
          <li  id="jktj" v-show="false">
              <nuxt-link to="/monitor">监控统计</nuxt-link>
          </li>
          <li  id="ywyjk" v-show="false">
              <nuxt-link to="/monitor/business">业务域监控</nuxt-link>
          </li>
          <li v-if="id==4"  id="bmxq" v-show="false">
              <nuxt-link :to="path">部门详情</nuxt-link>
          </li>
          <li v-if="id==5"  id="qxxq" v-show="false">
              <nuxt-link :to="path">区县详情</nuxt-link>
          </li>
           <li v-if="id==6" id="ywgsxq" v-show="false">
              <nuxt-link :to="path">业务公司详情</nuxt-link>
          </li>
        </ul>
        <nuxt-child/>
    </div>
</template>

<script>
export default {
  mounted() {
    this.id = localStorage.roleId;
    this.path = "/monitor/detail/:" + localStorage.parentNo;
    this.$store
      .dispatch("displayPermissions", {
        parentModule: "jhjk"
      })
      .then(res => {
        for (let i = 0; i < res.data.length; i++) {
          let id = res.data[i].moduleNo;
          document.querySelector(`#${id}`).style.display = "block";
        }
      });
  },

  data() {
    return {
      id: "",
      path:""
    };
  }
};
</script>

<style lang="postcss">
.module-block {
  padding-left: 20px;
  display: flex;
  background: #fff;
  & li {
    & a {
      display: block;
      width: 110px;
      height: 40px;
      line-height: 40px;
      background: #f5f5f5;
      margin: 15px;
      text-align: center;
      border-radius: 4px;
      &:hover {
        background: #5bbfde;
        color: #fff;
      }
    }
    & a.nuxt-link-exact-active {
      background: #5bbfde;
      color: #fff;
    }
  }
}
.container-monitor {
  padding: 10px 20px;
}
</style>
