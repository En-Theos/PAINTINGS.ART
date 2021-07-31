import modal from "./modules/modal";

window.addEventListener('DOMContentLoaded', () => {
    modal(".popup-design", ".button-design");
    modal(".popup-consultation", ".button-consultation");
    modal(".popup-gift", ".fixed-gift", true);
});