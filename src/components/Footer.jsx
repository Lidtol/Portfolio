export default function Footer({ nombre }) {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} {nombre}
      </p>
    </footer>
  );
}
