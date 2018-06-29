<template>
    <div class="container-monitor">
        <p class="local">您当前位于：交换监控/监控统计</p>
        <div id="bar" class="select-block">
            <ul class="bar-ul">
                <li v-for="item in barList" :key="item.id">
                    <a href="">{{item.name}}</a>
                </li>
            </ul>
            <i id="dropbtn" class="icon el-icon-arrow-down"></i>
        </div>
        <div class="business-block">
            <ul>
                <li v-for="item in businessList" :key="item.id">
                    <div>{{item.leftval}}</div>
                    <div>
                        <dl>
                            <dt> <i :class="item.iclass"></i></dt>
                            <dd>
                                <em></em>
                                <p></p>
                            </dd>
                            <dd>
                                <em></em>
                                <p></p>
                            </dd>
                        </dl>
                    </div>
                </li>
            </ul>
    
        </div>
    </div>
</template>

<script>
export default {
  mounted(){
      $("#dropbtn").click(function() {
      $(this).toggleClass("rotate");
      $("#bar").toggleClass("on");
    });
  },
  data() {
    return {
      barList: [
        {
          name: "区本级"
        },
        {
          name: "区发改委"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        },
        {
          name: "区民政局"
        }
      ],
      businessList: [
        {
          leftval: ""
        }
      ]
    };
  }
};
</script>

<style lang="postcss">
.container-monitor {
  background: #f5f5f5;
  padding: 10px 20px;
  & .local {
    color: #555;
    font-size: 14px;
  }
  & .select-block.on {
    height: auto;
  }
  & .select-block {
    height: 60px;
    box-sizing: border-box;
    background: #fff;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    border-radius: 2px;
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
  & .business-block {
  }
}
</style>
