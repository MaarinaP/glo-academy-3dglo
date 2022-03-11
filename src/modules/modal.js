"use strict";

import { animate } from "./helpers";

const modal = () => {
    let modal = document.querySelector(".popup");
    let modalContent = document.querySelector(".popup-content");
    const buttons = document.querySelectorAll(".popup-btn");

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            modalContent = document.querySelector(".popup-content");
            modal.style.display = "block";
            if (window.innerWidth > 768) {
                animate({
                    duration: 250,
                    timing(timeFraction) {
                        return Math.pow(timeFraction, 2);
                    },
                    draw(progress) {
                        modalContent.style.left = -modalContent.offsetWidth + "px";
                        modalContent.style.left = 35 * progress + "%";
                    },
                });
            }
        });
    });

    modal.addEventListener("click", (e) => {
        if (!e.target.closest(".popup-content") || e.target.classList.contains("popup-close")) {
            modal.style.display = "none";
        }
    });
};

export default modal;
