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
        document.getElementById("bg_img").src="https://w0.peakpx.com/wallpaper/321/117/HD-wallpaper-afternoon-sea-colorful-glow-ocean-pier-colors-beautiful-sky-clouds-lake-mirrored-sea-afternoon-water-nature-morning-reflection.jpg";
      } else if (clicked_id == 2) {
        document.getElementById("bg_img").src="https://images.pexels.com/photos/269583/pexels-photo-269583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
      } else if (clicked_id == 3) {
        document.getElementById("bg_img").src="https://img3.wallspic.com/previews/8/8/2/4/4/144288/144288-calme-ciel-mer-lever-x750.jpg";
      }
      else if (clicked_id == 4) {
        document.getElementById("bg_img").src="https://wallpapercave.com/wp/wp4279623.jpg";
      } else {
		document.getElementById("bg_img").src="https://i.pinimg.com/originals/be/1a/33/be1a338704efc57093b6dec8e196439b.gif";
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