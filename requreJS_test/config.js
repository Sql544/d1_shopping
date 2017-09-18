require.config({
	paths : {
	"modela" : "js/modelA",
	"modelb" : "js/modelB",
	"modelc" : "js/modelC",
	"jquery" : "js/jquery-1.11.3",
	"myhover" : "js/my.jquery.hover2"
	}
})


require(["modelb","modelc","myhover"],function(b,c){
	console.log($(".box").hoverdir);
})
