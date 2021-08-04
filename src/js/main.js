import modal from "./modules/modal";
import slider from "./modules/slider";
import postForms from "./modules/forms";
import mask from "./modules/mask";
import checksText from "./modules/checksTextInput";

window.addEventListener('DOMContentLoaded', () => {
    modal(".popup-design", ".button-design");
    modal(".popup-consultation", ".button-consultation");
    modal(".popup-gift", ".fixed-gift", true);
    slider({
        selWindow: ".feedback-slider",
        selSlides: ".feedback-slider-item",
        selPrev: ".feedback-slider .main-prev-btn",
        selNext: ".feedback-slider .main-next-btn"
    });
    slider({
        selWindow: ".main-slider", 
        selSlides: ".main-slider-item", 
        direction: "vertical"
    });
    postForms(".popup-design form", "http://localhost:3000/designOrders", ".popup-design");
    postForms(".popup-consultation form", "http://localhost:3000/consultationRequests", ".popup-consultation");
    postForms(".calc form", "http://localhost:3000/designOrders");
    postForms(".consultation form", "http://localhost:3000/consultationRequests");
    mask("[name='phone']");
    checksText("[name='name']", "Руский");
    checksText("[name='message']", "Руский");

});