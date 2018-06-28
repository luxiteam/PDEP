var chart_data = [
	{name:'省发改委',value:1600},
	{name:'杭州市',value:200},
	{name:'省公安局',value:1000},
	{name:'湖州市',value:500},
	{name:'宁波市',value:800},
	{name:'台州市',value:1200},
	{name:'省经信委',value:700},
	{name:'省司法局',value:1500},
	{name:'温州市',value:300},
	{name:'衢州市',value:1000},
	{name:'绍兴市',value:2000},
	{name:'嘉兴市',value:300},
	{name:'省安全局',value:600},
	{name:'下城区',value:900},
	{name:'滨江区',value:300},
	{name:'余杭区',value:800},
];
var business_data = [
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
];
//浙江省
var zj_all = [
	// 杭州市
	["上城区","下城区","江干区","拱墅区","西湖区","滨江区","余杭区","萧山区","富阳区","临安区","建德市","桐庐县","淳安县"],
	// 宁波市
	["海曙区","江北区","北仑区","镇海区","鄞州区","奉化区","余姚市","慈溪市","象山县","宁海县"],
	// 温州市
	["鹿城区","龙湾区","瓯海区","洞头区","瑞安市","乐清市","永嘉县","平阳县","苍南县","文成县","泰顺县"],
	// 绍兴市
	["越城区","柯桥区","上虞区","诸暨市","嵊州市","新昌县"],
	// 湖州市
	["吴兴区","南浔区","德清县","长兴县","安吉县"],
	// 嘉兴市
	["南湖区","秀洲区","海宁市","平湖市","桐乡市","嘉善县","海盐县"],
	// 金华市
	["婺城区","金东区","兰溪市","东阳市","永康市","义乌市","武义县","浦江县","磐安县"],
	// 衢州市
	["柯城区","衢江区","江山市","常山县","开化县","龙游县"],
	// 台州市
	["椒江区","黄岩区","路桥区","临海市","温岭市","玉环市","三门县","天台县","仙居县"],
	// 丽水市
	["莲都区","龙泉市","青田县","缙云县","遂昌县","松阳县","云和县","庆元县","景宁畲族自治县"],
	// 舟山市
	["定海区","普陀区","岱山县","嵊泗县"],
];

//初始tab
function first_view(){
	var chart_width = $("#user_num_month").width();
	var chart_height = $("#user_num_month").height();
	if(chart_width > chart_height){
		$("#user_num_month").width(chart_height);
		$(".center-data").css("left",(chart_height - 90)/2 + "px");
		$(".center-data").css("top",(chart_height - 90)/2 + "px");
	}
	else {
		$("#user_num_month").height(chart_width);
		$(".center-data").css("left",(chart_width - 90)/2 + "px");
		$(".center-data").css("top",(chart_width - 90)/2 + "px");
	}
	user_num_month();
	list_sort("list-sort",'#bbb','#8cd2e8',['5月3日','5月10日','5月1日','5月9日','5月2日','5月4日','5月5日','5月6日','5月12日','5月8日'],[230, 299, 321, 430, 520, 760, 968, 1029, 1167, 1399]);
}

