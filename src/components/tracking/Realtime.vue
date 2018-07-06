<template>
 <div>
   <el-row class = 'navigation'>
     <el-col :span = '24'>
       <el-breadcrumb separator="/">
         <el-breadcrumb-item v-for = 'item in path' :key = 'item.index'>{{item.pathname}}</el-breadcrumb-item>
       </el-breadcrumb>
     </el-col>
   </el-row>
   <el-row class = 'data-content'>
      <el-col :span = '11'>
        <div class="track-left">
          <ul>
            <li class="cur">
              <i></i><h4>业务域：<span></span></h4>
              <dl>
                <dt>办件返回</dt>
                <dt>裁量信息</dt>
                <dt>其他八类</dt>
                <dt>投资项目</dt>
                <dt>处罚下发</dt>
                <dt>办件上报</dt>
                <dt>多证合一</dt>
                <dt>双打办</dt>
                <dt>投资返回</dt>
                <dt>行政审批</dt>
                <dt>统一申报</dt>
                <dt>电子证照</dt>
                <dt>数据共享</dt>
                <dt>信用返回</dt>
                <dt>中介超市</dt>
                <dt>处罚公开</dt>
                <dt>权力事项</dt>
                <dt>厅局汇聚</dt>
                <dt>行政处罚</dt>
              </dl>
            </li>
            <li>
              <i></i><h4>节点：<span></span><input type="text"></h4>
              <dl>
                <dt>杭州市</dt>
                <dt>余杭区</dt>
                <dt>丽水市</dt>
                <dt>省教育局</dt>
                <dt>舟山市</dt>
                <dt>省林业局</dt>
                <dt>温州市</dt>
                <dt>上城区</dt>
                <dt>滨江区</dt>
                <dt>省财政厅</dt>
                <dt>下城区</dt>
                <dt>萧山区</dt>
                <dt>省公安厅</dt>
                <dt>宁波市</dt>
                <dt>富阳</dt>
                <dt>省发改委</dt>
                <dt>省民政局</dt>
                <dt>嘉兴市</dt>
                <dt>衢州市</dt>
                <dt>...</dt>
              </dl>
            </li>
            <li>
              <i></i><h4>业务表名：<span></span><input type="text"></h4>
              <dl>
                <dt>pre_accept</dt>
                <dt>pre_attr</dt>
                <dt>pre_charge</dt>
                <dt>pre_accept</dt>
                <dt>pre_attr</dt>
                <dt>pre_charge</dt>
                <dt>pre_accept</dt>
                <dt>pre_attr</dt>
                <dt>pre_charge</dt>
                <dt>pre_accept</dt>
                <dt>pre_attr</dt>
                <dt>pre_charge</dt>
                <dt>pre_accept</dt>
                <dt>pre_attr</dt>
                <dt>pre_charge</dt>
                <dt>pre_accept</dt>
                <dt>pre_attr</dt>
                <dt>pre_charge</dt>
                <dt>pre_accept</dt>
                <dt>pre_attr</dt>
                <dt>pre_charge</dt>
                <dt>pre_accept</dt>
                <dt>pre_attr</dt>
                <dt>pre_charge</dt>
              </dl>
            </li>
            <li class="condition-line">
              <i></i><h4>追踪条件：<span></span></h4>
              <dl>
                <dt><label>PROHID1:</label><input type="text" placeholder="qwertyuiop"></dt>
                <dt><label>PROHID2:</label><input type="text" placeholder="qwertyuiop"></dt>
                <dt><label>PROHID3:</label><input type="text" placeholder="qwertyuiop"></dt>
              </dl>
            </li>
            <div class="track-btn">
              <b>开始追踪</b>
            </div>
          </ul>
        </div>
      </el-col>
      <el-col :span = '2'>
      </el-col>
      <el-col :span = '11'>
        <div class="track-right">
          <div class="main-table track-table">
            <h3>元数据说明</h3>
            <table cellpadding="0" cellspacing="0" width="100%" border="0">
              <thead>
              <tr>
                <th>字段名</th>
                <th>字段类型</th>
                <th>字段长度</th>
                <th>是否可为空</th>
                <th>是否主键</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              </tbody>
            </table>
            <el-pagination
              layout="prev, pager, next"
              :total="50">
            </el-pagination>
          </div>
        </div>
      </el-col>
   </el-row>
 </div>
</template>

