"use strict";

const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement("div");
    const loadText = "Загрузка...";
    const errorText = "Ошибка...";
    const noValidText = "Введите правильные данные";
    const successText = "Спасибо! Наш менджер с вами свяжется!";

    const validate = (list) => {
        let success = true;

        const validationName = /[^а-я ]+/i;
        const validationPhone = /[^0-9\(\)\-\+]+/i;
        const validationMessage = /[^а-я\d\s\.\,\:\;\?\!\-\"\(\)]+/i;

        list.forEach((input) => {
            if (input.name === "user_name") {
                if (validationName.test(input.value)) {
                    success = false;
                    input.style.borderStyle = "solid";
                    input.style.borderColor = "red";
                }
            } else if (input.name === "user_email") {
                if (input.value === "") {
                    success = false;
                    input.style.borderStyle = "solid";
                    input.style.borderColor = "red";
                }
            } else if (input.name === "user_phone") {
                if (validationPhone.test(input.value)) {
                    success = false;
                    input.style.borderStyle = "solid";
                    input.style.borderColor = "red";
                }
            } else if (input.name === "user_message") {
                if (validationMessage.test(input.value)) {
                    success = false;
                    input.style.borderStyle = "solid";
                    input.style.borderColor = "red";
                }
            } else {
                success = true;
            }
        });

        return success;
    };

    const sendData = (data) => {
        return fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => res.json());
    };

    const submitForm = () => {
        const formElements = form.querySelectorAll("input");
        const formData = new FormData(form);
        const formBody = {};

        statusBlock.textContent = loadText;
        form.append(statusBlock);

        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        someElem.forEach((elem) => {
            const element = document.getElementById(elem.id);

            if (elem.type === "block") {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === "input") {
                formBody[elem.id] = element.value;
            }
        });

        if (validate(formElements)) {
            sendData(formBody)
                .then((data) => {
                    statusBlock.textContent = successText;
                    formElements.forEach((input) => {
                        input.value = "";
                        input.removeAttribute("style");
                    });
                })
                .catch(() => {
                    statusBlock.textContent = errorText;
                });
        } else {
            statusBlock.textContent = noValidText;
            alert("Данные не валидны!!!");
        }
    };

    try {
        if (!form) {
            throw new Error("Верните форму на место, пожалста!");
        }

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            submitForm();
        });
    } catch (error) {
        console.log(error.message);
    }
};

export default sendForm;
