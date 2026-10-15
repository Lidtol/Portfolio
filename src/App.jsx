import Header from "./components/Header.jsx";
import SobreMi from "./components/SobreMi.jsx";
import Competencias from "./components/Competencias.jsx";
import Proyectos from "./components/Proyectos.jsx";
import Footer from "./components/Footer.jsx";
import { perfil, competencias, proyectos, enlacesExternos } from "./data.js";

export default function App() {
  return (
    <>
      <Header {...perfil} />
      <SobreMi nombre={perfil.nombre} />
      <Competencias lista={competencias} />
      <Proyectos proyectos={proyectos} enlacesExternos={enlacesExternos} />
      <p className="nota">
        Documento inicial para verificar la automatización del despliegue
        continuo.
      </p>
      <Footer nombre={perfil.nombre} />
    </>
  );
}
