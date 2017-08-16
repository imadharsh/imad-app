console.log('Loaded!');

// Change the text of the main text.div
var element = document.getElementById("main text");

element.innerhtml = 'New value';

// Move the image
var img = document.getElementById('madi');
var marginleft = 0;
function moveRight (){
    marginLeft = marginLeft = 5;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight, 100);
  };