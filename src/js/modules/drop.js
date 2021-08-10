export default function drop() {
    document.querySelectorAll("[name='upload']").forEach(input => {
        ['drop', 'input'].forEach(eventName => {
            input.addEventListener(eventName, (event) => {
                event.preventDefault();
    
                try {
                    event.target.files = event.dataTransfer.files;
                } catch (error) {}
    
                if (input.files[0].name != '') {
                    input.previousElementSibling.previousElementSibling.style.border = "4px dashed #6feb11";
                }
    
                if (input.parentElement.getAttribute("data-upload") == "") {
                    let data = {
                        upload: input.files[0].name
                    };
    
                    data = JSON.stringify(data);
    
                    fetch("http://localhost:3000/designOrders" ,{
                        method: "POST",
                        headers:  {
                            "Content-type": "application/json"
                        },
                        body: data
                    }).then((response) => {
                        if (response.ok) {
                            input.previousElementSibling.textContent = "Отправлено"; 
                        } else {
                            input.previousElementSibling.textContent = "Ошибка"; 
                        }
                    }).catch(() => {
                        input.previousElementSibling.textContent = "Ошибка"; 
                    });
                } else {
                    let dots;
                    const arr = input.files[0].name.split('.');
                    arr[0].length > 6 ? dots = "..." : dots = '.';
                    const name = arr[0].substring(0, 6) + dots + arr[1];
                    input.previousElementSibling.textContent = name;
                }
            });
        });
        

        input.addEventListener('dragenter', () => {
            input.previousElementSibling.previousElementSibling.style.border = "4px dashed #e74005";
        });
        input.addEventListener('dragleave', () => {
            input.previousElementSibling.previousElementSibling.style.border = "2px dashed #c51abb";
            if (input.files.length != 0) {
                input.previousElementSibling.previousElementSibling.style.border = "4px dashed #6feb11";
            }
        });
    });
}