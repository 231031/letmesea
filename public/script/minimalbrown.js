
const imageArray = [
	"image/1.png",
	"image/2.png",
	"image/3.png",
	"image/4.png",
	"image/5.png",
	"image/6.png",
	"image/7.png",
	"image/8.png",
	"image/9.png",
	"image/10.png",
	"image/11.png",
	"image/12.png",
	"image/13.png",
	"image/14.png",
	"image/15.png",
	"image/16.png",
	"image/17.png",
	"image/18.png",
	"image/19.png",
	"image/20.png"
];


const image = document.querySelector(".content_heal img");
const button = document.querySelector(".content_heal button");


window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}

function remove_img(){
    document.getElementById('cover').remove();
    document.getElementById('btn_remove').style.display = "none";
}

function showSpotify() {
	let x = document.getElementById("spotify_box");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
}

function showChat() {
	let x = document.getElementById("contain-chat");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
}

function change_bg(clicked_id)
{
    if (clicked_id == 1) {
        document.getElementById("bg_img").src="image/minimalbrownb.png";
      } else if (clicked_id == 2) {
        document.getElementById("bg_img").src="image/minimalbrowng.png";
      } 
}
/*
const image_input = document.querySelector("#file");
var upload_image = "";

image_input.addEventListener("change", function() {
	const reader = new FileReader();
	reader.addEventListener("load", () => {
		upload_image = reader.result;
		document.querySelector("#bg_img").src = 'url(${upload_image})';
	})
	reader.readAsDataURL(this.files[0]);
})
*/
document.getElementById('file').onchange = function (evt) {
    let tgt = evt.target || window.event.srcElement,
        files = tgt.files;
    
    // FileReader support
    if (FileReader && files && files.length) {
        let fr = new FileReader();
        fr.onload = function () {
            document.getElementById('bg_img').src = fr.result;
        }
        fr.readAsDataURL(files[0]);
    }
}



