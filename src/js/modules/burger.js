export default function burger(selButton, selMenu) {
    const button = document.querySelector(selButton);
    const menu = document.querySelector(selMenu);

    button.addEventListener('click', () => {
        if (window.screen.availWidth <= 992) {
            if (menu.style.display == "block") {
                menu.style.display = "none";
            } else {
                menu.style.display = "block";
            }
        }
    });

    window.addEventListener("resize", () => {
        if (window.screen.availWidth > 992) {
            menu.style.display = "none";
        }
    });
}