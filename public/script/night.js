const imageArray = [
	"image/26.png",
	"image/27.png",
	"image/28.png",
	"image/29.png",
	"image/30.png",
	"image/31.png",
	"image/32.png",
	"image/33.png",
	"image/34.png",
	"image/35.png",
	"image/36.png",
	"image/37.png",
	"image/38.png",
	"image/39.png",
	"image/40.png",
	"image/41.png",
	"image/42.png",
	"image/43.png",
	"image/44.png",
	"image/45.png"
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
        document.getElementById("bg_img").src="image/night.jpg";
      } else if (clicked_id == 2) {
        document.getElementById("bg_img").src="https://images.hdqwalls.com/wallpapers/sea-shore-waves-at-night-time-4k-yr.jpg";
      } else if (clicked_id == 3) {
        document.getElementById("bg_img").src="https://wallpapershome.com/images/pages/pic_h/5737.jpg";
      }
      else if (clicked_id == 4) {
        document.getElementById("bg_img").src="https://i.pinimg.com/originals/fc/db/57/fcdb5798498468f61812490e400a6aab.gif";
      } else {
		document.getElementById("bg_img").src="https://images.hdqwalls.com/wallpapers/overcast-sea-beach-waves-at-night-wide.jpg";
	  }
    //document.getElementById("bg_img").src="image/afternoon.jpg";
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