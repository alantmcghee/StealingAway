/* this dictates the images that will show on each successive day */


/* this looks for the id classed item in the code and hands its an image based on the day that's been fetched prior. Regardless of the name of the actual image it will cycle from the first to the end and repeat because d.getDay() assigns a number from 0 to 6 */

/* could do "DOTsrc" or "DOTid" to dynamically change that

//let img = document.getElementById("runawayimage");
let currentday= d.getDay();





element=document.getElementById ('runawayimage')
if  (element.src.match("out"))
{
    element.src="resources/images/Sundayad.jpg";
} else if  {
    element.src="resources/images/Mondayad.jpg";
} else if  {
    element.src="resources/images/Tuesdayad.jpg";
} else if {
    element.src="resources/images/Wednesdayad.jpg";
} else if {
    element.src="resources/images/Thursdayad.jpg";
} else if {
    element.src="resources/images/Fridayad.jpg";
}
    else {
    element.src="resources/images/Saturdayad.jpg";
}
}
*/
var i;
var NodeList = document.querySelectorAll("article");
for (i = 0; i < NodeList.length; i++){ 
   NodeList[i].style.border ="3px dotted purple"
}

y = NodeList[2];
console.log(NodeList)

let Runawaysource = document.getElementById('runawayimage');
let  nextbutton = document.getElementById('nextbutton');
let previousbutton = document.getElementById('previousbutton');
console.log(nextbutton,previousbutton)


let photos = [
 "resources/images/Sundayad.jpg",
 "resources/images/Mondayad.jpg",
"resources/images/Tuesdayad.jpg",
"resources/images/Wednesdayad.jpg",
"resources/images/Thursdayad.jpg",
"resources/images/Fridayad.jpg",
"resources/images/Saturdayad.jpg" ];

let currentPhotoIndex = 0



function changeImage() {
    Runawaysource.src = 'resources/images/Mondayad.jpg';
}

function nextImage() {
if(currentPhotoIndex === 6) (currentPhotoIndex = 0)
else (currentPhotoIndex++)
Runawaysource.src = photos[currentPhotoIndex]}

function previousImage() {
if(currentPhotoIndex === 0) (currentPhotoIndex = 6 )
else (currentPhotoIndex--)
Runawaysource.src = photos[currentPhotoIndex]}


/* these are my event listeners*/

nextbutton.addEventListener('click',nextImage)
previousbutton.addEventListener('click',previousImage)
Runawaysource.addEventListener('click',changeImage)
