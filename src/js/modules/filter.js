export default function filter(selElementFiltration, selButtonFiltration) {
    const elementFiltration = document.querySelectorAll(selElementFiltration);
    const buttonFiltration = document.querySelectorAll(selButtonFiltration);

    buttonFiltration.forEach(button => {
        button.addEventListener('click', () => {
            let counter = 0;
           
            buttonFiltration.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            elementFiltration.forEach(elem => {
                if (elem.classList.contains(button.classList.item(0))) {
                    elem.style.display = 'block';
                    elem.classList.add("animated", "flipInY");
                    counter++;
                } else {
                    elem.style.display = 'none';
                    elem.classList.remove("animated", "flipInY");
                }
            });

            if (counter == 0) {
                document.querySelector(".portfolio-no").style.display = 'block';
            } else {
                document.querySelector(".portfolio-no").style.display = 'none';
            }
        });
    });
} 