<template>
  <div class = 'container'>
    <el-row class = 'nav-bar'>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark left">
          <el-button class = "report-btn nav-btn" v-bind:class = "{active: reportisActive}" @click = 'cutMenuType(1)'>追踪报告</el-button>
          <el-button class = "trace-btn nav-btn"  v-bind:class = "{active: traceisActive}"  @click = 'cutMenuType(2)'>实时追踪</el-button>
        </div>
        <div class="grid-content bg-purple-dark right">
          <el-button-group class = 'nav-btn-list'>
            <el-button size = 'medium day report'   v-bind:class = "{active: dayisActive}"   @click = 'cutreporType(1)'>日报</el-button>
            <el-button size = 'medium month report' v-bind:class = "{active: monthisActive}" @click = 'cutreporType(2)'>月报</el-button>
          </el-button-group>
        </div>
      </el-col>
    </el-row>

    <el-row class = 'navigation'>
      <el-col :span = '24'>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item v-for = 'item in path' :key = 'item.index'>{{item.pathname}}</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>

    <el-row class = 'business-box'>
      <el-col :span = '24'>
        <ul>
          <li>
            <a href="javascript:void(0)" class = 'active' @click = 'businessMenu($event)'>总览</a>
          </li>
          <li v-for = 'item in businessList' :key = 'item.bscode'>
            <a href="javascript:void(0)" @click = 'businessMenu($event)' :class = "item.bscode">{{item.bsname}}</a>
          </li>
        </ul>
      </el-col>
    </el-row>

    <el-row class = 'data-exhibition'>
      <el-col :span = '4'>
        <el-select v-model="dayValue" class = 'data-type'>
          <el-option class = 'initial'
            v-for="item in dayOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span = '16' class = 'step-container'>
        <div class = 'step-box'>
          <p class = 'step-title'>滨江区前置</p>
          <div class = 'cut-line'></div>
          <div class = 'server-box'>
          <img src="~/assets/server-icon.png">
          </div>
          <p>发送量: <a href="javascript:void(0)" ref = 'send'></a></p>
        </div>
        <div class = 'step-box'>
          <p class = 'step-title'>中心前置</p>
          <div class = 'cut-line'></div>
          <div class = 'server-box'>
            <img src="~/assets/server-icon.png">
          </div>
          <p>接收量: <a href="javascript:void(0)" ref = 'rcv'></a></p>
        </div>
        <div class = 'step-box'>
          <p class = 'step-title'>业务获取</p>
          <div class = 'cut-line'></div>
          <div class = 'server-box'>
            <img src="~/assets/server-icon.png">
          </div>
          <p>获取量: <a href="javascript:void(0)" ref = 'finished'></a></p>
        </div>
      </el-col>
      <el-col :span = '4'>
      </el-col>
    </el-row>

    <el-row class = 'track-table'>

      <el-col :span = '12' v-if = "dayORmonth == 'day'">
        <div class="start-date">
        <span class = 'date-name'>起始日期：</span>
        <el-date-picker  v-model="startvalue" @change="startDate" value-format="yyyy-MM-dd" type="date" :picker-options="pickerBeginDateBefore" placeholder="请选择起始日期">
        </el-date-picker>
        </div>
        <div class = 'end-date'>
          <span class = 'date-name'>结束日期：</span>
          <el-date-picker  v-model="endvalue" @change="endDate" value-format="yyyy-MM-dd" type="date" :picker-options="pickerBeginDateAfter" placeholder="请选择结束日期">
          </el-date-picker>
        </div>
        <el-button class = 'initial' @click = 'downloadExcel'>导出表格</el-button>
      </el-col>

      <el-col :span = '12' v-else>
        <div class="start-date">
          <span class = 'date-name'>起始月份：</span>
          <el-date-picker  v-model="startmonthvalue" @change="startMonthDate" value-format="yyyy-MM" type="month" :picker-options="pickerBeginMonthDateBefore" placeholder="请选择起始月份">
          </el-date-picker>
        </div>
        <div class = 'end-date'>
          <span class = 'date-name'>结束月份：</span>
          <el-date-picker  v-model="endmonthvalue" @change="endMonthDate" value-format="yyyy-MM" type="month" :picker-options="pickerBeginMonthDateAfter" placeholder="请选择结束月份">
          </el-date-picker>
        </div>
        <el-button class = 'initial' @click = 'downloadExcel'>导出表格</el-button>
      </el-col>

      <el-col :span = '12'></el-col>
    </el-row>

    <el-row class = 'track-table-content'>
      <el-col :span = '24'>
        <el-table class = 'track-table-inner'
          :data="this.tableData"
          border
          stripe
          style="width: 100%">
          <el-table-column
            prop="exchangeDate"
            label=发送日期
            width="180"
            align="center">
          </el-table-column>
          <el-table-column
            prop="bsname"
            label="业务"
            width="180"
            align="center">
          </el-table-column>
          <el-table-column
            prop="planSend"
            label="发送量"
            align="center">
          </el-table-column>
          <el-table-column
            prop="actualReceive"
            label="交换量"
            align="center">
          </el-table-column>
          <el-table-column
            prop="actualGet"
            label="接收量"
            align="center">
          </el-table-column>
          <el-table-column
            label="待交换量"
            align="center">
            <template slot-scope="scope">
              <span class = 'red' v-if = 'scope.row.waitForSent == 0'>{{scope.row.waitForSent}}</span>
              <span class = 'blue' v-else-if='scope.row.waitForSent !== 0'>{{scope.row.waitForSent}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="待接收量"
            align="center">
            <template slot-scope="scope">
              <span class = 'red' v-if = 'scope.row.waitForGet == 0'>{{scope.row.waitForGet}}</span>
              <span class = 'blue' v-else-if='scope.row.waitForGet !== 0'>{{scope.row.waitForGet}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="交换状态"
            align="center">
            <template slot-scope = 'scope'>
              <i class = 'iconfont icon-check red' v-if = 'scope.row.waitForSent == 0'></i>
              <i class = 'iconfont icon-plaint blue' v-else-if='scope.row.waitForSent !== 0'></i>
            </template>
          </el-table-column>
          <el-table-column
            label="接收状态"
            align="center">
            <template slot-scope = 'scope'>
              <i class = 'iconfont icon-check red' v-if = 'scope.row.waitForGet == 0'></i>
              <i class = 'iconfont icon-plaint blue' v-else-if='scope.row.waitForGet !== 0'></i>
            </template>
          </el-table-column>
          <el-table-column
            label="详情"
            align="center">
            <template slot-scope="scope">
              <el-button class = 'check-btn' @click = 'checkDetail'>查看</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-row>
          <el-col :span = '12' class = 'pagination-message'>
            <p>总计<span>{{totalRow}}</span>条</p>
          </el-col>
          <el-col :span = '10' class = 'pagination-number'>
            <el-pagination
              layout="prev, pager, next"
              @current-change='gopage'
              :page-size="5"
              :total="totalRow"
              :current-page="currentpage">
            </el-pagination>
          </el-col>
          <el-col :span = '2' class = 'totalpageNumber'>
            <p>共<span>{{totalpageNumber}}</span>页</p>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <div class = 'shadow-box' v-if = 'shadeSwitch'>
      <i class = 'el-icon-loading'></i>
    </div>

    <el-dialog
      title="业务表详情"
      :visible.sync="DialogVisibleVal"
      :modal-append-to-body='false'
      :append-to-body="true"
      width="30%"
      center>
      <span>需要注意的是内容是默认不居中的</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="DialogVisibleVal = false">取 消</el-button>
    <el-button type="primary" @click="DialogVisibleVal = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      businessList:[],     //三级菜单列表
      businessActive:'',   //当前选中的业务编码
      tableData:[],        //表格内容
      totalpageNumber: 0,  //表格总页数
      totalRow: 0,         //表格内容总条数
      currentpage:1,       //表格分页当前页数
      shadeSwitch: false,  //遮罩开关
      dayisActive:true,    //日报属性class
      monthisActive:false, //月报属性class
      dayORmonth:'day',    //判断当前处于日报还是月报 (默认值:日报)
      traceisActive:false, //实时追踪属性class
      reportisActive:true, //追踪报告属性class
      beginDateval:'',     //时间控件起始时间
      endDateval:'',       //时间控件结束时间
      dayVal:'当日发送',    //当前数据为当日发送还是接收 (默认值:当日发送)
      startmonthvalue:'',
      endmonthvalue: '',
      startvalue: '',
      endvalue: new Date(new Date()-24*60*60*1000),
      DialogVisibleVal:false,
      dayValue:'当日发送',
      dayOptions: [{
        value: 'send',
        label: '当日发送'
      },{
        value: 'rcv',
        label: '当日接收'
      }],
      path:[
        {'pathname': '您当前位于:','index':'1'},
        {'pathname': '数据追踪','index':'2'},
        {'pathname': '追踪报告','index':'3'},
        {'pathname': '日报','index':'4'},
        ],

      pickerBeginDateAfter:{
        disabledDate: (time) => {
          let endDateVal = new Date(new Date()-24*60*60*1000)  //取前一天的时间
          if (endDateVal) {
            return time.getTime() > endDateVal;
          }
        }
      },  //时间控件起始时间配置项

      pickerBeginDateBefore:{
        disabledDate: (time) => {
          let startDateVal = new Date(new Date()-24*60*60*1000) //取前一天的时间
          if (startDateVal) {
            return time.getTime() > startDateVal;
          }
        }
      },  //时间控件结束时间配置项

      pickerBeginMonthDateAfter:{
        disabledDate: (time) => {
          let endDateVal = new Date()
          if (endDateVal) {
            return time.getTime() > endDateVal;
          }
        }
      },  //时间控件起始时间配置项

      pickerBeginMonthDateBefore:{
        disabledDate: (time) => {
          let startDateVal = new Date()
          if (startDateVal) {
            return time.getTime() > startDateVal;
          }
        }
      }  //时间控件结束月份配置项
    }
  },
  mounted () {

    this.$store.dispatch('bscodeMenu',{}).then(res => {
      if (res) {
        this.businessList = res.data
      }
    })  //请求三级菜单的数据

    this.gettodayExNumSrc ()

    this.getTableInner()  //第一次请求表格内的数据
  },
  methods:{

    getTableInner (pageNumber,startDate,endDate,typeID,bscode) {
      this.shadeSwitch = true
        this.$store.dispatch('pandectTable', {pageNumber:pageNumber?pageNumber:1,beginDate:startDate,endDate:endDate,isMonth:typeID?typeID:0,bscode:bscode?bscode:''}).then(res => {
          this.currentpage = res.data.pageNumber
          this.tableData = res.data.list
          this.totalRow = res.data.totalRow
          this.totalpageNumber = res.data.totalPage
          this.shadeSwitch = false
        })
    },  //获取表格内容 (指定页数,起始时间,结束时间)

    gettodayExNumSrc (typeid) {
      this.$store.dispatch('todayExNumSrc',{isMonth:typeid?typeid:0}).then(res => {
        if (res) {
          this.$refs.send.innerHTML = res.data.send
          this.$refs.rcv.innerHTML = res.data.rcv
          this.$refs.finished.innerHTML = res.data.finished
        }
      })  //请求(发送,接收,获取)三个量
    },  //获取数据展示窗口三个量

    gopage (pageNumber) {
      console.log(this.dayORmonth);
      if (this.dayORmonth == 'day') {
       this.getTableInner(pageNumber,this.beginDateval,this.endDateval,0,this.businessActive)
      }else{
        this.getTableInner(pageNumber,this.startmonthvalue,this.endmonthvalue,1,this.businessActive)
      }
    },    //跳转到指定页

    startDate (val) {
      this.beginDateval = val
      this.getTableInner(null,this.beginDateval,this.endDateval,0,this.businessActive)
    },        //选择起始时间后

    endDate (val) {
      this.endDateval = val
      this.getTableInner(null,this.beginDateval,this.endDateval,0,this.businessActive)
    },          //选择结束时间后
    startMonthDate (val) {
      this.startmonthvalue = val
      this.getTableInner(null,this.startmonthvalue,this.endmonthvalue,1,this.businessActive)
    },
    endMonthDate (val) {
      this.endmonthvalue = val
      this.getTableInner(null,this.startmonthvalue,this.endmonthvalue,1,this.businessActive)
    },
    downloadExcel () {
        let elementA = document.createElement('a')
        let url = 'http://59.202.28.203/PDE/track/report/exportTable'
        let filename = '数据追踪报告.xlsx'
        elementA.href=url
        elementA.download = filename
        elementA.click()
    },       // 下载Excel文件

    cutreporType (typeID) {
      if (typeID == 1) {         //切换到日报
        this.monthisActive = false
        this.dayisActive = true
        this.dayORmonth = 'day'
        this.resetDate()
        this.updatePath('日报',3)
        this.getTableInner(null,this.beginDateval,this.endDateval,0,this.businessActive)
      }else if (typeID == 2) {   //切换到月报
        this.monthisActive = true
        this.dayisActive = false
        this.dayORmonth = 'month'
        this.resetDate()
        this.updatePath('月报',3)
        this.getTableInner(null,this.beginDateval,this.endDateval,1,this.businessActive)
      }
    },  //切换日报,月报
    resetDate () {
      this.startvalue =''
      this.endvalue =''
      this.beginDateval = ''
      this.endDateval = ''
    },  //重置日期控件选中的值

    updatePath (pathname, rank) {
      this.path[rank].pathname = pathname
    },
    cutMenuType (typeID) {
      if (typeID == 1) {
        this.traceisActive = false
        this.reportisActive = true
        this.updatePath('追踪报告',2)
      }else if (typeID == 2) {
        this.reportisActive = false
        this.traceisActive = true
        this.updatePath('实时追踪',2)
      }
    },    //切换二级菜单

    checkDetail () {
      console.log("a");
      this.DialogVisibleVal = true
    },

    businessMenu (el) {
      let element = $(el.target)
      this.businessActive = element.attr('class')
      element.addClass('active')
      element.parent().siblings().find('a').removeClass('active')
      this.getTableInner(null,this.beginDateval,this.endDateval,this.dayORmonth=='day'?0:1,this.businessActive)
    }

  }
}
</script>
<style lang="postcss">
  .container{
    position: relative;
    min-height: 1200px;
    min-width: 1200px;
    background: #f5f5f5;
  }
  .shadow-box{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height:100%;
    background: rgba(255,255,255,0.5);
    & i{
        position: absolute;
        top: 45%;
        left:50%;
        font-size:30px;
        color: #979797;
      }
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
            height:80px;
            & a{
                color: #000;
                display: inline-block;
                padding: 10px 0px;
                margin:20px 30px;
              }
              & a.active{
                  color: #5bbfde;
                  border-bottom: 5px solid #5bbfde;
                }
            & a.dropdown{
                position:absolute;
                top: 0px;
                right: 0px;
              }
              & a:hover {
                  color: #5bbfde;
                  border-bottom: 5px solid #5bbfde;
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
        & .el-input__inner{
            width: 120px;
            background: #5bbfde;
            color: #ffffff;
    text-align:center;
          };
          & .el-input__suffix .el-input__suffix-inner i{
              color: #ffffff;
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
  p{
    & a{
        color: #055486;
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
    margin: 0 30px;
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
    .totalpageNumber{
      padding:25px;
      color: #949494;
    }
  }
  .check-btn{
    color: #ffffff;
    background: #5bbfde;
  }

  /* ElementUI样式覆盖 */
  .el-date-table td.today span {
    color: #c7c7c7;
    font-weight: 700;
  }
  .el-table__row td {
    border-bottom: 1px solid #e6e5e5;
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
  .has-gutter tr th{
    border: 1px solid #e6e5e5;
  }
  /* 自定义样式 */
  .left{
    float: left;
  }
  .right{
    float: right;
  }
  .red{
    color: #d9544f;
  }
  .blue{
    color:#83dada;
  }
</style>
