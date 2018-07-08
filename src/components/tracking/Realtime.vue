<template>
  <div class = 'container'>
    <el-row class = 'navigation'>
      <el-col :span = '24'>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item v-for = 'item in path' :key = 'item.index'>{{item.pathname}}</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span = '12' class = 'lib-content' v-if = 'startBefore'>

        <div class = 'libs-item'>
          <div class = 'lib-box domain'>
            <div class = 'icon' @click = 'spreadMenu($event,1)'>
              <i class = 'iconfont icon-xia'></i>
            </div>
            <div class = 'lib'>
              <span class = 'title-name'>{{businesslibName}}</span>
              <span class = 'select-business' ref = 'BusinessName'></span>
            </div>
          </div>
          <div class = 'MenuList'>
            <ul>
              <li v-for = 'item in businessList' :key = 'item.bscode'>
                <a href="javascript:void(0)" :class = 'item.bscode' @click = 'selectBusiness($event)'>{{item.bsname}}</a>
              </li>
            </ul>
          </div>
        </div>


        <div class = 'libs-item'>
          <div class = 'lib-box table'>
            <div class = 'icon' @click = 'spreadMenu($event,2)'>
              <i class = 'iconfont icon-xia'></i>
            </div>
            <div class = 'lib'>
              <span class = 'title-name'>{{tablelibName}}</span>
              <span class = 'select-table' ref = 'tablename'></span>
            </div>
          </div>
          <div class = 'MenuList'>
            <ul>
              <li v-for = 'item in tableList' :key = 'item.tableId'>
                <a href="javascript:void(0)" :class = 'item.tableId' @click = 'selectTable($event)'>{{item.tableName}}</a>
              </li>
            </ul>
          </div>
        </div>

        <div class = 'libs-item condition-box'>
          <div class = 'lib-box condition'>
            <div class = 'icon' @click = 'spreadMenu($event,3)'>
              <i class = 'iconfont icon-xia'></i>
            </div>
            <div class = 'lib'>
              <span class = 'title-name'>{{conditionName}}</span>
            </div>
          </div>
          <div class = 'MenuList'>
            <ul>
              <li v-for = 'item in conditionList' :key = 'item.columnName'>
                <div class="input-box">
                  <span>{{item.columnName}}</span>
                  <input placeholder="请输入条件" :class = 'item.columnName'>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class = 'start-trace' :class ={activate:btnStatus} @click = 'startTrace'>
          <span>开始追踪</span>
        </div>

      </el-col>
      <el-col :span = '12' class = 'result-content' v-else >
        <div class = 'result-text'>
          <div class = 'detail'>
            <p class = 'detail-nameone'><span>业务域: </span><span>{{businessName}}</span></p>
            <p class = 'detail-nametwo'><span>业务表名: </span><span>{{tableName}}</span></p>
            <p class = 'detail-namethree'><span>追踪条件: </span><span>{{conditionText}}</span></p>
            <div class = 'btn-start' @click = 'cutMenu'>
              <span>继续追踪</span>
            </div>
          </div>
        </div>

        <el-row>
        <el-col :span = '24' class = 'result-title'>追踪结果</el-col>
      </el-row>
        <div class = 'result-flow'>
          <el-row class = 'data-exhibition'>
            <el-col :span = '24' class = 'step-container'>
              <div class = 'step-box'>
                <p class = 'step-title'>滨江区</p>
                <div class = 'cut-line'></div>
                <div class = 'server-box'>
                  <img src="~/assets/server-icon.png">
                </div>
                <p><a href="javascript:void(0)" ref = 'send'></a></p>
              </div>
              <div class = 'step-box'>
                <p class = 'step-title'>省中心</p>
                <div class = 'cut-line'></div>
                <div class = 'server-box'>
                  <img src="~/assets/server-icon.png">
                </div>
                <p><a href="javascript:void(0)" ref = 'rcv'></a></p>
              </div>
              <div class = 'step-box'>
                <p class = 'step-title'>南威公司</p>
                <div class = 'cut-line'></div>
                <div class = 'server-box'>
                  <img src="~/assets/server-icon.png">
                </div>
                <p><a href="javascript:void(0)" ref = 'finished'></a></p>
              </div>
            </el-col>
          </el-row>
        </div>

        <el-row>
          <el-col :span = '24' class = 'result-title'>更多结果</el-col>
          <el-table
            class = 'ResultBox'
            :data="ResultTableData"
            border
            stripe
            style="width: 100%">
            <el-table-column
              prop="date"
              label="发送时间"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="交换时间"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="接收时间">
            </el-table-column>
            <el-table-column
              prop="address"
              label="交换耗时">
            </el-table-column>
            <el-table-column
              prop="address"
              label="业务耗时">
            </el-table-column>
          </el-table>
        </el-row>

      </el-col>
      <el-col :span = '11' class = 'table-box'>
        <div class = 'table-margin'>
          <p class = 'title-name'>元数据说明</p>
          <el-table
            stripe
            border
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="columnName"
              label="字段名"
              align="center"
              width="180">
            </el-table-column>
            <el-table-column
              prop="columnType"
              label="字段类型"
              align="center"
              width="180">
            </el-table-column>
            <el-table-column
              prop="columnLength"
              align="center"
              label="字段长度">
            </el-table-column>
            <el-table-column
              prop="isNull"
              align="center"
              label="是否可为空">
              <template scope = 'scope'>
                <span>{{scope.row.isNull == 'NO'?'否':'是'}}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="isKey"
              align="center"
              label="是否主键">
              <template scope = 'scope'>
                <span>{{scope.row.isNull == 'NO'?'否':'是'}}</span>
              </template>
            </el-table-column>
          </el-table>
          <el-row class = 'pagination-box'>
            <el-col class = 'pageMessage'>
              <p>共<span>{{totalpageNumber}}</span>页</p>
            </el-col>
            <el-col class = 'pageContent'>
              <el-pagination
                layout="prev, pager, next"
                :page-size="10"
                :current-page="currentPage"
                :total="tableRow"
                @current-change='gettableinner'
                >
              </el-pagination>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export  default {
    data () {
      return {
        startBefore:true,
        ResultData:[],
        businessList:[],
        tableData:[],
        conditionList:[],
        businesslibName:'业务域',
        tablelibName:'业务表名',
        conditionName:'追踪条件',
        conditionText:'',
        businessName:'',
        condittext:'',
        businessActive:false,
        tableActive:false,
        totalpageNumber:1,
        tableName:'',
        tableRow:0,
        tableId:0,
        currentPage:1,
        tableList:[],
        bscode:'',
        btnStatus:false,
        path:[
          {'pathname': '您当前位于:','index':'1'},
          {'pathname': '数据追踪','index':'2'},
          {'pathname': '实时追踪','index':'3'},
        ],
      }
    },
    mounted () {
      this.$store.dispatch('timebscodeMenu',{}).then(res => {
        this.businessList = res.data
      })
    },
    methods: {
      spreadMenu (obj,id) {
        let el = obj.target
        $(el).parents('.libs-item').removeClass('selected')
        $(el).parents('.libs-item').toggleClass('active')
        if (id == 1) {
          this.businessActive = true
        }else if (id == '2'){
          this.tableActive = true
        }
      },
      selectBusiness (obj) {  //选中业务域
        let el = obj.target
        $(el).addClass('active')
        $(el).parent().siblings().find('a').removeClass('active')
        this.businesslibName = '业务域：'
        this.$refs.BusinessName.innerHTML = $(el).text()
        this.businessName = $(el).text()
        this.bscode = el.classList[0]
        this.getbscodeTable()
        $('.lib-box.table').parent().addClass('active')
        $(el).parents('.libs-item').removeClass('active')
        $(el).parents('.libs-item').addClass('selected')
      },
      selectTable (obj) {  //选中业务表名
        let el = obj.target
        $(el).addClass('active')
        $(el).parent().siblings().find('a').removeClass('active')
        this.tablelibName = '业务表名：'
        this.$refs.tablename.innerHTML = $(el).text()
        this.tableName = $(el).text()
        this.tableId = el.classList[0]
        this.gettableinner()
        $(el).parents('.libs-item').removeClass('active')
        $(el).parents('.libs-item').addClass('selected')
        this.getPROJIDinner()
        $('.lib-box.condition').parent().addClass('active')
        this.btnStatus = true
      },
      getbscodeTable () {
        this.$store.dispatch('bscodeTable',{bscode:this.bscode}).then(res => {
          this.tableList = res.data
        })
      },
      gettableinner (pageNumber) {
        this.$store.dispatch('columnDetails',{tableId:this.tableId,pageNumber:pageNumber?pageNumber:1}).then(res => {
          this.tableData = res.data.list
          this.totalpageNumber = res.data.pageSize
          this.currentPage = res.data.pageNumber
          this.tableRow = res.data.totalRow
        })
      },
      getPROJIDinner () {
        this.$store.dispatch('tablePROJID',{tableId:this.tableId}).then(res => {
          this.conditionList = res.data
        })
      },

      startTrace () {
        let params = this.JsonFormat()
        this.$store.dispatch('selectResult',{tableId:this.tableId,bscode:this.bscode,para:params,tableName:this.tableName}).then(res => {
          if (res.data){
            this.ResultData = res.data
            this.startBefore = false
          }
        })
      },

      JsonFormat () {
        let conditList = this.conditionList
        let params = {}
        let condittext = ''
        conditList.forEach((item) => {
          params[item.columnName] = $("."+item.columnName).val()
          condittext += `${item.columnName}=${$("."+item.columnName).val()}`
        })
        params = JSON.stringify(params)
        this.conditionText = condittext
        return params
      },

      cutMenu() {
        this.startBefore = true
      }
    }
  }
