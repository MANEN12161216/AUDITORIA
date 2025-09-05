function mostrarVentanas(seccion) {
  const datos = {
    auditoria: [
      { titulo: "Auditoría", url: "../paginas/auditoria.html", img: "../imagenes/auditoria.png", desc: "Introducción a la auditoría informática" },
      { titulo: "Metodología", url: "../paginas/Metodologia.html", img: "../imagenes/imagenes de paginas/proceso.png", desc: "Pasos y enfoques de auditoría" },
      { titulo: "Software", url: "../paginas/software.html", img: "../imagenes/software.png", desc: "Herramientas utilizadas" },
      { titulo: "Normativas", url: "../paginas/Normativas-Estándares.html", img: "../imagenes/normativas.png", desc: "Reglas y estándares aplicables" }
    ],
    drift: [
      { titulo: "Historia del Drift", url: "../paginas/drift.html", img: "../imagenes/drift.png", desc: "Orígenes y evolución del drift" },
      { titulo: "Técnicas", url: "../paginas/Tecnicas.html", img: "../imagenes/tecnicas/shift.png", desc: "Cómo se ejecuta el drift" },
      { titulo: "Autos", url: "../paginas/Autos.html", img: "../imagenes/drift-setup.png", desc: "Modelos ideales para drifting" },
      { titulo: "Leyendas", url: "../paginas/leyendas.html", img: "../imagenes/pilotos/tsuchiya.png", desc: "Pilotos icónicos y mitos" },
      { titulo: "Acerca de", url: "../paginas/acerca.html", img: "../imagenes/acerca.png", desc: "Información del sitio" }
    ]
  };

  const menu = document.createElement('div');
  menu.classList.add('menu-visual');

  let html = `<button class="boton-cerrar" onclick="this.parentElement.remove()">Cerrar</button>`;
  html += `<h2>Secciones de ${seccion.charAt(0).toUpperCase() + seccion.slice(1)}</h2>`;
  html += `<div class="grid-ventanas">`;

  datos[seccion].forEach(item => {
    html += `
      <div class="ventana-card" onclick="location.href='${item.url}'">
        <img src="${item.img}" alt="${item.titulo}">
        <div class="info">
          <h3>${item.titulo}</h3>
          <p>${item.desc}</p>
        </div>
      </div>
    `;
  });

  html += `</div>`;
  menu.innerHTML = html;
  document.getElementById('contenedor-menus').appendChild(menu);
}
