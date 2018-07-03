<template>
    <div>
        <ul class="module-block">
          <li v-for="(item,index) in moduleList" :key="index" :id="item.module" v-show="false">
              <nuxt-link :to="item.path">{{item.name}}</nuxt-link>
          </li>
        </ul>
        <nuxt-child/>
    </div>
</template>

<script>

export default {
  mounted() {
    this.$store
      .dispatch("displayPermissions", {
        parentModule: "jhjk"
      })
      .then(res => {
        for (let i = 0; i < res.data.length; i++) {
          let id = res.data[i].moduleNo;
          $(`#${id}`).show();
        }
      });
  
  },
  
  data() {
    return {
      moduleList: [
        {
          module: "jktj",
          name: "监控统计",
          path: "/monitor"
        },
        {
          module: "ywyjk",
          name: "业务域监控",
          path: "/monitor/business"
        },
        {
          module: "qxxq",
          name: "区县详情",
          path: "/monitor/detail"
        }
      ]
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