//散点分布js
function circle(){
	//散点分布
	var largeC = 160,
	centerC =100,
	smallC = 70,
	left = $("#nodeShow").width() - 80,
	bottom = $("#nodeShow").height() - 50,
	x = 80,
	y = 10;
	var li_val = new Array(),
		max_val = parseInt($("#nodeShow li").eq(1).find("h6").html()),
		min_val = max_val;
	for(var i=0; i<$("#nodeShow li").length; i++){
		li_val[i] = parseInt($("#nodeShow li").eq(i).find("h6").html());
		if(parseInt($("#nodeShow li").eq(i).find("h6").html()) > max_val){max_val = parseInt($("#nodeShow li").eq(i).find("h6").html())}
		if(parseInt($("#nodeShow li").eq(i).find("h6").html()) < min_val){min_val = parseInt($("#nodeShow li").eq(i).find("h6").html())}
	}
	var mid1_val = (max_val + min_val)/3*2,
		mid2_val = (max_val + min_val)/3;
	$("#nodeShow li").each(function(index, li){
		if(parseInt($(li).find("h6").html()) > mid1_val){
			$(li).addClass("bigCirle");
			x = randomC(0, left - largeC);
			y = randomC(0, bottom - largeC);
		}
		else if((mid1_val > parseInt($(li).find("h6").html())) && (parseInt($(li).find("h6").html()) >= mid2_val)){
			$(li).addClass("midCirle");
			x = randomC(0, left - centerC);
			y = randomC(0, bottom - centerC);
		}
		else{
			$(li).addClass("smallCirle");
			x = randomC(0, left - smallC);
			y = randomC(0, bottom - smallC);
		}
		$(li).css({
		  "left" : x,
		  "top" : y
		});
	})
	function randomC(minV,maxV){
		return Math.floor(minV+Math.random()*(maxV-minV));
	}
}
$(document).ready(function(e) {
	$(".tab-title").delegate("li","click",function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		$("." + $(this).data("target")).show().siblings().hide();
		if($(this).data("target") == "data-change"){
			first_view();
		}
		else if($(this).data("target") == "depart-change"){
			pie_chart("depart-pie", " ", chart_data);
			list_sort("depart-sort",'#bbb','#757e81',['下城区','省民政局','省教育局','湖州市','杭州市','嘉兴市','台州市','省林业局','温州市','西湖区'],[230, 299, 321, 430, 520, 760, 968, 1029, 1167, 1399]);
		}
		else if($(this).data("target") == "business-change"){
			pie_chart("business-pie", " ", business_data);
			list_sort("business-sort",'#bbb','#5086aa',['处罚下发','行政审批','中介超市','办件返回','办件上报','统一申报','处罚公开','裁量信息','多证合一','电子证照'],[230, 299, 321, 430, 520, 760, 968, 1029, 1167, 1399]);
		}
		else if($(this).data("target") == "key-point"){
			circle();
			list_sort("key-sort",'#bbb','#b790ee',['下城区','省民政局','省教育局','湖州市','杭州市','嘉兴市','台州市','省林业局','温州市','西湖区'],[230, 299, 321, 430, 520, 760, 968, 1029, 1167, 1399]);
		}
		else if($(this).data("target") == "change-record"){
			new line({
				xAxisData:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
				seriesData:[
					[309, 1242, 1829, 1548, 942],
					[1109, 1442, 1039, 948, 1442],
				],
				lenName:['发送','接收']
			}).createMap6();
		}
	})
	function line(data){
		this.data = data,
		this.option = {
			tooltip : {
				trigger: 'axis'
			},
			grid: {x:60, y: 35, y2:50, x2:50},
			calculable : true,
			legend: {
				data:[],
				x:'center',
				y:'top',
			},
			xAxis : {
				type : 'category',
				data : [],
				splitLine : {
					lineStyle : {color : '#eee'}
				},
			},
			yAxis : [
				{
					type : 'value',
					splitLine : {
						lineStyle : {
							color: '#f1f1f1',
							width: 1,
							lineStyle:'dashed',
						}
					},
					axisLabel:{
						fontSize: 10,	
					},
				}
			],
			series : [
				{
					name:'',
					type:'line',
					yAxisIndex: 0,
					data:[],
				},
				{
					name:'',
					type:'line',
					yAxisIndex: 0,
					data:[],
				},
			],
			color: ['#d9544f','#5bbfde','#89a54e','#ff9966','#c81ff2']
		}
	}
	
	line.prototype = {
		constructor:line,
		createMap6:function(){
			var option = this.option;
			option.legend.data = this.data.lenName;
			option.xAxis.data = this.data.xAxisData;
			for(var i = 0;i < this.data.seriesData.length;i++){
				option.series[i].data = this.data.seriesData[i];
				option.series[i].name = this.data.lenName[i];
			}
			var myChart = echarts.init(document.getElementById('record-chart')); 
			myChart.setOption(this.option); 
		}
	}
	
	$(".range-all").delegate("span","click",function(){
		$(this).parent().find("ul").slideToggle();
	})
	$(".range-all").delegate("li","click",function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		$(this).parent().parent().find("span").html($(this).html());
		$(this).parent().slideToggle();
	})
	$(".month-select").delegate("li","click",function(){
		$(this).addClass("cur").siblings().removeClass("cur");
	})
	$(".month-select").delegate(".left-arrow","click",function(){
		$(this).parent().parent().find("span").html(parseInt($(this).parent().parent().find("span").html()) - 1 + "年");
		$(this).parent().find(".right-arrow").removeClass("disabled");
	})
	$(".month-select").delegate(".right-arrow","click",function(){
		if(parseInt($(this).parent().parent().find("span").html()) >= 2018) {
			return;
		}
		else if(parseInt($(this).parent().parent().find("span").html()) >= 2017) {
			$(this).parent().parent().find("span").html(parseInt($(this).parent().parent().find("span").html()) + 1 + "年");
			$(this).addClass("disabled");
		}
		else {
			$(this).parent().parent().find("span").html(parseInt($(this).parent().parent().find("span").html()) + 1 + "年");
		}
	})
	$(".date-all").delegate("span","click",function(){
		$(this).parent().find(".year-select").slideToggle();
	})
	$(".year-select").delegate("li","click",function(){
		if(parseInt($(this).html()) >= 2018){
			$(this).parent().parent().parent().find(".right-arrow").addClass("disabled");
		}
		else {
			$(this).parent().parent().parent().find(".right-arrow").removeClass("disabled");
		}
		$(this).parent().parent().parent().find("span").html($(this).html());
		$(this).parent().parent().slideToggle();
	})
	
	$(".location-select").delegate("i","click",function(){
		if($(this).hasClass("to-hide")) {
			$(this).removeClass("to-hide").parent().find("dl").animate({height:"46px"});
		}
		else{
			var line_count = Math.floor($(this).parent().find("dl").width()/$(this).parent().find("dt").width()),
				dt_count = $(this).parent().find("dt").length;
			$(this).addClass("to-hide").parent().find("dl").animate({height:Math.ceil(dt_count/line_count) * 46 + "px"});
		}
	})
	$(".location-all").delegate("span","click",function(){
		$(".location-select").slideToggle();
		var see_more = $(".location-all li i");
		see_more.each(function(index, element) {
		   //alert($(element).parent().find("dt").length);
		   //alert($(element).parent().find("dl").width()/$(element).parent().find("dt").width());
			var line_count = Math.floor($(element).parent().find("dl").width()/$(element).parent().find("dt").width()),
				dt_count = $(element).parent().find("dt").length;
			if($(element).parent().hasClass("district")){
				$(this).hide();
				$(this).parent().find("dl").animate({height:Math.ceil(dt_count/line_count) * 32 + "px"});
			}
			else{
				if(Math.ceil(dt_count/line_count) > 1){
					$(element).show(); 
				}
			}
		});
	})
	$(".cities").delegate("dt","mouseover",function(){
		$(this).addClass("hover").siblings().removeClass("hover");
		var district_str = "<dt>全部</dt>";
		if($(this).index() == 0){return}
		for(var i = 0; i < zj_all[$(this).index() - 1].length; i++){
			district_str += "<dt>" + zj_all[$(this).index() - 1][i] + "</dt>";
		}
		$(this).parent().parent().next().find("dl").html(district_str);
	})
	$(".location-all").delegate("dt","click",function(){
		$(".location-all dt").removeClass("cur");
		$(this).addClass("cur");
		if($(this).html() == '全部') {
			$(".location-all span").html($(this).parent().parent().find("label").html() + $(this).html());
		}
		else {
			$(".location-all span").html($(this).html());
		}
		$(".location-select").slideUp();
	})
});

