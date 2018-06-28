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
  </div>
</template>

<script>
  import {toggleClass} from '../../assets/js/domclass.js'

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
        ]
      }
    },
    created () {
    },
    methods:{
      opendropdowmenu () {
        let dropmenuDom = document.querySelector('.business-box')
        if (this.hasClass(dropmenuDom,'active')) {
          dropmenuDom.classList.add('active')
        }else {
          dropmenuDom.classList.remove()
        }
      },
       hasClass (obj, cls) {
        return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
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
    height:80px;
    overflow:hidden;
    & ul{
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
  .left{
    float: left;
  }
  .right{
    float: right;
  }
</style>
