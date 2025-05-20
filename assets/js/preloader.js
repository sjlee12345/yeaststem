preloadimg = [
    "assets/images/atpmolecule.png",
    "assets/images/chris.png",
    "assets/images/daniel.png",
    "assets/images/louis.png",
    "assets/images/photo1.png",
    "assets/images/photo2.png",
    "assets/images/photo3.png",
    "assets/images/photo4.jpg",
    "assets/images/seojun.png",
    "assets/images/seojun.png",
    "assets/images/setup.png",
    "assets/images/yeast.png",
]
images = []
preloadimg.forEach(element => {
    image = new Image();
    image.src = element;
});