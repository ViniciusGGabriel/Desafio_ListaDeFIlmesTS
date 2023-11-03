"use strict";
const menu_items = document.getElementById("menu_items");
const hamburger_mobile = document.getElementById("hamburger_mobile");
hamburger_mobile.addEventListener("click", (event) => {
    if (menu_items.classList.contains("hidden")) {
        menu_items.animate([{ opacity: "0" }, { opacity: "1" }], {
            duration: 600,
            easing: "ease",
            fill: "forwards",
        });
        menu_items.classList.remove("hidden");
        menu_items.classList.add("flex");
    }
    else {
        menu_items.animate([{ opacity: "1" }, { opacity: "0" }], {
            duration: 100,
            easing: "ease",
            fill: "forwards",
        }).onfinish = () => {
            menu_items.classList.add("hidden");
        };
    }
});
