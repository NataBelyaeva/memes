function getImg(imgId) {
    image.src=imgId;
}

function getText(textId) {
    element.innerHTML = text.src=textId;
}

function updateImage() {
    console.log(this.files);
    if (this.files && this.files.length) {
        image.src = window.URL.createObjectURL(this.files[0]);
        image.setAttribute('height', '300px');
        image.setAttribute('width', '340px');
    }
}

let element = document.getElementById("text");
const input = document.getElementById('loadMem');
const image = document.getElementById('image');

input.addEventListener('change', updateImage);