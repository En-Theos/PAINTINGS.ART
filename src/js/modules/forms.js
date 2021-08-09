import {codeHide} from "../services/services";

export default function postForms({selForm, urlBaseDate, additionalData, modal = ".popup-design"}) {
    const form = document.querySelector(selForm);
    const upload = document.querySelectorAll('[name="upload"]');

    const message = {
        success: "Отправлено",
        successImg: "assets/img/ok.png",
        loading: "assets/img/spinner.gif",
        failure: "Ошибка",
        failureImg: "assets/img/fail.png"
    };

   

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const load = document.createElement("img");
        load.src = message.loading;
        load.style.width = "30px";
        form.append(load);

        let objData = Object.fromEntries(new FormData(form).entries());
        objData.upload = {
            lastModified: objData.upload.lastModified,
            lastModifiedDate: objData.upload.lastModifiedDate,
            name: objData.upload.name,
            size: objData.upload.size,
            type: objData.upload.type,
            webkitRelativePath: objData.upload.webkitRelativePath
        };
      
        if (additionalData) {
            objData = Object.assign(objData, additionalData);
        }
        const JSONData = JSON.stringify(objData);

        fetch(urlBaseDate, {
            method: "POST",
            headers:  {
                "Content-type": "application/json"
            },
            body: JSONData
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
            upload.previousElementSibling.previousElementSibling.style.border = "2px dashed #c51abb";
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