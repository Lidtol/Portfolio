# Portfolio

Portfolio personal de Lidia María Espinar Tolstova, hecho con **React + Vite**.

Publicado en: https://lidtol.github.io/Portfolio/

## Desarrollo

```bash
npm install
npm run dev      # servidor local
npm run build    # genera la carpeta dist/
npm run preview  # previsualiza el build
```

## Despliegue

El workflow `.github/workflows/static.yml` compila el proyecto y lo publica en
GitHub Pages en cada push a `main`. En el repositorio hay que activar
**Settings → Pages → Source: GitHub Actions**.

## Estructura

- `src/data.js`: contenido (competencias, proyectos, enlaces).
- `src/components/`: un componente por sección.
- `src/styles.css`: estilos (el mismo diseño que la versión HTML).
