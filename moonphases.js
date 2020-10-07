
let photos = 
["resources/images/full-moon.png",
"resources/images/third-quarter.png",
 ];

let phasechange  = Math.round(Math.random());
console.log(flip);

let image;

if  (phasechange == 0){
    image = 'images/full-moon.png';
} else {
  image = 'images/third-quarter';
}

let moon = document.querySelector ('#moon');

moon.src = image; 