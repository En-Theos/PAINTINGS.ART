import modal from "./modules/modal";
import slider from "./modules/slider";

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
});