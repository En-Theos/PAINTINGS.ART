export function codeShow(selModal) {
    document.querySelector(selModal).style.display = "block";
    document.querySelector(selModal).classList.add("animated", "fadeInDown");
    document.querySelector(selModal).classList.remove("fadeInUp");

    document.body.style.overflow = "hidden";
    document.documentElement.style.marginRight = div.offsetWidth - div.clientWidth + "px";
}

export function codeHide(selModal) {
    document.querySelector(selModal).style.display = "none";
    document.body.style.overflow = "";
    document.documentElement.style.marginRight = "";
}

const div = document.createElement("div");
div.style.cssText = `
        width: 50px;
        height: 50px;
        overflow-y: scroll;
        visibility: hidden;
    `;
document.body.append(div);