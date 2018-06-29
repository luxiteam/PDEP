<template>
    <div>
        <ul class="module-block">
          <li v-for="item in moduleList" :key="item.key">
              <router-link :to="item.path" class="sublink" data="sublink" >{{item.name}}</router-link>
          </li>
        </ul>
        <nuxt-child/>
    </div>
</template>

<script>
export default {
  mounted() {
    $("#dropbtn").click(function() {
      $(this).toggleClass("rotate");
      $("#bar").toggleClass("on");
    });
  },
  data() {
    return {
      moduleList: [
        {
          key: "1",
          name: "监控统计",
          path: "/monitor"
        },
        {
          key: "2",
          name: "业务域监控",
          path: "/monitor/business"
        },
        {
          key: "3",
          name: "区县详情",
          path: "/monitor/detail"
        }
      ],

      tabPosition: "top",
     
    };
  }
};
</script>

<style lang="postcss">
.welcome-bg {
  display: none;
}
.module-block {
  padding-left: 20px;;
  display: flex;
  background: #fff;
  & li {
    & a {
      display: block;
      width: 110px;
      height: 40px;
      line-height:40px;
      background: #f5f5f5;
      margin: 10px 15px;
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
 
</style>
