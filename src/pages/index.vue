<template>
  <section>
    <Header :username="username" />
    <Menu :menu-list="menuList" />
    <Main/>
  </section>
</template>

<script>
import Header from "~/components/Header.vue";
import Menu from "~/components/Menu.vue";
import Main from "~/components/Main.vue";
export default {
  mounted() {
    this.$store.dispatch("checkUser", {}).then(res => {
      this.username = res.data.username;
    });
    this.$store
      .dispatch("displayPermissions", {
        parentModule: "leftmenu"
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
      username: "",
      menuList: [
        {
          class: "iconfont icon-jiaohuan",
          module: "jhjk",
          name: "交换监控",
          path: "/monitor"
        },
        {
          class: "iconfont icon-shuju",
          module: "sjzz",
          name: "数据追踪",
          path: "/tracking"
        },
        {
          class: "iconfont icon-755danzi-copy",
          module: "jhgd",
          name: "交换工单",
          path: "/exchangelist"
        },
        {
          class: "iconfont icon-weibiaoti9",
          module: "zsk",
          name: "知识库",
          path: "/knowledge"
        },
        {
          class: "iconfont icon-peizhi",
          module: "ptpz",
          name: "平台配置",
          path: "/configure"
        }
      ]
    };
  },
  methods: {},
  components: {
    Header,
    Menu,
    Main
  }
};
</script>

<style lang="postcss">

</style>
