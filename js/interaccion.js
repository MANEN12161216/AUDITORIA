document.addEventListener("DOMContentLoaded", () => {
  const menuContainer = document.getElementById("menu-container");
  if (menuContainer) {
    fetch("/componentes/menu.html")
      .then(response => response.text())
      .then(html => {
        menuContainer.innerHTML = html;

        const buttons = menuContainer.querySelectorAll(".tab-buttons button");
        const contents = menuContainer.querySelectorAll(".tab-content");

        // Activar pestaña según el atributo del body
        const tabActual = document.body.getAttribute("data-tab");
        if (tabActual) {
          buttons.forEach(btn => {
            const tabId = btn.dataset.tab;
            if (tabId === tabActual) {
              btn.classList.add("active");
              const target = menuContainer.querySelector(`#${tabId}`);
              if (target) target.classList.add("active");
            } else {
              btn.classList.remove("active");
              const target = menuContainer.querySelector(`#${tabId}`);
              if (target) target.classList.remove("active");
            }
          });
        }

        // Activar pestañas por clic
        buttons.forEach(button => {
          button.addEventListener("click", () => {
            const tabId = button.dataset.tab;

            buttons.forEach(btn => btn.classList.remove("active"));
            contents.forEach(content => content.classList.remove("active"));

            button.classList.add("active");
            const target = menuContainer.querySelector(`#${tabId}`);
            if (target) target.classList.add("active");
          });
        });
      });
  }
});


