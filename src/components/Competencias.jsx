export default function Competencias({ lista }) {
  return (
    <section id="competencias">
      <h2>Competencias</h2>
      <p>
        Estudio el ciclo superior de DAW y tengo un grado medio de informática.
        Estas son las tecnologías y herramientas con las que trabajo:
      </p>
      <ul>
        {lista.map((competencia) => (
          <li key={competencia}>{competencia}</li>
        ))}
      </ul>
    </section>
  );
}
