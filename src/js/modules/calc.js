export default function calc(selCalc, postData, fileUpload) {
    let calcData = {
        optionsPrice: 0,
        discount: 0
    };
    let priceData;
    
    fetch("http://localhost:3000/price").then((responce) => {
        if (responce.ok && responce.status == 200) {
            return responce.json();
        }
    }).then((data) => {
        priceData = data;
    });
    const boxCalc = document.querySelector(selCalc);
    boxCalc.addEventListener('input', (event) => {
        if (priceData) {
            console.log(fileUpload);
            switch (event.target.id) {
                case "size":
                    if (event.target.value == "Выберите размер картины") {
                        postData.size = 0;
                        calcData.sizePrice = 0;
                    } else {
                        postData.size = event.target.value;
                        calcData.sizePrice = priceData.priceSize[event.target.value];
                    }
                    break;
                case "material":
                    if (event.target.value == "Выберите материал картины") {
                        postData.material = 0;
                        calcData.materialPrice = 0;
                    } else {
                        postData.material = event.target.value;
                        calcData.materialPrice = priceData.priceMaterial[event.target.value];
                    }
                    break;
                case "options":
                    if (event.target.value == "Дополнительные услуги") {
                        postData.options = "Не выбрал";
                        calcData.optionsPrice = 0;
                    } else {
                        postData.options = event.target.value;
                        calcData.optionsPrice = priceData.priceOptions[event.target.value];
                    }
                    break;
            }
            if (event.target.classList.contains("promocode")) {
                switch (event.target.value) {
                    case "IWANTPOPART":
                    calcData.discount = 0.7;
                    postData.discount = 0.7;
                        break;
                    default:
                    calcData.discount = 0;
                    postData.discount = "Не ввел";
                        break;
                }
            }
            postToForms(calcData);
        } else {
            document.querySelector(".calc-price").textContent = "Что-то пошло не так";
        }
    });
    
    function postToForms({sizePrice, materialPrice, optionsPrice, discount}) {
        if (sizePrice && materialPrice) {
            document.querySelector(".calc-price").textContent = `
                Сумма заказа ${Math.round(discount ? (sizePrice * materialPrice + optionsPrice) * discount : sizePrice * materialPrice + optionsPrice)}
            `;
            if (fileUpload.iff) {
                document.querySelector(".calc .button-order").disabled = false;
                document.querySelector(".calc form").addEventListener('submit', () => {
                    calcData = {
                        sizePrice: 0,
                        materialPrice: 0,
                        optionsPrice: 0,
                        discount: 0
                    };
                    document.querySelector(".calc .button-order").disabled = true;
                    document.querySelector(".calc-price").textContent = "Для расчета нужно выбрать размер картины и материал картины";
                });
            }
        } else {
            document.querySelector(".calc .button-order").disabled = true;
            document.querySelector(".calc-price").textContent = "Для расчета нужно выбрать размер картины и материал картины";
        }
    }
}