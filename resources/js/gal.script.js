function openModal() {
  document.getElementById('myModal').style.display = "block";
  document.getElementById('navicon').style.display = "none";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
  document.getElementById('navicon').style.display = "block";
}

var slideIndex = 1;

function currentSlide(n) {
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

  if (n > 82) {slideIndex = 1}
  else if (n < 1) {slideIndex = 82}
  else {slideIndex = n}

  var photosrc;
  if(slideIndex>0&&slideIndex<=10){photosrc = "/resources/img/gallery/A/"+(slideIndex)+".jpg";}
  else if(slideIndex>10&&slideIndex<=18){photosrc = "/resources/img/gallery/B/"+(slideIndex)+".jpg";}
  else if(slideIndex>18&&slideIndex<=36||slideIndex==82){photosrc = "/resources/img/gallery/C/"+(slideIndex)+".jpg";}
  else if(slideIndex>36&&slideIndex<=45){photosrc = "/resources/img/gallery/D/"+(slideIndex)+".jpg";}
  else if(slideIndex>45&&slideIndex<=62){photosrc = "/resources/img/gallery/E/"+(slideIndex)+".jpg";}
  else if(slideIndex>62&&slideIndex<=72){photosrc = "/resources/img/gallery/F/"+(slideIndex)+".jpg";}
  else if(slideIndex>72&&slideIndex<=81){photosrc = "/resources/img/gallery/G/"+(slideIndex)+".jpg";}
  else {photosrc = "/resources/img/gallery/thumbnail/"+(slideIndex)+".jpg";}
    
  
  show.src = photosrc;
  slides[0].style.display = "block";
  
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
      dots[i].src = "/resources/img/gallery/thumbnail/"+((i+slideIndex-3+83)%83)+".jpg";
  }
    
  dots[slideIndex-1].className += " active";
}