import {codeShow, codeHide} from "../services/services";

export default function modal(selModal, selButton, destoy = false) {
    document.querySelectorAll(selButton).forEach(button => {
        button.addEventListener('click', () => {
            codeShow(selModal);
            window.removeEventListener('scroll', showModalByScroll);
            if (destoy) {
                button.remove();
            }
        });
    });
    window.addEventListener('scroll', showModalByScroll);
    setTimeout(() => {
        let display;

        document.querySelectorAll("[data-modal]").forEach(item => {
            if (window.getComputedStyle(item).display == "block") {
                display = "block";
            }
        });

        if (!display) {
            codeShow(".popup-consultation");
        }
    }, 60000000);

    const modalWindow = document.querySelector(selModal);
    modalWindow.addEventListener('click', (event) => {
        if (event.target && event.target == modalWindow || event.target.classList.contains("popup-close")) {
            codeHide(selModal);
        }
    });
}

function showModalByScroll() {
    const scrollFull = document.documentElement.scrollHeight - 1;
    const scrollDo = document.documentElement.clientHeight + document.documentElement.scrollTop;

    if (scrollFull <= scrollDo) {
        document.querySelector(".fixed-gift").click();
        window.removeEventListener('scroll', showModalByScroll);
    }
}

