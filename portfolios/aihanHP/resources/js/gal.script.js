function openTab(part) {
    var tabs = document.getElementsByClassName('gallery-tab');
    
    for(var i = 0; i<tabs.length; i++){
        tabs[i].style.display = "none";   
    }
    document.getElementById('gallery-main').style.display = "none";
    document.getElementById("part" + part).style.display = "block";
}

function closeTab() {
    var tabs = document.getElementsByClassName('gallery-tab');
    
    for(var i = 0; i<tabs.length; i++){
        tabs[i].style.display = "none";   
    }
    
    document.getElementById('gallery-main').style.display = "block";
}

function openModal() {
  let navi = document.getElementById('navicon');
  let menu = document.getElementById("mainNav");

  document.getElementById('myModal').style.display = "block";
  navi.style.display = "none";
  menu.style.right = "-280px";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
  document.getElementById('navicon').style.display = "block";
}

var slideIndex = 1;

function currentSlide(n) {
    console.log(event.target.src);
    console.log(event.srcElement);
    showSlides(slideIndex = n);
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function addSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var show = document.getElementById("slideShow");

  if (n > 86) {slideIndex = 1}
  else if (n < 1) {slideIndex = 86}
  else {slideIndex = n}

  
    
  
  show.src = getPhotoSRC(slideIndex);
  slides[0].style.display = "block";
  
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
      dots[i].src = "../resources/img/gallery/thumbnail/"+((i+slideIndex-4+86)%86+1)+".jpg";
  }
    
  //dots[slideIndex-1].className += " active";
}

function getPhotoSRC(slideIndex){
    let photosrc;
  
    if(slideIndex>0&&slideIndex<=10){photosrc = "../resources/img/gallery/A/"+(slideIndex)+".jpg";}
    else if(slideIndex>10&&slideIndex<=18){photosrc = "../resources/img/gallery/B/"+(slideIndex)+".jpg";}
    else if(slideIndex>18&&slideIndex<=36||slideIndex==83||slideIndex==84){photosrc = "../resources/img/gallery/C/"+(slideIndex)+".jpg";}
    else if(slideIndex>36&&slideIndex<=45){photosrc = "../resources/img/gallery/D/"+(slideIndex)+".jpg";}
    else if(slideIndex>45&&slideIndex<=62){photosrc = "../resources/img/gallery/E/"+(slideIndex)+".jpg";}
    else if(slideIndex>62&&slideIndex<=72||slideIndex==85||slideIndex==86){photosrc = "../resources/img/gallery/F/"+(slideIndex)+".jpg";}
    else if(slideIndex>72&&slideIndex<=82){photosrc = "../resources/img/gallery/G/"+(slideIndex)+".jpg";}
    else {photosrc = "../resources/img/gallery/thumbnail/"+(slideIndex)+".jpg";}
    
    return photosrc;
}

document.querySelector("touchEv").addEventListener('touchstart', openModal);

/*window.onload = function() {
	setTimeout(function() {
		// preload image
        let i;
        
        for(i=1; i<87; i++){
		  new Image().src = getPhotoSRC(i);
        }
	}, 5000);
};*/