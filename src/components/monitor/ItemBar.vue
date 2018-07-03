<template>
    <div id="bar" class="select-block" v-show="barList.length">
        <ul class="bar-ul">
            <li v-for="(item,index) in barList" :key="index">
                <nuxt-link to="">{{item.deptDesc}}</nuxt-link>
            </li>
        </ul>
        <i id="dropbtn" class="icon el-icon-arrow-down"></i>
    </div>
</template>

<script>
export default {
  mounted() {
    $("#dropbtn").click(function() {
      $(this).toggleClass("rotate");
      $("#bar").toggleClass("on");
    });
     this.$store.dispatch("deptMenu").then(res => {
      this.barList=res.data;
    });
 
  },
  data() {
    return {
      barList:[]
    };
  },
  
};
</script>

<style lang="postcss">

.select-block.on {
  height: auto;
}
.select-block {
  height: 60px;
  box-sizing: border-box;
  background: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  border-radius: 4px;
  padding: 0 10px;
  overflow: hidden;
  & .bar-ul {
    display: flex;
    flex-flow: wrap;
    & li {
      margin: 20px 50px 20px 30px;
      & a.nuxt-link-exact-active{

      }
    }
  }
  & .icon {
    height: 60px;
    margin-right: 20px;
    line-height: 60px;
    font-size: 24px;
    cursor: pointer;
    transition: all 0.2s;
  }
  & .icon.rotate {
    transform: rotate(180deg);
  }
}
</style>
