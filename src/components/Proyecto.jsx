export default function Proyecto({ id, titulo, descripcion, tecnologias, enlaces, nota }) {
  return (
    <article aria-labelledby={id}>
      <h3 id={id}>{titulo}</h3>
      <p>{descripcion}</p>
      <p>
        <strong>Tecnologías empleadas:</strong> {tecnologias}
      </p>
      {enlaces.map((enlace) => (
        <p key={enlace.url}>
          <a href={enlace.url}>{enlace.texto}</a>
        </p>
      ))}
      {nota && (
        <p>
          <em>{nota}</em>
        </p>
      )}
    </article>
  );
}
