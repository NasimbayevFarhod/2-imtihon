var elModalOpenButton = document.querySelector(".js-modal-open-button");
var elModal = document.querySelector(".modal");


elModalOpenButton.addEventListener("click", function(){
  elModal.classList.add("modal-show");
})

var elModalCloseButton = document.querySelector(".js-close-modal");

elModalCloseButton.addEventListener("click" , function (){
  elModal.classList.remove("modal-show");
})




// var elInfoOpenButton = document.querySelector(".js-info-open-button");
// var elClose = document.querySelector(".closed");


// elInfoOpenButton.addEventListener("click" ,function(){
//   elClose.classList.toggle("opened")
// })