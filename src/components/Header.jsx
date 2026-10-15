export default function Header({ nombre, rol, repositorio }) {
  return (
    <header>
      <h1>{nombre}</h1>
      <p>{rol}</p>
      <p>
        <a href={repositorio}>Repositorio del portfolio</a>
      </p>
    </header>
  );
}
