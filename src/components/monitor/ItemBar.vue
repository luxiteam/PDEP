<template>
    <div id="bar" class="select-block">
        <ul class="bar-ul">
            <li v-for="item in barList" :key="item.id">
                <nuxt-link to="">{{item.name}}</nuxt-link>
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
  },
  data() {
    return {
    };
  },
  props: ["barList"]
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
      margin: 20px;
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
