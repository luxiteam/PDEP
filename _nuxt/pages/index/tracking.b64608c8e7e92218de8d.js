webpackJsonp([2],{EalQ:function(t,e,a){"use strict";e.a={data:function(){return{businessList:[{name:"办件返回",value:1600},{name:"办件上报",value:200},{name:"统一申报",value:1e3},{name:"处罚公开",value:500},{name:"裁量信息",value:800},{name:"多证合一",value:1200},{name:"电子证照",value:700},{name:"权力事项",value:1500},{name:"其他八类",value:300},{name:"双打办",value:1e3},{name:"数据共享",value:2e3},{name:"厅局汇聚",value:300},{name:"投资项目",value:600},{name:"投资返回",value:900},{name:"信用返回",value:300},{name:"行政处罚",value:800}],tableData:[],pickerOptions1:{disabledDate:function(t){return t.getTime()>Date.now()},shortcuts:[{text:"今天",onClick:function(t){t.$emit("pick",new Date)}},{text:"昨天",onClick:function(t){var e=new Date;e.setTime(e.getTime()-864e5),t.$emit("pick",e)}},{text:"一周前",onClick:function(t){var e=new Date;e.setTime(e.getTime()-6048e5),t.$emit("pick",e)}}]},pickerOptions2:{disabledDate:function(t){return t.getTime()>Date.now()},shortcuts:[{text:"今天",onClick:function(t){t.$emit("pick",new Date)}},{text:"昨天",onClick:function(t){var e=new Date;e.setTime(e.getTime()-864e5),t.$emit("pick",e)}},{text:"一周前",onClick:function(t){var e=new Date;e.setTime(e.getTime()-6048e5),t.$emit("pick",e)}}]},value1:"",value2:""}},created:function(){},mounted:function(){},methods:{opendropdowmenu:function(){$(".business-box").toggleClass("active")}}}},"Eo/U":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".container{min-height:1200px;min-width:1200px;background:#f5f5f5}.nav-bar{background:#fff}.nav-btn{margin:20px}.nav-btn.active{background:#5bbfde;color:#fff}.nav-btn-list{margin:20px}.report.active{color:#fff;background:#5bbfde}.navigation{margin:15px}.business-box{position:relative;background:#fff;margin:0 20px;overflow:hidden;height:80px;transtion:height .5s}.business-box ul{position:absolute;left:0;top:0}.business-box ul li{display:inline-block}.business-box ul li a{color:#000;display:inline-block;padding:30px}.business-box ul li a.dropdown{position:absolute;top:0;right:10px}.business-box.active{height:164px;-webkit-transition:height .5s;transition:height .5s}.data-exhibition{position:relative;background:#fff;margin:20px;height:280px}.data-exhibition .data-type{margin:20px 0 0 20px}.data-exhibition .data-type .initial{color:#fff;background:#5bbfde}.data-exhibition .step-container .step-box{position:relative;margin-top:20px;margin-bottom:20px;margin-left:135px;display:inline-block;height:245px;width:185px;text-align:center;-webkit-box-shadow:0 0 5px #6ffaff;box-shadow:0 0 5px #6ffaff}.data-exhibition .step-container .step-box .step-title{margin-top:15px}.data-exhibition .step-container .step-box .cut-line{margin:10px auto;width:150px;height:1px;background:#ececec}.data-exhibition .step-container .step-box .server-box{margin:20px auto;height:100px;width:100px;border:10px solid #5bbfde;border-radius:50%}.data-exhibition .step-container .step-box .server-box img{margin:21px 0}.track-table{background:#fff;margin:0 20px}.track-table .date-name{color:#656565}.track-table .end-date,.track-table .start-date{margin:10px 20px;display:inline-block}.track-table .initial{color:#fff;background:#5bbfde}.track-table-content{margin:0 20px;background:#fff}.track-table-content .has-gutter{background:#eee}.track-table-content .pagination-message p{padding:20px;color:#838383;margin:auto 0}.track-table-content .pagination-number{padding:20px;text-align:right}.track-table-content .totalpageNumber{padding:20px;color:#adadad}.el-pager li.active{color:#fff;cursor:default;border-radius:50%;background:#5abfdf}.el-pager li{min-width:25px;height:25px;line-height:25px}.el-table thead tr th{color:#000;background-color:#eee}.el-table--border td,.el-table--border th,.el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed{border:1px solid #d2d2d2}.left{float:left}.right{float:right}",""])},INIZ:function(t,e,a){var i=a("Eo/U");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("8dba9bee",i,!1,{sourceMap:!1})},MFDe:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("EalQ"),n=a("xXFc"),s=!1;var l=function(t){s||a("INIZ")},r=a("VU/8")(i.a,n.a,!1,l,null,null);r.options.__file="pages/index/tracking.vue",e.default=r.exports},ntjw:function(t,e,a){t.exports=a.p+"img/server-icon.408ebaf.png"},xXFc:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("el-row",{staticClass:"nav-bar"},[i("el-col",{attrs:{span:24}},[i("div",{staticClass:"grid-content bg-purple-dark left"},[i("el-button",{staticClass:"report-btn nav-btn active"},[t._v("追踪报告")]),i("el-button",{staticClass:"trace-btn nav-btn"},[t._v("实时追踪")])],1),i("div",{staticClass:"grid-content bg-purple-dark right"},[i("el-button-group",{staticClass:"nav-btn-list"},[i("el-button",{attrs:{size:"medium day report active"}},[t._v("日报")]),i("el-button",{attrs:{size:"medium month report"}},[t._v("月报")])],1)],1)])],1),i("el-row",{staticClass:"navigation"},[i("el-col",{attrs:{span:24}},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("el-breadcrumb-item",[t._v("您当前位于:")]),i("el-breadcrumb-item",[t._v("数据追踪 ")]),i("el-breadcrumb-item",[t._v("追踪报告")]),i("el-breadcrumb-item",[t._v("日报")])],1)],1)],1),i("el-row",{staticClass:"business-box"},[i("el-col",{attrs:{span:24}},[i("ul",[t._l(t.businessList,function(e){return i("li",{key:e.name},[i("a",{attrs:{href:"javascript:void(0)"}},[t._v(t._s(e.name))])])}),i("li",[i("a",{staticClass:"dropdown",attrs:{href:"javascript:void(0)"},on:{click:t.opendropdowmenu}},[i("i",{staticClass:"el-icon-arrow-down"})])])],2)])],1),i("el-row",{staticClass:"data-exhibition"},[i("el-col",{attrs:{span:4}},[i("el-dropdown",{staticClass:"data-type"},[i("el-button",{staticClass:"initial"},[t._v("\n          当日发送"),i("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",[t._v("当日接收")])],1)],1)],1),i("el-col",{staticClass:"step-container",attrs:{span:16}},[i("div",{staticClass:"step-box"},[i("p",{staticClass:"step-title"},[t._v("滨江区前置")]),i("div",{staticClass:"cut-line"}),i("div",{staticClass:"server-box"},[i("img",{attrs:{src:a("ntjw"),alt:""}})]),i("p",[t._v("发送量: "),i("a",{attrs:{href:"javascript:void(0)"}},[t._v("180316")])])]),i("div",{staticClass:"step-box"},[i("p",{staticClass:"step-title"},[t._v("中心前置")]),i("div",{staticClass:"cut-line"}),i("div",{staticClass:"server-box"},[i("img",{attrs:{src:a("ntjw"),alt:""}})]),i("p",[t._v("接收量: "),i("a",{attrs:{href:"javascript:void(0)"}},[t._v("158422")])])]),i("div",{staticClass:"step-box"},[i("p",{staticClass:"step-title"},[t._v("业务获取")]),i("div",{staticClass:"cut-line"}),i("div",{staticClass:"server-box"},[i("img",{attrs:{src:a("ntjw"),alt:""}})]),i("p",[t._v("获取量: "),i("a",{attrs:{href:"javascript:void(0)"}},[t._v("87223")])])])]),i("el-col",{attrs:{span:4}})],1),i("el-row",{staticClass:"track-table"},[i("el-col",{attrs:{span:12}},[i("div",{staticClass:"start-date"},[i("span",{staticClass:"date-name"},[t._v("起始日期: ")]),i("el-date-picker",{attrs:{type:"date",placeholder:"请选择起始日期","picker-options":t.pickerOptions1},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}})],1),i("div",{staticClass:"end-date"},[i("span",{staticClass:"date-name"},[t._v("结束日期: ")]),i("el-date-picker",{attrs:{type:"date",placeholder:"请选择结束日期","picker-options":t.pickerOptions2},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1),i("el-button",{staticClass:"initial"},[t._v("导出表格")])],1),i("el-col",{attrs:{span:12}})],1),i("el-row",{staticClass:"track-table-content"},[i("el-col",{attrs:{span:24}},[i("el-table",{staticClass:"track-table-inner",staticStyle:{width:"100%"},attrs:{border:""}},[i("el-table-column",{attrs:{prop:"date",label:"发送日期",width:"180",align:"center"}}),i("el-table-column",{attrs:{prop:"name",label:"业务",width:"180",align:"center"}}),i("el-table-column",{attrs:{prop:"address",label:"发送量",align:"center"}}),i("el-table-column",{attrs:{prop:"address",label:"交换量",align:"center"}}),i("el-table-column",{attrs:{prop:"address",label:"接收量",align:"center"}}),i("el-table-column",{attrs:{prop:"address",label:"待交换量",align:"center"}}),i("el-table-column",{attrs:{prop:"address",label:"待接收量",align:"center"}}),i("el-table-column",{attrs:{prop:"address",label:"交换状态",align:"center"}}),i("el-table-column",{attrs:{prop:"address",label:"接收状态",align:"center"}}),i("el-table-column",{attrs:{prop:"address",label:"详情",align:"center"}})],1),i("el-row",[i("el-col",{staticClass:"pagination-message",attrs:{span:12}},[i("p",[t._v("总计12条记录")])]),i("el-col",{staticClass:"pagination-number",attrs:{span:10}},[i("el-pagination",{attrs:{layout:"prev, pager, next",total:50}})],1),i("el-col",{staticClass:"totalpageNumber",attrs:{span:2}},[i("span",[t._v("共2页")])])],1)],1)],1)],1)};i._withStripped=!0;var n={render:i,staticRenderFns:[]};e.a=n}});