const displayedImage = document.querySelector('.displayed-img');
const btn = document.querySelector('button');

var isGray = False;

function convertImageToGrayScale() {

    if (isGray) {
        isGray = false
        btn.innerHTML = "Darken"
        displayedImage.style = "filter: grayscale(0%)";
    } else {
        isGray = true
        btn.innerHTML = "Lighten"
        displayedImage.style = "filter: grayscale(100%)";
    }
}

function swapMainImage(loc) {
    document.getElementById('main-1').src = loc;
}