function pie_chart(div_id, chart_name, chart_data){
	var rose_pie = echarts.init(document.getElementById(div_id)); 
	var option = {
		tooltip : {
			trigger: 'item',
			formatter: function(params) {
			  var tips = params.name + " : <br>" + params.value + " ( " + params.percent + "% ) ";
			  return tips;
			},
		},
		series : [
			{
				name:chart_name,
				type:'pie',
				radius : ['45%', '60%'],
				center : ['50%', '50%'],
				itemStyle : {
					normal : {
						borderWidth: 0.6,
						borderColor: '#fff',
						label : {
							show : true,
							position:'outer',
							formatter: function(params) {
								var tips = params.name + ' : ' + parseFloat(params.percent).toFixed(1) + " %";
								return tips;
							},
							textStyle:{fontSize:12},
						},
						labelLine : {
							show : true,
							length: 5,
						}
					}
				},
				data:chart_data,
			}
		],
		color:['#fbbb3f','#f1b488','#8ae6b6','#3fca79','#047036','#298151','#0eac57','#6babce','#489ecd','#2a5975','#166c9b','#fac17c','#f0ad42','#9d5908','#b67d38','#f38f15','#f9754f','#9e2906','#b75538','#f34715','#eb8060','#46aaca','#78bbd1','#fbbb3f'],
	};
	rose_pie.setOption(option);
};

