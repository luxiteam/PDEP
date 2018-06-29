<template>
  <div class = 'container'>

    <el-row class = 'nav-bar'>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark left">
          <el-button class = "report-btn nav-btn active">追踪报告</el-button>
          <el-button class = "trace-btn nav-btn">实时追踪</el-button>
        </div>
        <div class="grid-content bg-purple-dark right">
          <el-button-group class = 'nav-btn-list'>
            <el-button size = 'medium day report active'>日报</el-button>
            <el-button size = 'medium month report'>月报</el-button>
          </el-button-group>
        </div>
      </el-col>
    </el-row>

    <el-row class = 'navigation'>
      <el-col :span = '24'>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>您当前位于:</el-breadcrumb-item>
          <el-breadcrumb-item>数据追踪 </el-breadcrumb-item>
          <el-breadcrumb-item>追踪报告</el-breadcrumb-item>
          <el-breadcrumb-item>日报</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>

    <el-row class = 'business-box'>
      <el-col :span = '24'>
        <ul>
          <li v-for = 'item in businessList' :key = 'item.name'>
            <a href="javascript:void(0)">{{item.name}}</a>
          </li>
          <li>
            <a href="javascript:void(0)" class = 'dropdown' @click = 'opendropdowmenu'>
              <i class = 'el-icon-arrow-down'></i>
            </a>
          </li>
        </ul>
      </el-col>
    </el-row>

    <el-row class = 'data-exhibition'>
      <el-col :span = '4'>
        <el-dropdown class = 'data-type'>
          <el-button class = 'initial'>
            当日发送<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>当日接收</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col :span = '16' class = 'step-container'>
        <div class = 'step-box'>
          <p class = 'step-title'>滨江区前置</p>
          <div class = 'cut-line'></div>
          <div class = 'server-box'>
          <img src="~/assets/server-icon.png" alt="">
          </div>
          <p>发送量: <a href="javascript:void(0)">180316</a></p>
        </div>
        <div class = 'step-box'>
          <p class = 'step-title'>中心前置</p>
          <div class = 'cut-line'></div>
          <div class = 'server-box'>
            <img src="~/assets/server-icon.png" alt="">
          </div>
          <p>接收量: <a href="javascript:void(0)">158422</a></p>
        </div>
        <div class = 'step-box'>
          <p class = 'step-title'>业务获取</p>
          <div class = 'cut-line'></div>
          <div class = 'server-box'>
            <img src="~/assets/server-icon.png" alt="">
          </div>
          <p>获取量: <a href="javascript:void(0)">87223</a></p>
        </div>
      </el-col>
      <el-col :span = '4'>
      </el-col>
    </el-row>

    <el-row class = 'track-table'>
      <el-col :span = '12'>
        <div class="start-date">
        <span class = 'date-name'>起始日期: </span>
        <el-date-picker  v-model="value2"
          type="date"
          placeholder="请选择起始日期"
          :picker-options="pickerOptions1">
        </el-date-picker>
        </div>

        <div class = 'end-date'>
          <span class = 'date-name'>结束日期: </span>
          <el-date-picker  v-model="value1"
                           type="date"
                           placeholder="请选择结束日期"
                           :picker-options="pickerOptions2">
          </el-date-picker>
        </div>

        <el-button class = 'initial'>导出表格</el-button>
      </el-col>

      <el-col :span = '12'></el-col>
    </el-row>

    <el-row class = 'track-table-content'>
      <el-col :span = '24'>
        <el-table class = 'track-table-inner'
          border
          style="width: 100%">
          <el-table-column
            prop="date"
            label=发送日期
            width="180"
            align="center">
          </el-table-column>
          <el-table-column
            prop="name"
            label="业务"
            width="180"
            align="center">
          </el-table-column>
          <el-table-column
            prop="address"
            label="发送量"
            align="center">
          </el-table-column>
          <el-table-column
            prop="address"
            label="交换量"
            align="center">
          </el-table-column>
          <el-table-column
            prop="address"
            label="接收量"
            align="center">
          </el-table-column>
          <el-table-column
            prop="address"
            label="待交换量"
            align="center">
          </el-table-column>
          <el-table-column
            prop="address"
            label="待接收量"
            align="center">
          </el-table-column>
          <el-table-column
            prop="address"
            label="交换状态"
            align="center">
          </el-table-column>
          <el-table-column
            prop="address"
            label="接收状态"
            align="center">
          </el-table-column>
          <el-table-column
            prop="address"
            label="详情"
            align="center">
          </el-table-column>
        </el-table>
        <el-row>
          <el-col :span = '12' class = 'pagination-message'>
            <p>总计12条记录</p>
          </el-col>
          <el-col :span = '12' class = 'pagination-number'>
            <el-pagination
              layout="prev, pager, next"
              :total="50">
            </el-pagination>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        businessList:[
          {name:'办件返回',value:1600},
          {name:'办件上报',value:200},
          {name:'统一申报',value:1000},
          {name:'处罚公开',value:500},
          {name:'裁量信息',value:800},
          {name:'多证合一',value:1200},
          {name:'电子证照',value:700},
          {name:'权力事项',value:1500},
          {name:'其他八类',value:300},
          {name:'双打办',value:1000},
          {name:'数据共享',value:2000},
          {name:'厅局汇聚',value:300},
          {name:'投资项目',value:600},
          {name:'投资返回',value:900},
          {name:'信用返回',value:300},
          {name:'行政处罚',value:800},
        ],
        tableData:[],
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        pickerOptions2: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
      }
    },
    created () {

    },
    mounted(){
   
    },
    methods:{
      opendropdowmenu () {
         $('.business-box').toggleClass('active')
      }
    }
  }