<script>
    export default {
        data () {
          return {
            tableData:[],
            bsList:[],
            path:[
              {'pathname': '您当前位于:','index':'1'},
              {'pathname': '数据追踪','index':'2'},
              {'pathname': '实时追踪','index':'3'},
            ]
          }
        },
      mounted () {
        this.$store.dispatch('timebscodeMenu', {}).then(res => {
          if (res) {
            this.bsList = res.data
          }
        })  //请求三级菜单的数据

        $(".track-left").delegate("dt","click",function() {
          if($(this).parent().parent().index() == ($(".track-left li").length - 1)) {
            return;
          }
          else if($(this).parent().parent().index() == ($(".track-left li").length - 2)) {
            $(this).addClass("cur").siblings().removeClass("cur");
            $(this).parent().parent().find("h4 span").html($(this).html());
            $(this).parent().parent().next().addClass("cur");
            $(this).parent().parent().removeClass("cur");
            $(".track-btn b").addClass("active");
            $(this).parent().parent().find("i").addClass("selected");
            $(this).parent().parent().next().find("i").addClass("selected");
          }
          else {
            $(this).addClass("cur").siblings().removeClass("cur");
            $(this).parent().parent().find("h4 span").html($(this).html());
            $(this).parent().parent().next().addClass("cur");
            $(this).parent().parent().removeClass("cur");
            $(this).parent().parent().find("i").addClass("selected");
          }
        });
        $(".track-left").delegate(".selected","click",function() {
          $(this).parent().toggleClass("cur");
        });
      }
    }
</script>

