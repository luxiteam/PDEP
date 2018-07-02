<template>
        <div class="business-block">
      <ul>
        <li v-for="item in dataList" :key="item.id">
          <div class="left"><span>{{item.leftval}}</span></div>
          <div class="right">
            <dl>
              <dt> <i :class="item.iclass"></i></dt>
              <dd>
                <em>{{item.num1}}</em>
                <p>{{item.text1}}</p>
              </dd>
              <dd>
                <em>{{item.num2}}</em>
                <p>{{item.text2}}</p>
              </dd>
            </dl>
          </div>
        </li>
      </ul>
  
    </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props:["dataList"]
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
      width: 33%;
      height: 100px;
      background: #fff;
      margin-right: 25px;
      border-radius: 4px;
      border: 20px solid #fff;
      display: flex;
      position: relative;
      & .left {
        box-sizing: border-box;
        width: 25%;
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
        width: 70%;
        padding: 0 10px;
        z-index: 2;
        display: flex;
        align-items: center;
        & dl {
          display: flex;
          justify-content: center;
          width: 100%;
          & dt {
            margin-left: 1%;
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
            min-width: 64px;
            color: #fff;
            text-align: center;
            margin-left: 8%;
            & em {
              display: block;
              font-style: normal;
              font-size: 26px;
              margin-bottom: 5px;
            }
          }
        }
      }
    }
  }
}
</style>
