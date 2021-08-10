export default function scroll(upSelector) {
    const upElem = document.querySelector(upSelector);

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) {
            upElem.classList.add('animated', 'fadeIn');
            upElem.classList.remove('fadeOut');
        } else {
            upElem.classList.add('fadeOut');
            upElem.classList.remove('fadeIn');
        }
    });

    let links = document.querySelectorAll('[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
    
            let heightTop = document.documentElement.scrollTop, // получаем значение сколько в пикселях пролистал пользиватель
                hash = this.hash, // получаем строку с сылкой
                toBlock = document.querySelector(hash).getBoundingClientRect().top; // получаем блок до которого мы должи пролистать
    
            requestAnimationFrame(step);
            let px = 0;
            function step() {
                px += 60;
                let r;
                if (toBlock < 0) { // если блок находится выше чем видимый контент, то в toBlock будет минусовое значение если ниже то плюсовое
                    r = (heightTop - Math.min(px, heightTop));
                    document.documentElement.scrollTo(0, r);
                } else {
                    r = Math.min(px, toBlock);
                    document.documentElement.scrollTo(0, r);
                }

                if (r != heightTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        });
    });
}