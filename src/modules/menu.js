"use strict";

const menu = () => {
    const body = document.querySelector("body");
    const menu = document.querySelector("menu");
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
        } else if (
            menu.classList.contains("active-menu") &&
            !e.target.classList.contains("active-menu") &&
            !e.target.closest("menu li")
        ) {
            handleMenu();
        } else if (e.target.closest("main a")) {
            e.preventDefault();
            smoothScrolling(scroll);
        } else if (e.target.closest("menu li a")) {
            menuItems.forEach((item) => {
                if (item === e.target) {
                    // console.log(e.target);
                    handleMenu();
                    e.preventDefault();
                    smoothScrolling(item);
                }
            });
        }
    });
};

export default menu;
