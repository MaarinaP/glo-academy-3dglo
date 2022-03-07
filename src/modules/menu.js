'use strict';

const menu = () => {
    const menuBtn = document.querySelector(".menu");
    const menu = document.querySelector("menu");
    const closeBtn = menu.querySelector(".close-btn");
    const menuItems = menu.querySelectorAll("ul a");
    const scroll = document.querySelector("main a");
    console.log(scroll);

    const handleMenu = () => {
       menu.classList.toggle("active-menu"); 
    };
    
    menuBtn.addEventListener("click", handleMenu);
    closeBtn.addEventListener("click", handleMenu);

    const smoothScrolling = (element) => {
        let anchor = element.hash.substring(1);
        let href = document.getElementById(anchor);
        href.scrollIntoView({block: "start", behavior: "smooth"});
    };

    menuItems.forEach(item => { item.addEventListener("click", (event) => {
        handleMenu();
        event.preventDefault();
        smoothScrolling(item);
        }); 
    });

    scroll.addEventListener("click", (event) => {
        event.preventDefault();
        smoothScrolling(scroll);
    });

};

export default menu;