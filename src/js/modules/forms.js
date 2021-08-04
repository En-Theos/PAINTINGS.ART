import {codeHide} from "../services/services";

export default function postForms(selForm, urlBaseDate, modal = ".popup-design") {
    const form = document.querySelector(selForm);
    const upload = document.querySelectorAll('[name="upload"]');

    const message = {
        success: "Отправлено",
        successImg: "assets/img/ok.png",
        loading: "assets/img/spinner.gif",
        failure: "Ошибка",
        failureImg: "assets/img/fail.png"
    };

    upload.forEach(item => {
        item.addEventListener('input', () => {
            let dots;
            const arr = item.files[0].name.split('.');
            arr[0].length > 6 ? dots = "..." : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            item.previousElementSibling.textContent = name;
        });
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const load = document.createElement("img");
        load.src = message.loading;
        load.style.width = "30px";
        form.append(load);

        const formData = JSON.stringify(Object.fromEntries(new FormData(form).entries()));

        fetch(urlBaseDate, {
            method: "POST",
            headers:  {
                "Content-type": "application/json"
            },
            body: formData
        }).then((data) => {
            if (data.ok && data.status != 404) {
                createMessage(message.success, message.successImg);
            } else {
                createMessage(message.failure, message.failureImg);
            }
        }).catch(() => {
            createMessage(message.failure, message.failureImg);
        }).finally(() => {
            load.remove();
            form.reset();
            upload.forEach(item => item.previousElementSibling.textContent = "Файл не выбран");
        });
    });

    function createMessage(messageText, messageImg) {
        form.style.display = "none";
        try {
            form.parentElement.previousElementSibling.style.display = "none"; 
        } catch (error) {}

        const statusModal = document.createElement("div");
        statusModal.innerHTML = `
			<img src="${messageImg}" alt="">
			<p class="p-heading">${messageText}</p>
        `;
        statusModal.style.textAlign = "center";
        form.parentElement.append(statusModal);

        setTimeout(() => {
            form.style.display = "block";
            try {
                form.parentElement.previousElementSibling.style.display = "block"; 
            } catch (error) {}
            statusModal.remove();
            codeHide(modal);
        }, 3000);
    }
}