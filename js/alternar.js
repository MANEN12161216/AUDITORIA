document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".tab-buttons button");
  const contents = document.querySelectorAll(".tab-content");

  // Verifica que existan botones y contenidos antes de aplicar lógica
  if (buttons.length > 0 && contents.length > 0) {
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
  } else {
    console.warn("No se encontraron botones o contenidos para alternar pestañas.");
  }
});

