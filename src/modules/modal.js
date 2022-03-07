'use strict';

const modal = () => {
    const modal = document.querySelector(".popup");
    let modalContent = document.querySelector(".popup-content");
    const closeBtn = modal.querySelector(".popup-close");
    const buttons = document.querySelectorAll(".popup-btn");

    let step = 0;
    let idInterval;
    const modalAnimation = () => {
        let d = (window.innerWidth-modalContent.offsetWidth)*0.5+50;

        step++;

        idInterval = requestAnimationFrame(modalAnimation);
        if(step < d) {
            modalContent.style.left = step + "px";
        } else {
            cancelAnimationFrame(idInterval);
        }

    };

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            modalContent = document.querySelector(".popup-content");
            modal.style.display = "block";
            if (window.innerWidth > 768) {
                modalContent.style.left = -modalContent.offsetWidth + "px";
                requestAnimationFrame(modalAnimation); 
            }
            
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
};

export default modal;