"use strict";

const modal = () => {
    let modal = document.querySelector(".popup");
    let modalContent = document.querySelector(".popup-content");
    const buttons = document.querySelectorAll(".popup-btn");

    let step = 0;
    let idInterval;
    const modalAnimation = () => {
        let d = ((window.innerWidth - modalContent.offsetWidth) * 0.5) / 5;

        step++;

        idInterval = requestAnimationFrame(modalAnimation);
        if (step < d) {
            modalContent.style.left = step * 5 + "px";
        } else {
            cancelAnimationFrame(idInterval);
            step = 0;
        }
    };

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            modalContent = document.querySelector(".popup-content");
            modal.style.display = "block";
            if (window.innerWidth > 768) {
                modalContent.style.left = -modalContent.offsetWidth + "px";
                requestAnimationFrame(modalAnimation);
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
