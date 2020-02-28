var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');


/* Looping through images */
  //var pic = ["pic1", "pic2", "pic3", "pic4", "pic5"]
  //var img = " "

for (var i = 1; i <= 5; i++){
    //img = img + i;
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + i + '.jpg');
  thumbBar.appendChild(newImage);
}