</script>
<style lang = 'postcss' scoped>
  .lib-content{
    margin-left:20px;
    background: #ffffff;
    height: 800px;
    position: relative;
  }
  .table-box{
    position: relative;
    margin-left:20px;
    background: #ffffff;
    min-height: 850px;
    & .title-name{
        padding-left: 20px;
        border-left: 4px solid #5abfdf;
        font-size: 16px;
      }
    & .table-margin{
        width: 100%;
        height:100%;
      }
  }
  .navigation{
    padding: 20px;
  }
  .lib-box{
    position: relative;
    width:80%;
    height:60px;
    border:1px solid #aaaaaa;
    margin:0px auto;
    margin-top: 50px;
    border-radius:25px;
    background:#ffffff;
    & .icon{
        position: absolute;
        border: 1px solid #aaaaaa;
        width: 78px;
        height: 78px;
        border-radius:50%;
        left: -40px;
        top:-10px;
        background:#ffffff;
        cursor:pointer;
    & i{
        position: absolute;
        font-size:30px;
        left: 24px;
        top:24px;
        color: #9b9897;
      }
      }
      & .lib{
          position: absolute;
          left: 60px;
          top: 0;
          & .title-name{
            font-size:20px;
            color: #9b9b9b;
            font-weight: 600;
            line-height: 60px;
          }
          & .select-business{
              color: #8a8a8a;
              font-size:16px;
              font-weight: 700;
              padding-left: 20px;
            }
          & .select-table{
              color: #ffffff;
              font-size:16px;
              font-weight: 700;
              padding-left: 20px;
            }
        }
  }
  .MenuList{
      margin: 0px auto;
      padding-top: 20px;
      width: 80%;
      display: none;
      border-left:1px dashed #8b8c84;
      & ul{
          & li{
              display: inline-block;
                & a{
                    display: block;
                    padding:20px;
                    color: #8e8e8e;
                  }
                & a.active{
                    color: #5bbfde;
                  }
            }
        }
    }

  .libs-item.active{
    & .lib-box{
        background: #5bbfde;
      }
    & .select-business{
        color: #ffffff;
      }
    & .select-table{
        color: #8a8a8a;

      }
    & .icon{
           background: #5bbfde;
           border: 0px;
           box-shadow: darkgrey 1px 1px 15px 0px;
    & i{
        transition: all .3s ease;
        transform: rotate(90deg);
        color: #ffffff;
      }
    }
    & .title-name{
        color: #ffffff;
      }
    & .MenuList{
        display: block;
      }
  }

  .libs-item.selected .lib-box{
    border: 1px solid #48c0e6;
    & .icon{
        border: 1px solid #48c0e6;
        & i{
            color: #48c0e6;
          }
       }
  & .select-table{
      color: #8a8a8a;

    }
  }
  .start-trace{
    width: 150px;
    height: 150px;
    position: absolute;
    bottom: 0px;
    left: 35%;
    right: 35%;
    margin: 50px auto;
    background: #aaaaaa;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    box-shadow: darkgrey 1px 1px 15px 5px;
    cursor: not-allowed;
    & span{
        position: absolute;
        line-height: 150px;
        width: 150px;
        font-weight: 700;
        font-size:20px;
        text-align: center;
        color: #fbfbfb;
      }
  }
  .start-trace.activate{
    background: #5bbfde;
    box-shadow: #5bbfde 1px 1px 15px 5px;
    cursor: pointer;
  }
  .pagination-box{
    width: 100%;
    position: absolute;
    bottom: 0px;
  }
  .pageMessage{
    text-align: left;
    width:50%;
    & p{
        padding-left: 20px;
        color: #606060;
    }
  }
  .pageContent{
    width: 30%;
    text-align: right;
  }
  .el-table thead tr th {
    color: #000;
    background-color: #eeeeee;
  }
  .pagination-number .el-pagination {
    text-align: right;
  }
  .condition-box ul li{
    margin: 20px 20px;
    display: block;
  }
  .condition-box .el-input{
    width:80%;
  }
  .input-box{
    position: relative;
  }
  .input-box input{
    position: absolute;
    right: 20%;
    width: 50%;
    height: 48px;
    border: 1px solid #ccc9c9;
    border-radius: 5px;
  }
  .input-box span{
    line-height: 50px;
  }
  .result-content{
    margin-left: 20px;
    min-width: 500px;
    min-height: 850px;
    background: #ffffff;
    & .result-text{
        margin: 20px 5%;
        width: 90%;
        height: 100px;
        border-radius: 50px;
        background: #f5f5f5;
        & .detail{
          position: relative;
          & .detail-nameone{
              position: absolute;
              left: 50px;
              top:20px;
          }
          & .detail-nametwo{
              position: absolute;
              left: 200px;
              top:20px;
            }
          & .detail-namethree{
              position: absolute;
              left: 50px;
              top:50px;
            }
          & .btn-start{
              position: absolute;
              right: 0px;
              top:0px;
              width: 100px;
              height: 100px;
              border-radius: 50%;
              background: #5bbfde;
              cursor:pointer;
              & span{
                  position: absolute;
                  top: 40px;
                  left: 17px;
                  color:#ffffff;
                }
            }
        }
      }
  .result-title{
    font-size: 24px;
    font-weight: 700;
    padding:0 20px;
    margin: 10px 20px;
    border-left: 5px solid #40cbcc;
  }
  .data-exhibition {
    position: relative;
    background: #ffffff;
    margin: 20px;
    height: 240px;
  & .data-type {
      margin: 20px 0 0 20px;
  & .el-input__inner {
      width: 120px;
      background: #5bbfde;
      color: #ffffff;
      text-align: center;
    }
  & .el-input__suffix .el-input__suffix-inner i {
      color: #ffffff;
    }
  }
  .step-container {
  & .step-box {
      position: relative;
      margin-left: 60px;
      display: inline-block;
      height: 245px;
      width: 185px;
      text-align: center;
      box-shadow: 0 0 5px #6ffaff;
  & .step-title {
      margin-top: 15px;
    }
  & .cut-line {
      margin: 10px auto;
      width: 150px;
      height: 1px;
      background: #ececec;
    }
  & .server-box {
      margin: 20px auto;
      height: 100px;
      width: 100px;
      border: 10px solid #5bbfde;
      border-radius: 50%;
  img {
    margin: 21px 0px;
  }
  }
  p {
  & a {
      color: #055486;
    }
  }
  }
  }
  }
  }
</style>
