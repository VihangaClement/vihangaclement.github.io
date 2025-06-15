// Add JS here
function openLightbox(src) {
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox").style.display = "flex";
  }

  function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
  }

  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Form submitted! (This is a demo - backend integration pending.)");
    this.reset();
  });