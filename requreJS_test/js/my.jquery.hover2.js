define(["jquery"],function(){
	(function($,undefined){
		$.fn.extend({
			hoverdir : function(){
				this.on("mouseenter mouseleave",function(e){
					var _left = {
						val : e.offsetX/$(this).width(),
						dir : "left"
					}
					var _right = {
						val : 1-_left.val,
						dir : "right"
					}
					var _top = {
						val : e.offsetY/$(this).height(),
						dir : "top"
					}
					var _bottom = {
						val : 1-_top.val,
						dir : "bottom"
					}
					move(e.type,getDir(_left,_right,_top,_bottom),$(this).find("div"));
				})
				function move(type,dir,ele){
					switch(dir){
						case "left" : type=="mouseenter" ? ele.css({left:"-100%",top:0}).animate({left:0},500) : ele.animate({left:"-100%"},500);break;
						case "right" : type=="mouseenter" ? ele.css({left:"100%",top:0}).animate({left:0},500) : ele.animate({left:"100%"},500);break;
						case "top" : type=="mouseenter" ? ele.css({left:0,top:"-100%"}).animate({top:0},500) : ele.animate({top:"-100%"},500);break;
						case "bottom" : type=="mouseenter" ? ele.css({left:0,top:"100%"}).animate({top:0},500) : ele.animate({top:"100%"},500);break;
					}
				}
				function getDir(){
					var min = arguments[0].val;
					var index = 0;
					for(var i=0;i<arguments.length;i++){
						if(arguments[i].val<min){
							min = arguments[i].val;
							index = i;
						}
					}
					return arguments[index].dir;
				}
			}
		})	
	})(jQuery);
})


