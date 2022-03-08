"use strict";

const validation = () => {
    const form2Message = document.getElementById("form2-message");

    const inputText = document.querySelectorAll("form input[type='text']");
    const inputEmail = document.querySelectorAll("form input[type='email']");
    const inputPhone = document.querySelectorAll("form input[type='tel']");
    const inputNumber = document.querySelectorAll(".calc-block input");

    const validationText = /[^а-я\- ]+/i;
    const validationEmail = /[^a-z\@\-\_\.\!\~\*\']+/i;
    const validationPhone = /[^0-9\(\)\-]+/i;
    const validationNumber = /[^0-9]+/i;

    const manyDash = /(\-+)/g;
    const manySpace = /(\s+)/g;
    const edgeDash = /^\-|\-$/g;
    const edgeSpace = /^\s+|\s+$/g;

    inputText.forEach((input) => {
        input.addEventListener("input", (event) => {
            event.target.value = event.target.value.replace(validationText, "");
        });
    });

    inputEmail.forEach((input) => {
        input.addEventListener("input", (event) => {
            event.target.value = event.target.value.replace(validationEmail, "");
        });
    });

    inputPhone.forEach((input) => {
        input.addEventListener("input", (event) => {
            event.target.value = event.target.value.replace(validationPhone, "");
        });
    });

    form2Message.addEventListener("input", (event) => {
        event.target.value = event.target.value.replace(validationText, "");
    });

    inputNumber.forEach((input) => {
        input.addEventListener("input", (event) => {
            event.target.value = event.target.value.replace(validationNumber, "");
        });
    });

    inputText.forEach((input) => {
        input.addEventListener("blur", (event) => {
            event.target.value = event.target.value
                .replace(manyDash, "-")
                .replace(manySpace, " ")
                .replace(edgeDash, "")
                .replace(edgeSpace, "");
            let capitalizeLetterFunc = (match) => match.toUpperCase();
            event.target.value = event.target.value.toLowerCase();
            event.target.value = event.target.value.replace(/^[а-я]{1}|\s{1}[а-я]{1}/gi, capitalizeLetterFunc);
        });
    });

    inputEmail.forEach((input) => {
        input.addEventListener("blur", (event) => {
            event.target.value = event.target.value
                .replace(manyDash, "-")
                .replace(manySpace, " ")
                .replace(edgeDash, "")
                .replace(edgeSpace, "");
        });
    });

    inputPhone.forEach((input) => {
        input.addEventListener("blur", (event) => {
            event.target.value = event.target.value
                .replace(manyDash, "-")
                .replace(manySpace, " ")
                .replace(edgeDash, "")
                .replace(edgeSpace, "");
        });
    });
};

export default validation;
