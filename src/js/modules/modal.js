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

function codeShow(selModal) {
    document.querySelector(selModal).style.display = "block";
    document.querySelector(selModal).classList.add("animated", "fadeInDown");
    document.querySelector(selModal).classList.remove("fadeInUp");

    document.body.style.overflow = "hidden";
    document.documentElement.style.marginRight = div.offsetWidth - div.clientWidth + "px";
}

function codeHide(selModal) {
    document.querySelector(selModal).style.display = "none";
    document.body.style.overflow = "";
    document.documentElement.style.marginRight = "";
}

function showModalByScroll() {
    const scrollFull = document.documentElement.scrollHeight - 1;
    const scrollDo = document.documentElement.clientHeight + document.documentElement.scrollTop;

    if (scrollFull <= scrollDo) {
        document.querySelector(".fixed-gift").click();
        window.removeEventListener('scroll', showModalByScroll);
    }
}

const div = document.createElement("div");
div.style.cssText = `
        width: 50px;
        height: 50px;
        overflow-y: scroll;
        visibility: hidden;
    `;
document.body.append(div);