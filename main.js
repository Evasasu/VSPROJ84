canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;
alphimg="Alpkey.png"
numb="numkey.png"
oth="otherkey.png"
arr="Arrkey.png"
special="spkey.png"

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
aplhabetkey();	
else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}

function aplhabetkey()
{
	ctx.drawImage(alphimg ,img_imgTag ,img_x ,img_y ,img_width ,img_height  )

}
function numberkey()
{
	ctx.drawImage(numb ,img_imgTag ,img_x ,img_y ,img_width ,img_height  )
}
function arrowkey()
{
	ctx.drawImage(arr ,img_imgTag ,img_x ,img_y ,img_width ,img_height  )
}
function specialkey()
{
	ctx.drawImage(special ,img_imgTag ,img_x ,img_y ,img_width ,img_height  )
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
