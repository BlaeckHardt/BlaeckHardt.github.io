const imgs = document.getElementById('imgs');
const img = document.querySelectorAll('#imgs img');

let idx = 0;
let width;

function updateWidth() {
    width = window.innerWidth;
    imgs.style.width = `${width * img.length}px`;
    img.forEach(image => {
        image.style.width = `${width}px`;
    });
}

window.addEventListener('resize', updateWidth);
updateWidth();

let interval = setInterval(run, 2000);

function run() {
    idx++;
    changeImage();
}

function changeImage() {
    if (idx > img.length - 1) {
        idx = 0;
    } else if (idx < 0) {
        idx = img.length - 1;
    }

    imgs.style.transform = `translateX(${-idx * width}px)`;
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
}












