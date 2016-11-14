var text=document.getElementsByTagName("input")[1];
		var canvas=document.getElementsByTagName("canvas")[0];
		var context=canvas.getContext("2d");
		var low_arr=new Array();
		var upper_arr=new Array();
		var num_arr=new Array();
		low_arr=['a','b','c','d','e','f','g','h','y','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		var color;
		var str="";
		
		function change_color(a){
			var color1=parseInt(Math.random()*255);
			var color2=parseInt(Math.random()*255);
			var color3=parseInt(Math.random()*255);

			return "rgba("+color1+","+color2+","+color3+","+a+")";
		}

		for(var i=0;i<low_arr.length;i++){
			upper_arr[i]=low_arr[i].toUpperCase();

		}

		for(var i=0;i<=9;i++){
			num_arr[i]=i;
		}

		var all_arr=Array.concat(num_arr,low_arr,upper_arr);


		function change_text(){
			var i=parseInt(Math.random()*62);
			return all_arr[i];
		}

		var font=new Array();
		font=[15,20,25];
		function change_size(){
			var i=parseInt(Math.random()*3)
			return font[i];
		}

		//console.log(change_text());

		change();
		function change(){
			context.clearRect(0,0,100,30);
			str="";

			context.fillStyle=change_color(0.2);
			context.fillRect(0,0,100,30);

			
			for(var i=1;i<=4;i++){
				var f=change_text();
				context.fillStyle=change_color(1);
				context.font=change_size()+"px 微软雅黑";
				context.fillText(f,15*i,change_size());
				str+=f;
			}
		}


		function login(){
			str=str.toUpperCase();
			text.value=text.value.toUpperCase();
			console.log(str);
			console.log(text.value);
			if(str==text.value){
				alert("输入正确");
			}else{
				alert("no");
			}
			change();
		}