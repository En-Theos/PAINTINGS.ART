import modal from "./modules/modal";
import slider from "./modules/slider";
import postForms from "./modules/forms";
import mask from "./modules/mask";
import checksText from "./modules/checksTextInput";
import loadingCards from "./modules/loadingСards";
import calc from "./modules/calc";
import filter from "./modules/filter";
import replacementImg from "./modules/replacementImg";
import accordion from "./modules/accordion";
import burger from "./modules/burger";
import scroll from "./modules/scroll";
import drop from "./modules/drop";

window.addEventListener('DOMContentLoaded', () => {
    const postData = {};

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
    postForms({
        selForm: ".popup-design form",
        urlBaseDate: "http://localhost:3000/designOrders",
    });
    postForms({
        selForm: ".popup-consultation form",
        urlBaseDate: "http://localhost:3000/consultationRequests",
        modal: ".popup-consultation"
    });
    postForms({
        selForm: ".consultation form",
        urlBaseDate: "http://localhost:3000/consultationRequests"
    });
    postForms({
        selForm: ".calc form",
        urlBaseDate: "http://localhost:3000/designOrders",
        additionalData: postData
    });
    mask("[name='phone']");
    checksText("[name='name']", "Руский");
    checksText("[name='message']", "Руский");
    loadingCards("http://localhost:3000/stylesBlock", "#styles .row", "#styles .button-styles");
    calc(".calc form", postData);
    filter("#portfolio .portfolio-block", "#portfolio .portfolio-menu li");
    replacementImg(".sizes .sizes-block", ".sizes .sizes-block img");
    accordion(".accordion-heading", ".accordion-block");
    burger(".burger", ".burger-menu");
    scroll(".pageup");
    drop();

});