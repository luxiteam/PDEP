<template>
  <div class="business-block">
    <ul>
      <li>
        <div class="left"><span>接入规模</span></div>
        <div class="right">
          <dl>
            <dt> <i class="iconfont icon-icon"></i></dt>
            <dd v-show="false" id="jktj_jrgm_jrds">
              <em>{{scale.accessDept||0}}</em>
              <p>接入地市</p>
            </dd>
            <dd v-show="false" id="jktj_jrgm_jrqx">
              <em>{{scale.accessCounty||0}}</em>
              <p>接入区县</p>
            </dd>
            <dd v-show="false" id="jktj_jrgm_jrbm">
              <em>{{scale.accessDept||0}}</em>
              <p>接入部门</p>
            </dd>
            <dd v-show="false" id="jktj_jrgm_jryw">
              <em>{{scale.accessBs||0}}</em>
              <p>接入业务</p>
            </dd>
          </dl>
        </div>
      </li>
      <li>
        <div class="left"><span>交换总量</span></div>
        <div class="right">
          <dl>
            <dt> <i class="iconfont icon-jiaohuan1"></i></dt>
            <dd>
              <em>{{allNum.totalReceive||0}}</em>
              <p>总接收量</p>
            </dd>
            <dd>
              <em>{{allNum.totalSend||0}}</em>
              <p>总发送量</p>
            </dd>
          </dl>
        </div>
      </li>
      <li>
        <div class="left"><span>当日交换量</span></div>
        <div class="right">
          <dl>
            <dt> <i class="iconfont icon-duidiaojiaohuanduihuan"></i></dt>
            <dd>
              <em>{{todayNum.totalReceive||0}}</em>
              <p>总接收量</p>
            </dd>
            <dd>
              <em>{{todayNum.totalSend||0}}</em>
              <p>总发送量</p>
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$store.dispatch("header", {}).then(res => {
        this.scale = res.data.scale;
        this.allNum = res.data.allNum;
        this.todayNum = res.data.todayNum;
      });
      this.$store.dispatch("displayPermissions", {
        parentModule: "jktj_jrgm"
      }).then(res => {
        for (let i = 0; i < res.data.length; i++) {
          let id = res.data[i].moduleNo;
          $(`#${id}`).show();
        }
      });
    },
    data() {
      return {
        scale: {},
        allNum: {},
        todayNum: {}
      };
    }
  };
</script>

<style lang="postcss">
  .business-block {
    box-sizing: border-box;
    margin-bottom: 20px;
    & ul {
      box-sizing: border-box;
      display: flex;
      & li {
        flex: 1;
        height: 100px;
        background: #fff;
        margin-right: 25px;
        border-radius: 4px;
        border: 20px solid #fff;
        display: flex;
        position: relative;
        & .left {
          box-sizing: border-box;
          flex: 1;
          min-width: 90px;
          background: #fff;
          font-size: 20px;
          margin: 2px;
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          & span {
            width: 50px;
            text-align: center;
          }
        }
        &::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          border-radius: 4px;
          z-index: 1;
        }
        &:first-of-type::after {
          background: #5cb85c;
        }
        &:nth-of-type(2)::after {
          background: #f0ad4e;
        }
        &:last-of-type::after {
          background: #d9544f;
          margin-right: 0;
        }
        &:last-of-type {
          margin-right: 0;
          & .left {
            & span {
              width: 60px;
            }
          }
        }
        & .right {
          flex: 3;
          z-index: 2;
          display: flex;
          align-items: center;
          & dl {
            display: flex;
            justify-content: center;
            width: 100%;
            padding: 0 10px;
            & dt {
              min-width: 60px;
              height: 60px;
              border-radius: 50%;
              background: rgba(255, 255, 255, 0.3);
              display: flex;
              justify-content: center;
              align-items: center;
              & i {
                font-size: 34px;
                color: #fff;
              }
              & i.icon-jiaohuan1 {
                font-weight: bold;
                font-size: 26px;
              }
            }
            & dd {
              flex: 2;
              display: flex;
              flex-flow: column;
              justify-content: space-around;
              min-width: 64px;
              height: 60px;
              color: #fff;
              text-align: center;
              margin-left: 10px;
              & em {
                display: block;
                font-style: normal;
                font-size: 22px;
                margin-bottom: 5px;
              }
            }
          }
        }
      }
    }
  }
</style>