function user_num_month(){
	var myChart5 = get_myChart("user_num_month");
	//高亮日期
	var cur_month = "1";
	var cur_val = 0;
	option = {
		backgroundColor:'#5bbfde',
		tooltip:{
			show:true,
			formatter: function (param){
				$(".center-data span").html(param['value']);
			}
		},
		angleAxis: {
			type: 'category',
			data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
			axisLine: {
				show: true,
				lineStyle: {
					color: '#dcf2f8',
				}
			},
			axisLabel: {
				color: '#fff',
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#dcf2f8',
				}
			},
		},
		radiusAxis: {
			show: false,
		},
		polar: {
		},
		series: [{
			type: 'bar',
			itemStyle:{
				normal:{
					color: function (param){
						if(param['name'] == cur_month){
							cur_val = param['value'];
						};
						$(".center-data span").html(cur_val);
						return (param['name'] == cur_month)?'#9861e7':'#def2f8';
					}
				},
				emphasis:{
					color:'#9861e7',
				}
			},
			data: [8020, 7102, 9310, 4194, 6013, 5025, 3911, 3819, 7310, 9001,10282,9021],
			coordinateSystem: 'polar',
		}],
	};
	myChart5.setOption(option); 
};

function list_sort(div_id, color1, color2,left_data,data_val){
	var myChart1 = get_myChart(div_id);
	option = {
		tooltip : {
			trigger: 'axis'
		},
		grid: {x:80,x2:20,y:20,y2:20,},
		calculable : true,
		xAxis : [
			{
				type : 'value',
				axisLabel: {
					textStyle:{
						fontSize: 11,
						color:'#666',
					}
				},
			}
		],
		yAxis : [
			{
				type : 'category',
				splitLine:{
					lineStyle:{
						type:'dotted',
						width: 1,
						color:'#ccc',
					}
				},
				axisLabel: {
					textStyle:{
						fontSize: 11,
						color:'#666'
					}
				},
				data : left_data,
			}
		],
		series : [
			{
				name:'交换量',
				type:'bar',
				itemStyle:{
					normal:{
						//color: '#8cd2e8',
						color:function(params) {
							if(params.dataIndex%2 ==0){
								return color1;
							}
							else{
								return color2;
							}
							console.log(params.dataIndex%2 ==0);
						},
						label : {show: true, position:'right',textStyle:{fontSize: 12,}}
					},
				},
				barWidth:'8',
				data:data_val,
			}
		]
	};
	myChart1.setOption(option); 
};

function get_myChart(ele_ID){
	return echarts.getInstanceByDom(document.getElementById(ele_ID)) === undefined ? echarts.init(document.getElementById(ele_ID)) : echarts.getInstanceByDom(document.getElementById(ele_ID));
}