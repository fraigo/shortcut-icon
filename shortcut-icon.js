
function setIcon(url) {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = url;
    document.getElementsByTagName('head')[0].appendChild(link);
}


function setIconCounter(url,number,callback){
	var img=document.createElement("IMG");
	img.onload=function(){
		var canvas=document.createElement("canvas");
		canvas.setAttribute("width",16);	
		canvas.setAttribute("height",16);
		var ctx=canvas.getContext("2d");
		ctx.drawImage(img,0,0, 16, 16);
		ctx.beginPath();
		ctx.fillStyle = "rgba(255,255,255,0.7)";
		ctx.arc(12, 12, 6, 0, 2 * Math.PI);
		ctx.fill();
		ctx.fillStyle = "#000";
		ctx.textAlign = "center";
		ctx.font = "8px sans-serif";
		ctx.fillText(""+number, 11, 14);
		setIcon(canvas.toDataURL());
		if (callback){
			callback(canvas);
		}
	}
	img.src=url;
}



