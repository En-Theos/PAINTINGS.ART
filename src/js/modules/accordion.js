export default function accordion(selButton, selContent) {
    const arrButton = document.querySelectorAll(selButton);
    const arrContent = document.querySelectorAll(selContent);

    arrButton.forEach((button, index) => {
        button.addEventListener('click', () => {
            if (!button.classList.contains("active")) {
                arrButton.forEach(btn => btn.classList.remove("active"));
                arrContent.forEach(content => content.classList.remove("active", "animated", "flipInX"));
            }
            button.classList.toggle("active");
            arrContent[index].classList.toggle("active");
            arrContent[index].classList.toggle("animated");
            arrContent[index].classList.toggle("flipInX");
        }); 
    });
}