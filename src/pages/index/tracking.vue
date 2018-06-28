<template>
  <div class = 'container'>
    <div class="pop-back">
      <div class="track-pop">
        <div class="close-login">+</div>
        <h3>业务表详情</h3>
        <div class="main-table">
          <div class="track-pop-table">
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <thead>
              <tr>
                <th>发送日期</th>
                <th>业务</th>
                <th>表名</th>
                <th>发送量</th>
                <th>交换量</th>
                <th>接收量</th>
                <th>待交换量</th>
                <th>待接收量</th>
                <th>交换状态</th>
                <th>接收状态</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>2018-05-21</td>
                <td>办件上报</td>
                <td>pre_accept</td>
                <td>10000</td>
                <td>4000</td>
                <td>0</td>
                <td>5000</td>
                <td>0</td>
                <td><i class="warning fa fa-warning"></i></td>
                <td><i class="correct fa fa-check-circle"></i></td>
              </tr>
              <tr>
                <td>2018-05-21</td>
                <td>办件上报</td>
                <td>pre_accept</td>
                <td>10000</td>
                <td>4000</td>
                <td>0</td>
                <td>5000</td>
                <td>0</td>
                <td><i class="warning fa fa-warning"></i></td>
                <td><i class="correct fa fa-check-circle"></i></td>
              </tr>
              <tr>
                <td>2018-05-21</td>
                <td>办件上报</td>
                <td>pre_accept</td>
                <td>10000</td>
                <td>4000</td>
                <td>0</td>
                <td>5000</td>
                <td>0</td>
                <td><i class="warning fa fa-warning"></i></td>
                <td><i class="correct fa fa-check-circle"></i></td>
              </tr>
              <tr>
                <td>2018-05-21</td>
                <td>办件上报</td>
                <td>pre_accept</td>
                <td>10000</td>
                <td>4000</td>
                <td>0</td>
                <td>5000</td>
                <td>0</td>
                <td><i class="warning fa fa-warning"></i></td>
                <td><i class="correct fa fa-check-circle"></i></td>
              </tr>
              <tr>
                <td>2018-05-21</td>
                <td>办件上报</td>
                <td>pre_accept</td>
                <td>10000</td>
                <td>4000</td>
                <td>0</td>
                <td>5000</td>
                <td>0</td>
                <td><i class="warning fa fa-warning"></i></td>
                <td><i class="correct fa fa-check-circle"></i></td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="pagin clearfix">
            <b class="all-count">总计 12条</b>
            <b class="all-page">共 3页</b>
            <ul>
              <i class="prev-page"></i>
              <li class="cur">1</li>
              <li>2</li>
              <li>3</li>
              <i class="next-page"></i>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="exch-all">
      <div class="exch-top clearfix">
        <div class="top-change">
          <ul>
            <li class="cur">追踪报告</li>
            <li>实时追踪</li>
          </ul>
        </div>
        <div class="top-tab">
          <dl>
            <dt class="cur">日报</dt>
            <dt>月报</dt>
          </dl>
        </div>
      </div>
      <div class="breadcrumbs">恁当前位于：数据追踪 / 追踪报告 / 日报</div>
      <div class="busi-type clearfix">
        <ul>
          <i></i>
          <li class="cur"><span>总览</span></li>
          <li><span>办件上报</span></li>
          <li><span>办件返回</span></li>
          <li><span>统一申报</span></li>
          <li><span>处罚公开</span></li>
          <li><span>裁量信息</span></li>
          <li><span>电子证照</span></li>
          <li><span>权力事项</span></li>
          <li><span>其他八类</span></li>
          <li><span>处罚公开</span></li>
          <li><span>裁量信息</span></li>
          <li><span>电子证照</span></li>
          <li><span>权力事项</span></li>
        </ul>
      </div>
      <div class="result-img">
        <div class="result-select">
          <div class="range-all">
            <span>当日发送</span>
            <ul>
              <li>当日发送</li>
            </ul>
          </div>
        </div>
        <div class="result-center result-table">
          <ul class="clearfix">
            <li>
              <div class="result-col">
                <span>中心前置</span>
                <i><img src="../../assets/server-icon.png"></i>
                <b class="time-length"><img src="../../assets/arrow.png"></b>
                <b class="time-line">发送量：180316</b>
              </div>
            </li>
            <li class="center-col">
              <div class="result-col">
                <span>接收前置</span>
                <i><img src="../../assets/server-icon.png"></i>
                <b class="time-length"><img src="../../assets/arrow.png"></b>
                <b class="time-line">接收量：158422</b>
              </div>
            </li>
            <li class="last-col">
              <div class="result-col">
                <span>数据获取</span>
                <i><img src="../../assets/server-icon.png"></i>
                <b class="time-line">获取量：87223</b>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="report-bottom">
        <div class="report-table main-table">
          <dl class="clearfix">
            <dt><label>起始日期：</label><input type="text" placeholder="请选择日期"></dt>
            <dt><label>结束日期：</label><input type="text" placeholder="请选择日期"></dt>
            <dt><input type="button" value="导出表格"></dt>
          </dl>
          <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <thead>
            <tr>
              <th>发送日期</th>
              <th>业务</th>
              <th>发送量</th>
              <th>交换量</th>
              <th>接收量</th>
              <th>待交换量</th>
              <th>待接收量</th>
              <th>交换状态</th>
              <th>接收状态</th>
              <th>详情</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>2018-05-21</td>
              <td>办件上报</td>
              <td>10000</td>
              <td>4000</td>
              <td>0</td>
              <td>5000</td>
              <td>0</td>
              <td><i class="warning fa fa-warning"></i></td>
              <td><i class="correct fa fa-check-circle"></i></td>
              <td><b class="view-detail">查看</b></td>
            </tr>
            <tr>
              <td>2018-05-21</td>
              <td>办件上报</td>
              <td>10000</td>
              <td>4000</td>
              <td>0</td>
              <td>5000</td>
              <td>0</td>
              <td><i class="warning fa fa-warning"></i></td>
              <td><i class="correct fa fa-check-circle"></i></td>
              <td><b class="view-detail">查看</b></td>
            </tr>
            <tr>
              <td>2018-05-21</td>
              <td>办件上报</td>
              <td>10000</td>
              <td>4000</td>
              <td>0</td>
              <td>5000</td>
              <td>0</td>
              <td><i class="warning fa fa-warning"></i></td>
              <td><i class="correct fa fa-check-circle"></i></td>
              <td><b class="view-detail">查看</b></td>
            </tr>
            <tr>
              <td>2018-05-21</td>
              <td>办件上报</td>
              <td>10000</td>
              <td>4000</td>
              <td>0</td>
              <td>5000</td>
              <td>0</td>
              <td><i class="warning fa fa-warning"></i></td>
              <td><i class="correct fa fa-check-circle"></i></td>
              <td><b class="view-detail">查看</b></td>
            </tr>
            <tr>
              <td>2018-05-21</td>
              <td>办件上报</td>
              <td>10000</td>
              <td>4000</td>
              <td>0</td>
              <td>5000</td>
              <td>0</td>
              <td><i class="warning fa fa-warning"></i></td>
              <td><i class="correct fa fa-check-circle"></i></td>
              <td><b class="view-detail">查看</b></td>
            </tr>
            </tbody>
          </table>
          <div class="pagin clearfix">
            <b class="all-count">总计 12条</b>
            <b class="all-page">共 3页</b>
            <ul>
              <i class="prev-page"></i>
              <li class="cur">1</li>
              <li>2</li>
              <li>3</li>
              <i class="next-page"></i>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { getbusinessList } from '../../api/tracking'

  export default {
    data() {
      return {
      }
    },
    created () {
      getbusinessList()
    }
  }
</script>
<style lang="css" scoped>
  @import "../../assets/css/tracking/track.css";
  @import "../../assets/css/tracking/exchange.css";
  @import "../../assets/css/tracking/default.css";
</style>