</script>
<style lang="postcss">
  .container{
    min-height: 1200px;
    min-width: 1200px;
    background: #f5f5f5;
  }
  .nav-bar{
    background: #ffffff;
  }
  .nav-btn{
    margin: 20px;
  }
  .nav-btn.active{
    background: #5bbfde;
    color: #ffffff;
  }
  .nav-btn-list{
    margin: 20px 20px;
   }
  .report.active{
    color: #ffffff;
    background: #5bbfde;
  }
  .navigation{
    margin: 15px;
  }
  .business-box{
    position: relative;
    background: #ffffff;
    margin:0 20px;
    overflow:hidden;
    height: 80px;
    transtion:height .5s;
    & ul{
      position:absolute;
      left:0;
      top:0;
        & li {
            display: inline-block;
            & a{
                color: #000;
                display: inline-block;
                padding: 30px;
              }
            & a.dropdown{
                position:absolute;
                top: 0px;
                right: 10px;
              }
          }
      }
  }
  .business-box.active{
    height: 164px;
    transition: height .5s;
  }
  .data-exhibition{
    position: relative;
    background: #ffffff;
    margin: 20px;
    height:280px;
    & .data-type{
        margin:20px 0 0 20px;
      & .initial{
          color: #ffffff;
          background: #5bbfde;
        }
      }
    .step-container{
      & .step-box{
          position: relative;
          margin-top: 20px;
          margin-bottom: 20px;
          margin-left: 135px;
          display: inline-block;
          height: 245px;
          width: 185px;
          text-align: center;
          box-shadow: 0 0 5px #6ffaff;
        & .step-title{
            margin-top: 15px;
          }
        & .cut-line{
              margin:10px auto;
              width:150px;
              height: 1px;
              background: #ececec;
            }
          & .server-box{
              margin: 20px auto;
              height: 100px;
              width: 100px;
              border:10px solid #5bbfde;
              border-radius:50%;
              img{
                margin:21px 0px;
              }
            }
        }
    }
  }
  .track-table{
    background: #ffffff;
    margin: 0px 20px;
    .date-name{
      color: #656565;
    }
    .start-date,.end-date{
      margin: 10px 20px;
      display: inline-block;
    }
    .initial{
      color: #ffffff;
      background: #5bbfde;
    }
  }
  .track-table-content{
    margin: 0 20px;
    background:#ffffff;
      .has-gutter{
        background: #eeeeee;
      }
    .pagination-message{
      p{
        padding:20px;
        color: #838383;
        margin:auto 0px;
      }
    }
    .pagination-number{
      padding:20px;
      text-align: right;
    }
  }
  .el-pager li.active {
    color: #ffffff;
    cursor: default;
    border-radius: 50%;
    background: #5abfdf;
  }
  .el-pager li {
    min-width: 25px;
    height: 25px;
    line-height: 25px;
  }
  .el-table thead tr th {
    color: #000;
    background-color: #eeeeee;
  }
  .el-table--border td, .el-table--border th, .el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed {
    border: 1px solid #d2d2d2;
  }
  .left{
    float: left;
  }
  .right{
    float: right;
  }
</style>
