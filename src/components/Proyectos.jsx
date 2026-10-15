import Proyecto from "./Proyecto.jsx";

export default function Proyectos({ proyectos, enlacesExternos }) {
  return (
    <section id="proyectos">
      <h2>Proyectos</h2>
      {proyectos.map((proyecto) => (
        <Proyecto key={proyecto.id} {...proyecto} />
      ))}

      <h3>Enlaces externos</h3>
      <ul>
        {enlacesExternos.map((enlace) => (
          <li key={enlace.url}>
            <a href={enlace.url}>{enlace.texto}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
