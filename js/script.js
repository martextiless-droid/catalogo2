const pageFlip = new St.PageFlip(document.getElementById("catalog"), {
  width: 600,
  height: 800,
  size: "stretch",
  minWidth: 315,
  maxWidth: 1000,
  maxHeight: 1350,
  showCover: true,
  mobileScrollSupport: false
});

pageFlip.loadFromImages([
  "assets/pagina1.png",  // Asegúrate de tener imágenes en esta carpeta
  "assets/pagina2.jpg",
  "assets/pagina3.jpg"
]);
