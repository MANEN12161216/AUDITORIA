document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("toggle-menu-btn");
  const menu = document.getElementById("menu-principal");

  // Verifica que ambos elementos existan antes de aplicar eventos
  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("oculto");
    });
  }
});
