
require(["js/config"],function(){
	require(["jquery"],function($){
		$(function(){
			
			$("#droplist").on("change","select",function(evt){
				var $this = $(this);
				switch($this.index()) {
					case 0 : {
						if( $("option[value="+$this.value+"]").attr("municipality") ) {//直辖市
							
						} else {//省份
							$.ajax({
								type:"get",
								url:"json/city.json",
								success:function(data){
									var arr = data.regions.filter(function(item,index){
										return item.id == $this.val();
									})[0].regions;
									
									console.log(arr);
									var list2 = $("#droplist select:eq(1)").html("");
									//把arr的数据填充到第二个select
									arr.forEach(function(item,index){
										list2.append($("<option>").html(item.name).val(item.id));
									})
								}
							});
						}
						break;
					}
					case 1 : {
						
					}
					case 2 : {
						
					}
				}
			})
			
			
			$.ajax({
				type:"get",
				url:"json/city.json",
				success:function(data){
					data.regions.map(function(item,index,array){
						var op = document.createElement("option");
						op.innerText = item.name;
						op.value = item.id;
						op.municipality = item.municipality?true:false;
						$("#droplist").children(":eq(0)").append(op);
					});
				}
			});
		});
	})
});
