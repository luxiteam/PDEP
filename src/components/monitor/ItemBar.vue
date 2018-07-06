<template>
  <div :class="isState==false?'select-block':'select-block on'" v-if="roleId==5||roleId==7"   v-show="barList.length>0||routerPath =='/monitor'">
    <ul class="bar-ul" v-if="barList&&barList.length>0">
      <li  v-for="(item,index) in barList" :ref="index" :id="item.bscode||item.deptNo" :key="index" :class="itemIndex == index ? 'active' : ''" @click="selectItem(index)">
        <span> {{item.deptDesc||item.bsname}} </span>
      </li>
    </ul>
    <ul class="bar-ul"  v-else>
      <li id="present"  class="active" @click="selectOne">
        <span> {{bsname}} </span>
      </li>
    </ul>
    <i  v-show="barList&&barList.length>8" @click="toggle" :class="isState==false?'icon el-icon-arrow-down':'icon el-icon-arrow-down rotate'"></i>
  </div>
</template>

<script>
export default {
  mounted() {
    let path = this.$router.history.current.fullPath;
    this.routerPath = path;
    this.roleId = localStorage.roleId;
    if (this.roleId == 5) {
      this.bsname = "市本级";
      localStorage.monitorObj= this.bsname
      console.log()
    } else if (this.roleId == 7) {
      this.bsname = "区本级";
      localStorage.monitorObj= this.bsname
    }
  },
  props: ["barList", "getData", "goDetail"],
  data() {
    return {
      routerPath: "",
      itemIndex: 0,
      isState: false,
      bsname: "",
      roleId:""
    };
  },
  methods: {
    selectItem(index) {
      this.itemIndex = index;
      let path = this.$router.history.current.fullPath;
      let code;
      if (path == "/monitor/business") {
        code = this.$refs[index][0].getAttribute("id");
        this.getData(code);
      }else if(path == "/monitor"){
        code = this.$refs[index][0].getAttribute("id");
        this.goDetail(code);
      }
    },
    selectOne(){
        let code = localStorage.parentNo;
        this.goDetail(code);
    },
    toggle: function() {
      this.isState = !this.isState;
    },
    
  }
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
      &:hover {
        color: #5bbfde;
      }
      & span {
        cursor: pointer;
      }
    }
    & li.active {
      & span {
        color: #5bbfde;
        border-bottom: 3px solid #5bbfde;
        padding-bottom: 5px;
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
