//
require(["js/config"], function(m){
	//写出页面需要的所有模块，不用考虑顺序问题
	require(["jquery","search","banner","jquery.hover","hello"], function($,search,ba){
		$(function(){
			console.log("页面DOM树已加载完成");
			//banner模块的初始化
			ba.init();
			
			
			//hover插件
			$(".box").hoverdir();
			
			//输入框的初始化
			search.init({
				//select表示选择事件
				callback: function(data){
					console.log("%c"+data,"color:red");
				}
			});
		});
	});
});
