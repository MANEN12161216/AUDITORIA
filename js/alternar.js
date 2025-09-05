document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".tab-buttons button");
  const contents = document.querySelectorAll(".tab-content");

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab");

      // Quitar clases activas
      buttons.forEach(btn => btn.classList.remove("active"));
      contents.forEach(content => content.classList.remove("active"));

      // Activar el botón y el contenido correspondiente
      this.classList.add("active");

      const targetContent = document.getElementById(tabId);
      if (targetContent) {
        targetContent.classList.add("active");
      } else {
        console.warn(`No se encontró el contenedor con id="${tabId}"`);
      }
    });
  });
});
