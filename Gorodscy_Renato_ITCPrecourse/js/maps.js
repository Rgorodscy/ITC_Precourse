const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const iFrameElement = document.getElementById('cityIframe');
prevButton.disabled = true;


const saoPauloSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.0488661539!2d-46.87549743438984!3d-23.681531449872665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2sS%C3%A3o%20Paulo%2C%20SP%2C%20Brasil!5e0!3m2!1spt-BR!2sil!4v1661266985375!5m2!1spt-BR!2sil";
const parisSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.76457430403!2d2.2769948739278507!3d48.85894658138312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2zUGFyaXMsIEZyYW7Dp2E!5e0!3m2!1spt-BR!2sil!4v1661267080419!5m2!1spt-BR!2sil";
const londonSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317715.7119263355!2d-0.38178406930702025!3d51.52873519756608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondres%2C%20Reino%20Unido!5e0!3m2!1spt-BR!2sil!4v1661274268552!5m2!1spt-BR!2sil";
const iFrameSrcsArray = [saoPauloSrc, parisSrc, londonSrc, "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50310.604001580294!2d23.703319869738525!3d37.990832008339964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd1f067043f1%3A0x2736354576668ddd!2zQXRlbmFzLCBHcsOpY2lh!5e0!3m2!1spt-BR!2sil!4v1663680717849!5m2!1spt-BR!2sil"];

let currentSrcIndex = iFrameSrcsArray.indexOf(iFrameElement.src);

function prevCity() {
        currentSrcIndex = currentSrcIndex - 1;
        iFrameElement.src = iFrameSrcsArray[currentSrcIndex];
}

function nextCity() {
        currentSrcIndex = currentSrcIndex + 1;
        iFrameElement.src = iFrameSrcsArray[currentSrcIndex];
}


prevButton.addEventListener('click', prevCity);
nextButton.addEventListener('click', nextCity);

document.addEventListener('click', (event) => {
        if (currentSrcIndex == 0) {
                prevButton.disabled = true;
        } else if (currentSrcIndex == iFrameSrcsArray.length - 1) {
                nextButton.disabled = true;
        } else {
                prevButton.disabled = false;
                nextButton.disabled = false;
        }
})