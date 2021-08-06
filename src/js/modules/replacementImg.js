export default function replacementImg(selBoxReplaceContent, selReplaceContent) {
    const boxReplaceContent = document.querySelectorAll(selBoxReplaceContent);
    const replaceContent = document.querySelectorAll(selReplaceContent);
    boxReplaceContent.forEach((box, i) => {
        const arrSrc = replaceContent[i].src.split('.');

        box.addEventListener('mouseover', () => {
            replaceContent[i].style.cssText = `
                position: relative;
                z-index: 1;
            `;
            replaceContent[i].src = arrSrc[0] + "-1." + arrSrc[1];
        });
        box.addEventListener('mouseout', () => {
            replaceContent[i].style.cssText = ``;
            replaceContent[i].src = arrSrc[0] + "." + arrSrc[1];
        });
    });
}