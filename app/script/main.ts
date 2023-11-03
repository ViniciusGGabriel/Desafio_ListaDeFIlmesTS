const menu_items = document.getElementById("menu_items") as HTMLUListElement;
const hamburger_mobile = document.getElementById(
  "hamburger_mobile"
) as HTMLDivElement;

hamburger_mobile.addEventListener("click", (event) => {
  /* Caso em menu_items tenha hidden ele remove o hidden e adiciona o flex */
  if (menu_items.classList.contains("hidden")) {
    /* Animação em ts/js */
    menu_items.animate([{ opacity: "0" }, { opacity: "1" }], {
      duration: 600,
      easing: "ease",
      fill: "forwards",
    });

    menu_items.classList.remove("hidden");
    menu_items.classList.add("flex");
  } else {
    /* Animação em ts/js */
    menu_items.animate([{ opacity: "1" }, { opacity: "0" }], {
      duration: 100,
      easing: "ease",
      fill: "forwards",
    }).onfinish = () => {
      menu_items.classList.add("hidden");
    };
  }
  /* Senão ele adiciona */
});
