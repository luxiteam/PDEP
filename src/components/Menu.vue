<template>
  <nav class="main-sidebar">
    <div class="sidebar-scroll">
      <ul class="nav-main">
        <template v-for="menu in menus">
            <li v-for="item in menu.items" :key="item.key">
              <router-link :to="item.path" class="nav-submenu" data="nav-submenu">
                <i :class="item.class"></i>
                <span class="sidebar-mini-hide">{{ item.name }}</span>
              </router-link>
            </li>
         </template>
      </ul>
        <dl class="nav-bottom">
            <dt><i class="iconfont icon-kefu"></i>温馨提示</dt>
            <dd>运维QQ：{{qq}}</dd>
            <dd>运维电话：{{phone}}</dd>
        </dl>
    </div>
  </nav>
</template>

<script>
import menuConfig from "../config/menu";

export default {
  data() {
    return {
      menus: menuConfig,
      qq: "2749214400",
      phone: "18158127271"
    };
  }
};
</script>

<style lang='postcss'>
.main-sidebar {
  position: fixed;
  left: 0;
  top: 80px;
  width: 220px;
  height: auto;
  background-color: #39474b;
  z-index: 800;
  overflow-y: auto;
  bottom: 0;
}

.sidebar-scroll {
  min-height: calc(100% - 120px);
}

.nav-main {
  font-size: 16px;
  & li {
    line-height: 60px;
    border-bottom: 2px solid #364245;
    & a {
      display: block;
      color: #fff;
      padding-left: 50px;
      & i {
        margin-right: 20px;
      }
    }

    & a.nuxt-link-active{
      background: #2d3a3f;
    }
  }
}

.nav-bottom {
  position: absolute;
  bottom: 0;
  width: 160px;
  margin: 30px;
  font-size: 14px;
  color: #fff;
  & dt {
    font-weight: 700;
    font-size: 20px;
    margin: 10px 15px;
    & i {
      font-size: 24px;
      margin-right: 10px;
    }
  }
}
</style>
