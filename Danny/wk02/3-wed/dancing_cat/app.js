var movePixels = 5;
var movePixelsUp = 10;
var startBtn = document.querySelectorAll("button")[0]
console.log(startBtn);
var timeId = 0;
var timeIdHeight = 0;
var timeIdFootprint = 0;
var catImg = document.querySelector(".catImg")
var fasterBtn = document.querySelectorAll("button")[1]
var stopBtn = document.querySelectorAll("button")[2]
var dancing = false;
var currentSpeed = 200;
var maxSpeed = 10;
var movingRight = true
var currentHeight = 30;
var movingDown = true;
var imgContainer = document.querySelector(".imgContainer")
var image = document.querySelector(".imgContainer img")
var currentleft = 0

var catWalk = function() {
  currentleft = parseInt(catImg.style.left);

  catImg.style.left = (currentleft + movePixels) + "px";

  // catImg.style.transform = "rotate(" + Math.degrees(Math.atan(1)) + "deg)"

  if (currentleft > (window.innerWidth - catImg.width)) {
    movePixels = -5;
    movingRight = false;
    catImg.src = dancing ? "running-cat-orange.gif" : "running-cat-black.gif"
    dancing = !dancing
    // catImg.style.transform = "scaleX(-1) " + "rotate(" + (-Math.degrees(Math.atan(1))) + "deg)"
  } else if (currentleft < 0) {
    movePixels = 5;
    movingRight = true;
    catImg.src = dancing ? "running-cat-orange.gif" : "running-cat-black.gif"
    dancing = !dancing
    // catImg.style.transform = "scaleX(1)"
  }

  // if (currentleft >= (window.innerWidth * 0.5 + catImg.width)) {
  //   if (dancing === true) {
  //     catImg.src = "https://vignette3.wikia.nocookie.net/animal-jam-clans-1/images/5/50/Running_cat_animation_by_urnam7-d4hvy1x.gif/revision/latest/scale-to-width-down/640?cb=20151216184907"
  //     dancing = false;
  //   }
  //
  // } else if (currentleft >= (window.innerWidth * 0.5 - catImg.width)) {
  //   if (dancing === false) {
  //     catImg.src = "https://media.giphy.com/media/Y50JPKkHJsDII/giphy.gif"
  //     dancing = true;
  //   }
  // } else if (currentleft < (window.innerWidth * 0.5 + catImg.width)) {
  //   if (dancing === true) {
  //     catImg.src = "https://vignette3.wikia.nocookie.net/animal-jam-clans-1/images/5/50/Running_cat_animation_by_urnam7-d4hvy1x.gif/revision/latest/scale-to-width-down/640?cb=20151216184907"
  //     dancing = false;
  //   }
  // }



  var transformString = ""
  if (movingRight) {
    transformString += "scaleX(1) "

  } else {
    transformString += "scaleX(-1) "

  }

  if (movingDown) {
    transformString += "rotate(" + (Math.degrees(Math.atan(1))) + "deg) "
  } else {
    transformString += "rotate(" + (-Math.degrees(Math.atan(1))) + "deg) "

  }



  catImg.style.transform = transformString;



}

var adjustHeight = function() {
  if (movingDown) {
    currentHeight += movePixelsUp;
    catImg.style.top = currentHeight + "px";
    if (currentHeight > (window.innerHeight - catImg.height)) {
      // catImg.style.transform = ("rotate(" + (-Math.degrees(Math.atan(1))) + "deg)")
      movingDown = false;
      catImg.src = dancing ? "running-cat-orange.gif" : "running-cat-black.gif"
      dancing = !dancing

    }
  } else {
    currentHeight -= movePixelsUp;
    catImg.style.top = currentHeight + "px";
    if (currentHeight < 0){
      // catImg.style.transform = ("rotate(" + (Math.degrees(Math.atan(1))) + "deg)")
      movingDown = true;
      catImg.src = dancing ? "running-cat-orange.gif" : "running-cat-black.gif"
      dancing = !dancing
    }
  }





}

var footPrint = function() {
  var img = new Image();

  img.onload = function() {
    imgContainer.appendChild(img);
  }

  img.style.position =  "fixed"
  img.style.left = currentleft + "px";
  img.style.top = currentHeight + "px";
  img.style.height = "20px";
  img.style.width = "20px";
  img.style.zIndex = -1;

  // var image = document.querySelector(".imgContainer img")

  if (dancing) {
    img.src = 'footprints-cat.png';


  } else {
    img.src = "footprints-cat-orange.png"
  }

  if (movingRight) {
    if (!movingDown) {
      img.style.top = (currentHeight + catImg.height) + "px";

    }
  } else {
    if (movingDown){
      img.style.left = (currentleft + catImg.width) + "px";
    } else {
      img.style.left = (currentleft + catImg.width) + "px";
      img.style.top = (currentHeight + catImg.height * 1.8) + "px";


    }
  }

  var transformString = ""
  if (movingRight) {
    transformString += "scaleX(1) "

  } else {
    transformString += "scaleX(-1) "

  }

  if (movingDown) {
    transformString += "rotate(" + (Math.degrees(Math.atan(1)) + 90) + "deg) "
  } else {
    transformString += "rotate(" + (-Math.degrees(Math.atan(1)) + 90) + "deg) "

  }

  img.style.transform = transformString;

  setTimeout(function() {imgContainer.removeChild(img)}, 1000);
}




var start = function() {
  if(timeId === 0) {
    timeId = setInterval(catWalk, currentSpeed);
    timeIdHeight = setInterval(adjustHeight, currentSpeed)
    timeIdFootprint = setInterval(footPrint, currentSpeed * 3)
  }
}

var faster = function() {
  if(timeId !== 0) {
    clearInterval(timeId);
    clearInterval(timeIdHeight);
    clearInterval(timeIdFootprint)
    currentSpeed *= 2/3;

    if (currentSpeed < maxSpeed) {
      currentSpeed = maxSpeed
    }

    timeIdHeight = setInterval(adjustHeight, currentSpeed)
    timeId = setInterval(catWalk, currentSpeed)
    timeIdFootprint = setInterval(footPrint, currentSpeed * 3)
  }
}

var stop = function() {
  clearInterval(timeId);
  clearInterval(timeIdHeight)
  clearInterval(timeIdFootprint)
  timeId = 0;
  currentSpeed = 100;
  timeIdHeight = 0;
  timeIdFootprint = 0;
}

Math.degrees = function(radians) {
	return radians * 180 / Math.PI;
}



startBtn.addEventListener("click", start)
fasterBtn.addEventListener("click", faster)
stopBtn.addEventListener("click", stop)
