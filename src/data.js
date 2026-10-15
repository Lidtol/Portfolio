export const perfil = {
  nombre: "Lidia María Espinar Tolstova",
  rol: "Estudiante de DAW",
  repositorio: "https://github.com/Lidtol/Portfolio",
};

export const competencias = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Git y GitHub",
  "SQL y bases de datos",
  "PHP",
  "Java",
];

export const proyectos = [
  {
    id: "proyecto-portfolio",
    titulo: "Portfolio de Lidia María Espinar Tolstova",
    descripcion:
      "Portfolio personal creado para presentar mi formación, experiencia y trabajos realizados durante el ciclo de Desarrollo de Aplicaciones Web.",
    tecnologias: "HTML5 semántico, CSS3, React y Vite.",
    enlaces: [
      { texto: "Repositorio en GitHub", url: "https://github.com/Lidtol/Portfolio" },
      { texto: "Versión publicada del portfolio", url: "https://lidtol.github.io/Portfolio/" },
    ],
  },
  {
    id: "proyecto-crud",
    titulo: "Proyecto CRUD: API REST de tareas",
    descripcion:
      "API REST de gestión de tareas desarrollada para la asignatura de Desarrollo Web en Entorno Servidor. Permite crear, consultar, filtrar y modificar tareas mediante peticiones HTTP que se prueban con Postman. Es un trabajo en progreso: los datos se guardan en memoria y la validación y el control de errores se van mejorando en cada unidad.",
    tecnologias: "Java, Spring Boot y Maven.",
    enlaces: [
      {
        texto: "Repositorio en GitHub",
        url: "https://github.com/Lidtol/proyecto-Desarrollo-Web-Servidor-",
      },
    ],
    nota: "Actualmente no dispongo de una demo pública del backend; para probarlo hay que ejecutarlo en local siguiendo el README del repositorio.",
  },
];

export const enlacesExternos = [
  { texto: "Perfil de GitHub", url: "https://github.com/Lidtol" },
  { texto: "Dirección de contacto", url: "mailto:lidesptol@alu.edu.gva.es" },
];
