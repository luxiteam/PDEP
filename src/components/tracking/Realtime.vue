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
      <el-col :span = '12' class = 'lib-content'>

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

        <div class = 'libs-item'>
        <div class = 'lib-box'>
          <div class = 'icon' @click = 'spreadMenu($event,3)'>
            <i class = 'iconfont icon-xia'></i>
          </div>
          <div class = 'lib'>
            <span class = 'title-name'>追踪条件</span>
          </div>
        </div>
        </div>

        <div class = 'start-trace'>
          <span>开始追踪</span>
        </div>

      </el-col>
      <el-col :span = '10' class = 'table-box'>
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
        businessList:[],
        tableData:[],
        businesslibName:'业务域',
        tablelibName:'业务表名',
        businessActive:false,
        tableActive:false,
        totalpageNumber:1,
        tableRow:0,
        tableId:0,
        currentPage:1,
        tableList:[],
        bscode:'',
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
        this.tableId = el.classList[0]
        this.gettableinner()
        $(el).parents('.libs-item').removeClass('active')
        $(el).parents('.libs-item').addClass('selected')
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
    height: 800px;
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
    & .lib-box .lib .select-table{
        color: #aaaaaa;
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
    cursor:pointer;
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
</style>
