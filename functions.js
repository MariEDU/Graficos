function equacao() {
	let a = parseFloat(document.getElementById("A").value);
	let b = parseFloat(document.getElementById("B").value);
	let c = parseFloat(document.getElementById("C").value);
	var x = document.getElementById('resultado1');
	var y = document.getElementById('resultado2');
    var delta = (b * b) - (4 * a * c);
    if (delta >= 0 ){
        var raiz = Math.sqrt(delta);
        var x1 = (-b + raiz) / (2 * a);
	    	var x2 = ((-b) - raiz) / (2 * a);				
				var xv = (x1 + x2)/2;
				var yv = ((a * (xv**2)) + (b * xv) + c);
				grafico();
				Vertice(xv,yv);
				Ponto(x1,x2);
		}else if (delta < 0){
        x1 = " Sem raiz";
        x2 = " Sem raiz";
    }
		x.textContent = x1;
		y.textContent = x2;

}

function f(){
		var a = parseInt(document.getElementById("A").value);
   	var b = parseInt(document.getElementById("B").value);
		var c = parseInt(document.getElementById("C").value);
    var eq = (a*(x**2) + b*x + c);
    return yt(eq);
}

var x0 = -10;
var xf = 10;
var x = x0;
var dx = 0.1;

function f_(x){
    return yt(50*Math.cos(x));
}
function yt(y){
    return -25*y/2;
}
function xt(x){
    return 25*x;
}

function grafico(){
    var canvas, ctx, w, h;
    w = 500;
    h = 500;
    canvas = document.getElementById("canv");
    ctx = canvas.getContext("2d");

    ctx.translate(250,250);
    ctx.beginPath();
    ctx.moveTo(xt(-10),yt(0));
    ctx.lineTo(xt(10),yt(0));
    ctx.moveTo(xt(0),yt(-100));
    ctx.lineTo(xt(0),yt(100));
    ctx.stroke();
    ctx.save();
    ctx.beginPath();

    ctx.moveTo(xt(x),f(x0));
    x+= dx;
    while(x<xf)
    {
        ctx.lineTo(xt(x),f(x))
        x+= dx;
    }
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
}

function Ponto(x1,x2){
		var canvas, ctx;
		canvas = document.getElementById("canv");
		ctx = canvas.getContext("2d");
		ctx.beginPath();
    ctx.fillStyle = 'rgb(0, 0, 255)';
    ctx.arc(xt(x2), 0 , 4, 0, 2 * Math.PI)
    ctx.arc(xt(x1), 0, 4, 0, 2 * Math.PI)
    ctx.fill()
    ctx.closePath()
}

function Vertice(xv,yv){
		var canvas, ctx;
		canvas = document.getElementById("canv");
		ctx = canvas.getContext("2d");
    ctx.beginPath()
    ctx.fillStyle = 'rgb(255, 0, 0)';
		ctx.arc(xt(xv), yt(yv) , 4, 0, 2 * Math.PI)
    ctx.fill()
    ctx.closePath()
}

function  limpar () {
     window.location.reload()
}
