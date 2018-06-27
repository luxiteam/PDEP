<template>
  <nav class="main-sidebar">
    <div class="sidebar-scroll">
          <ul class="nav-main">
            <template v-for="menu in menus">
              <li v-for="item in menu.items" :key="item.key">
                <router-link :to="item.path" class="nav-submenu" data="nav-submenu">
                  <i>{{ item.key }}</i>
                  <span class="sidebar-mini-hide">{{ item.name }}</span>
                </router-link>
              </li>
            </template>
          </ul>
    </div>
  
  </nav>
</template>
<script>
  import menuConfig from '../config/menu'

  export default {
    data () {
      return {
        menus: menuConfig
      }
    }
  }
</script>
<style>
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
    border-right:1px solid #ddd;
  }

  .sidebar-scroll {
    min-height: calc(100% - 120px);
  }
  .nav-main{
      font-size: 16px;
  }
  .nav-main li{
      line-height: 60px;
      border-bottom: 2px solid #364245;
  }
  .nav-main a{
      color: #fff;
      padding: 0 50px;
  }
  .nav-main a i{
       margin-right: 20px;
  }
</style>
