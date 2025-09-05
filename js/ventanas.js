function mostrarVentanas(seccion) {
  const base = "/AUDITORIA";

  const datos = {
    auditoria: [
      {
        titulo: "Auditoría",
        url: `${base}/paginas/auditoria.html`,
        img: `${base}/imagenes/auditoria.png`,
        desc: "Introducción a la auditoría informática"
      },
      {
        titulo: "Metodología",
        url: `${base}/paginas/Metodologia.html`,
        img: `${base}/imagenes/imagenes de paginas/proceso.png`,
        desc: "Pasos y enfoques de auditoría"
      },
      {
        titulo: "Software",
        url: `${base}/paginas/software.html`,
        img: `${base}/imagenes/software.png`,
        desc: "Herramientas utilizadas"
      },
      {
        titulo: "Normativas",
        url: `${base}/paginas/Normativas-Estándares.html`,
        img: `${base}/imagenes/normativas.png`,
        desc: "Reglas y estándares aplicables"
      }
    ],
    drift: [
      {
        titulo: "Historia del Drift",
        url: `${base}/paginas/drift.html`,
        img: `${base}/imagenes/drift.png`,
        desc: "Orígenes y evolución del drift"
      },
      {
        titulo: "Técnicas",
        url: `${base}/paginas/Tecnicas.html`,
        img: `${base}/imagenes/tecnicas/shift.png`,
        desc: "Cómo se ejecuta el drift"
      },
      {
        titulo: "Autos",
        url: `${base}/paginas/Autos.html`,
        img: `${base}/imagenes/drift-setup.png`,
        desc: "Modelos ideales para drifting"
      },
      {
        titulo: "Leyendas",
        url: `${base}/paginas/leyendas.html`,
        img: `${base}/imagenes/pilotos/tsuchiya.png`,
        desc: "Pilotos icónicos y mitos"
      },
      {
        titulo: "Acerca de",
        url: `${base}/paginas/acerca.html`,
        img: `${base}/imagenes/acerca.png`,
        desc: "Información del sitio"
      }
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
