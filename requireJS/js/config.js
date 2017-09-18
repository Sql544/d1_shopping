/*
 * 配置文件
 */

requirejs.config({
	baseUrl: "js",
	paths: {
		"banner" : "widget/banner",
		"floorNav" : "widget/floorNav",
		"search" : "widget/search",
		"jquery" : "jquery/jquery-1.11.3",
		"jquery.hover" : "jquery/my.hoverdir",
		"jquery.ui" : "jquery/jquery-ui",
		"swiper" : "script/swiper",
		"hello" : "func/hello"
	},
	shim: {
		"hello" : {
			exports: "print,print2"
		}
	}
});


