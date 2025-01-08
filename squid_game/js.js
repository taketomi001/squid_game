let logo = document.querySelector(".logo");
let card = document.querySelector(".carte");
let hunter = document.querySelector('.hunter');

logo.addEventListener("click", () => {
  element = document.body;
  element.classList.toggle("changeMode");
});
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("audio").play();
});

card.addEventListener("click", () => {
  // Get the modal
  var modal = document.getElementById("myModal");


  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  card.onclick = function () {
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

});
hunter.addEventListener("click", () => {
  // Get the modal
  var modal2 = document.getElementById("myModal2");


  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  hunter.onclick = function () {
    modal2.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal2.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
  };

});

