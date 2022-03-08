"use strict";

const menu = () => {
    const body = document.querySelector("body");
    const menuBtn = document.querySelector(".menu");
    const menu = document.querySelector("menu");
    const closeBtn = menu.querySelector(".close-btn");
    const menuItems = menu.querySelectorAll("ul a");
    const scroll = document.querySelector("main a");

    const handleMenu = () => {
        menu.classList.toggle("active-menu");
    };

    const smoothScrolling = (element) => {
        let anchor = element.hash.substring(1);
        let href = document.getElementById(anchor);
        href.scrollIntoView({ block: "start", behavior: "smooth" });
    };

    body.addEventListener("click", (e) => {
        if (e.target.classList.contains("close-btn") || e.target.closest(".menu")) {
            handleMenu();
        } else if (menu.classList.contains("active-menu") && !e.target.classList.contains("active-menu")) {
            handleMenu();
        } else if (e.target.closest("main a")) {
            e.preventDefault();
            smoothScrolling(scroll);
        } else if (e.target.closest("menu li a")) {
            menuItems.forEach((item) => {
                if (item === e.target) {
                    handleMenu();
                    e.preventDefault();
                    smoothScrolling(item);
                }
            });
        }
    });
};

export default menu;
