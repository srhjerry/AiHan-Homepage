// Get the modal
var modal = document.getElementById("myModal");

var noteIndex = 1;

var getNote = document.getElementsByClassName("note-photo");
var modalImg = document.getElementById("imgshow");

function plusNote(n){
    showNote(noteIndex += n);
}

function currentNote(n) {
    showNote(noteIndex = n-1);
}

function showNote(n) {
    
    if (n > getNote.length) {noteIndex = 1}
    if (n < 1) {noteIndex = getNote.length}
    
    modal.style.display = "block";
    modalImg.src = getNote[n].src;
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}