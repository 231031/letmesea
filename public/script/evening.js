const imageArray = [
	"image/1.png",
	"image/2.png",
	"image/3.png",
	"image/4.png",
	"image/5.png",
	"image/6.png",
	"image/7.png",
	"image/8.png",
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
        document.getElementById("bg_img").src="https://c0.wallpaperflare.com/preview/312/791/674/greece-sunset-west-topio.jpg";
      } else if (clicked_id == 2) {
        document.getElementById("bg_img").src="https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
      } else if (clicked_id == 3) {
        document.getElementById("bg_img").src="https://images.hdqwalls.com/wallpapers/aberdeen-coast-sunrise-scotland-5k-uz.jpg";
      }
      else if (clicked_id == 4) {
        document.getElementById("bg_img").src="https://wallpapercave.com/wp/wp4279673.jpg";
      } else {
		document.getElementById("bg_img").src="https://gifimage.net/wp-content/uploads/2018/11/sunset-gif-images-3.gif";
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