<style lang = 'postcss' scoped>
  .navigation{
    margin:20px;
  }
  .data-content{
    margin:20px 50px;
  }
  .track-main {
    width: 100%;
    height: 100%;
    padding: 103px 20px 20px;
    position: absolute;
    left: 0;
    top: 0;
  }
  .track-left, .result-left {
    width: 100%;
    min-height: 850px;
    float: left;
    background: #fff;
    border-radius: 3px;
    overflow-y: auto;
  }
  .track-left ul {
    padding: 25px 40px 0 30px;
  }
  .track-left ul li {
    position: relative;
    margin-bottom: 25px;
  }
  .track-left ul li h4 {
    height: 42px;
    line-height: 40px;
    border-radius: 25px;
    background: #fff;
    color: #333;
    font-size: 16px;
    padding-left: 70px;
    font-weight: 400;
    position: relative;
    z-index: 10;
    border: #aaa 1px solid;
  }
  .track-left ul li h4 span {
    font-size: 14px;
  }
  .track-left ul li i {
    display: block;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    position: absolute;
    background: #fff;
    border: #aaa 1px solid;
    left: 0;
    top: -8px;
    cursor: pointer;
    z-index: 16;
  }
  .track-left ul li i:before {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    position: absolute;
    background: #fff;
    left: 19px;
    top: 20px;
    border-left: #aaa 2px solid;
    border-top: #aaa 2px solid;
    transform:rotate(135deg);
    -ms-transform:rotate(135deg); 	/* IE 9 */
    -moz-transform:rotate(135deg); 	/* Firefox */
    -webkit-transform:rotate(135deg); /* Safari 和 Chrome */
    -o-transform:rotate(135deg); 	/* Opera */
  }
  .track-left ul li.cur h4 {
    background: #5bbfde;
    border: #5bbfde 1px solid;
    color: #fff;
    position: relative;
  }
  .track-left ul li h4 input[type="text"] {
    display: none;
  }
  .track-left ul li.cur h4 input[type="text"] {
    display: block;
    width: 120px;
    height: 24px;
    line-height: 24px;
    border: none;
    border-bottom: #fff 1px solid;
    background: none;
    position: absolute;
    right: 20px;
    top: 8px;
    color: #fff;
    font-size: 12px;
    background: url(../../assets/search-icon.png) no-repeat left 2px;
    background-size: 18px;
  }
  .track-left ul li.cur i {
    background: #5bbfde;
    border: #5bbfde 1px solid;
    box-shadow: rgba(0,0,0,0.4) 0 0 3px;
  }
  .track-left ul li.cur i:before {
    background: #5bbfde;
    left: 20px;
    border-left: #fff 2px solid;
    border-top: #fff 2px solid;
    transform:rotate(-135deg);
    -ms-transform:rotate(-135deg); 	/* IE 9 */
    -moz-transform:rotate(-135deg); 	/* Firefox */
    -webkit-transform:rotate(-135deg); /* Safari 和 Chrome */
    -o-transform:rotate(-135deg); 	/* Opera */
  }
  .track-left ul li.cur dl {
    display: block;
  }
  .track-left ul li dl {
    border-left: #aaa 1px dashed;
    margin-left: 27px;
    padding: 10px;
    padding-bottom: 0;
    display: none;
  }
  .track-left ul li dl dt {
    display: inline-block;
    width: 120px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    color: #555;
    padding: 0 10px;
    text-align: center;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    cursor: pointer;
  }
  .track-left ul li dl dt.cur {
    color: #5bbfde;
  }
  .track-left ul li.condition-line dl dt {
    display: block;
    width: 100%;
    margin-bottom: 15px;
  }
  .track-left ul li.condition-line dl dt label {
    line-height: 30px;
    display: inline-block;
    width: 90px;
    text-align: right;
    float: left;
  }
  .track-left ul li.condition-line dl dt input[type="text"] {
    margin-left: 15px;
    border: #aaa 1px solid;
    border-radius: 15px;
    height: 30px;
    line-height: 30px;
    padding: 0 12px;
    font-size: 12px;
    color: #333;
    float: left;
    width: 76%;
  }
  .track-btn {
    text-align: center;
    margin-bottom: 20px;
  }
  .track-btn b {
    display: inline-block;
    width: 100px;
    height: 100px;
    line-height: 100px;
    background: #aaa;
    border-radius: 50%;
    color: #fff;
    font-size: 14px;
    box-shadow: rgba(0,0,0,0.4) 0 0 5px;
    text-align: center;
    cursor: pointer;
  }
  .track-btn b.active {
    background: #5bbfde;
  }
  .track-right {
    min-height: 820px;
    padding-left: 50px;
    position: relative;
  }
  .track-table {
    width: 100%;
    min-height: 820px;
    background: #fff;
    border-radius: 3px;
    padding: 15px 20px;
    overflow-y: auto;
  }
  .result-table, .result-show {
    padding: 10px 20px;
  }
  .track-table h3, .result-table h3, .result-show h3 {
    margin-bottom: 15px;
    font-size: 16px;
    line-height: 14px;
    padding: 0;
    height: 16px;
    font-weight: 400;
    border-left: #40cbcc 3px solid;
    padding-left: 8px;
  }
  .track-table.main-table thead th {
    background: #cdecf5;
  }
  .track-table.main-table tbody td {
    height: 36px;
  }
  .result-detail {
    position: relative;
    background: #f5f5f5;
    height: 50px;
    font-size: 12px;
    margin: 15px 35px 5px 15px;
    border-radius: 25px 0 0 25px;
  }
  .result-detail dl {
    margin: 0 60px 0 20px;
    padding-top: 7px;
  }
  .result-detail dl dt {
    display: inline-block;
    width: 32%;
    line-height: 16px;
    height: 16px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-size: 12px;
  }
  .result-detail dl dt.condition {
    width: 90%;
  }
  .result-detail b {
    display: inline-block;
    width: 64px;
    height: 64px;
    line-height: 64px;
    background: #5bbfde;
    border-radius: 50%;
    color: #fff;
    font-size: 12px;
    box-shadow: rgba(0,0,0,0.4) 0 0 5px;
    text-align: center;
    cursor: pointer;
    position: absolute;
    right: -20px;
    top: -6px;
  }
  .result-table ul li {
    width: 33.3%;
    float: left;
    position: relative;
  }
  .result-table ul li.center-col .result-col {
    margin: 0 auto;
  }
  .result-table ul li.last-col .result-col {
    float: right;
  }
  .result-col {
    width: 150px;
    height: 180px;
    box-shadow: rgba(91,191,222,0.6) 0 0 4px;
    padding: 4px 12px;
    position: relative;
  }
  .result-col span {
    display: block;
    text-align: center;
    font-size: 14px;
    color: #333;
    border-bottom: #eee 1px solid;
    line-height: 30px;
    height: 34px;
    padding-bottom: 8px;
    width: 100%;
    overflow: hidden;
  }
  .result-col i {
    display: block;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: #5bbfde 5px solid;
    margin: 20px auto 15px auto;
    background: #fff;
    position: relative;
    z-index: 22;
  }
  .result-col b.time-length {
    width: 110%;
    height: 14px;
    line-height: 14px;
    padding: 0;
    background: #5bbfde;
    color: #fff;
    font-size: 12px;
    text-align: center;
    position: absolute;
    left: 75px;
    top: 90px;
    font-weight: 400;
    z-index: 10;
  }
  .last-col .result-col b.time-length {
    left: auto;
    right: 100px;
  }
  .result-col b.time-line {
    display: block;
    text-align: center;
    font-size: 12px;
    color: #333;
    line-height: 24px;
  }
  .result-col i img {
    width: 40px;
    position: relative;
    left: 15px;
    top: 15px;
  }
  .top-tab {
    height: 30px;
    float: right;
  }
  .top-tab dl dt {
    float: left;
    height: 30px;
    line-height: 28px;
    padding: 0 20px;
    border: #ccc 1px solid;
    color: #666;
    font-size: 14px;
    cursor: pointer;
  }
  .top-tab dl dt:nth-child(1) {
    border-right: none;
    border-radius: 3px 0 0 3px;
  }
  .top-tab dl dt:nth-child(2) {
    border-radius: 0 3px 3px 0;
  }
  .top-tab dl dt.cur {
    background: #5bbfde;
    color: #fff;
    border-color: #5bbfde;
  }
  .result-img {
    background: #fff;
    border-radius: 3px;
    margin: 15px 20px;
    position: relative;
    z-index: 21;
  }
  .result-select {
    float: left;
    position: relative;
    left: 20px;
    top: 20px;
  }
  .result-center {
    padding: 15px 180px;
    width: 100%;
  }
  .result-center .time-length img {
    height: 10px;
    position: relative;
    top: 1px;
  }
  .report-bottom {
    width: 100%;
    height: 100%;
    padding: 390px 20px 15px 20px;
    position: absolute;
    left: 0;
    top: 0;
  }
  .report-table {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background: #fff;
    border-radius: 3px;
  }
  .report-table {
    padding: 15px;
  }
  .report-table dl {
    padding-bottom: 15px;
  }
  .report-table dl dt {
    float: left;
  }
  .report-table dl dt input[type="text"] {
    background: #f5f5f5;
    height: 28px;
    line-height: 28px;
    width: 140px;
    padding: 0 10px;
    font-size: 12px;
    border: none;
    border-radius: 2px;
    margin-right: 15px;
  }
  .report-table dl dt input[type="button"] {
    background: #5bbfde;
    height: 28px;
    line-height: 28px;
    color: #fff;
    width: 100px;
    text-align: center;
    font-size: 12px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
  }
  .report-table dl dt input[type="button"]:hover {
    background: #3ea7c7;
    box-shadow: rgba(0,0,0,0.3) 0 0 3px;
  }
  .report-table dl dt label{
    line-height: 28px;
    font-size: 12px;
  }
  .report-table.main-table tbody td {
    padding: 4px 10px;
    line-height: 24px;
  }
  .main-table tbody td i {
    display: inline-block;
    width: 16px;
    height: 16px;
    position: relative;
    margin-right: 0.5rem;
    top: 0;
    font-size: 0.62rem;
  }
  .main-table tbody td i.warning {
    color: #d9544f;
  }
  .main-table tbody td i.correct {
    color: #40cbcc;
  }
  .main-table tbody td b {
    background: #5bbfde;
    display: inline-block;
    height: 20px;
    line-height: 20px;
    border-radius: 3px;
    color: #fff;
    text-align: center;
    position: relative;
    top: 1px;
    padding: 0 25px;
    font-size: 12px;
    cursor: pointer;
  }
  .main-table tbody td b:hover {
    background: #3ea7c7;
    box-shadow: rgba(0,0,0,0.3) 0 0 3px;
  }
  .pop-back {
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 48;
    display: none;
  }
  .track-pop {
    width: 1000px;
    height: 640px;
    background: #fff;
    border-radius: 6px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -500px;
    margin-top: -320px;
  }
  .track-pop h3 {
    font-size: 16px;
    padding: 15px 20px;
    border-bottom: #e7e7e7 1px solid;
  }
  .track-pop-table {
    margin: 15px 0 0;
    padding: 0 15px;
    height: 520px;
    overflow-y: auto;
    border-bottom: #e7e7e7 1px solid;
  }
  .track-pop .pagin {
    padding: 15px;
  }
  .main-table .track-pop-table tbody td {
    padding: 6px 10px;
  }
  .main-table .track-pop-table tbody td i {
    top: 0;
  }
  .close-login {
    display: block;
    width: 20px;
    height: 20px;
    position: absolute;
    right: 20px;
    top: 15px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    font-size: 28px;
    color: #666;
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    cursor: pointer;
    font-weight: 100;
  }
</style>
