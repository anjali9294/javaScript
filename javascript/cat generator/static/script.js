//challange 1: your age in days
function generateCat(){

var image = document.createElement('img');
var div = document.getElementById('flex-cat-gen');
image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
image.height="150";
image.width="200";
div.appendChild(image);
}
