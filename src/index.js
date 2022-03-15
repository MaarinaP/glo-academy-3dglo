import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import validation from "./modules/validation";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import calc from "./modules/calc";
import sendForm from "./modules/sendForm";

timer("18 March 2022");
menu();
modal();
validation();
tabs();
slider("portfolio-item-active", "dot-active");
calc(100);

sendForm({
    formId: "form1",
});

sendForm({
    formId: "form3",
});

sendForm({
    formId: "form2",
});
