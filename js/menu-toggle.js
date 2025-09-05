document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("toggle-menu-btn");
  const menu = document.getElementById("menu-principal");

  btn.addEventListener("click", () => {
    menu.classList.toggle("oculto");
  });
});
