export default function slider({selWindow, selSlides, selPrev, selNext, direction = "horizontal"}) {
    const window = document.querySelector(selWindow);
    const slides = document.querySelectorAll(selSlides);

    function directionIf(horizontal, vertical) {
        if (direction == "horizontal") {
            horizontal();
        } else if (direction == "vertical") {
            vertical();
        }
    }
    window.style.overflow = "hidden";

    let currentSlide = 0;
    const maxCurrentSlide = slides.length - 1;

    function switchingSlide(n = 0) {
        currentSlide += n;

        if (currentSlide > maxCurrentSlide) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = maxCurrentSlide;
        }

        slides.forEach(slide => slide.style.display = "none");
        slides[currentSlide].style.display = "block";
        slides[currentSlide].classList.add("animated");
    }
    switchingSlide();

    try {
        document.querySelector(selPrev).addEventListener('click', () => {
            broadcastData(-1, "slideInLeft", "slideInRight");
        });
        document.querySelector(selNext).addEventListener('click', () => {
            broadcastData(1, "slideInRight", "slideInLeft");
        });
    } catch (e) {}
    
    let autoSwitching = setInterval(() => {
        directionIf(() =>  broadcastData(1, "slideInRight", "slideInLeft"), () => broadcastData(1, "slideInUp", "slideInDown"));
    }, 8000);

    window.addEventListener('mouseover', () => {
        clearInterval(autoSwitching);
    });

    window.addEventListener('mouseout', () => {
        autoSwitching = setInterval(() => {
            directionIf(() =>  broadcastData(1, "slideInRight", "slideInLeft"), () => broadcastData(1, "slideInUp", "slideInDown"));
        }, 8000);
    });

    function broadcastData(n, addClass, removeClass) {
        switchingSlide(n);
        slides[currentSlide].classList.add(addClass);
        slides[currentSlide].classList.remove(removeClass);
    }
}