import { createRoot } from "react-dom/client";
import { Bienvenido, Contenedor, Contador} from "./App.jsx";
import "./index.css";

let lenguaje = parseInt(
  prompt(
    "Seleccione el codigo del lenjuaje (1-español, 2-ingles, 3-frances, 4-chino, 5-ruso, 6-japones, 7-portugues, 8-Italiano, 9-tailandes, 10-arabe, 11-hebreo):"
  )
);
const mensajeTraducido = (lenguaje) => {
  switch (lenguaje) {
    case 1:
      return "Bienvenido de vuelta lindo ";
    case 2:
      return "Welcome back, handsome ";
    case 3:
      return "Bienvenue à nouveau, beau ";
    case 4:
      return "欢迎回来, 帅哥 ";
    case 5:
      return "Свозвращением, красавчик ";
    case 6:
      return "おかえりなさい、ハンサム ";
    case 7:
      return "Bem-vindo de volta ";
    case 8:
      return "Bentornato, bello ";
    case 9:
      return "ยินดีต้อนรับกลับ, หล่อ ";
    case 10:
      return "أهلاً بعودتك أيها الوسيم ";
    case 11:
      return "ברוך שובך, יפה תואר ";
    default:
      return "Bienvenido de vuelta lindo ";
  }
};
let mensaje = mensajeTraducido(lenguaje);
let nombre = prompt("Por favor, ingresa tu nombre:");
let apellido = prompt("Por favor, ingresa tu apellido:");
let message = (
  <Contenedor>
    <Bienvenido mensaje={mensaje} name={nombre} lastname={apellido} />
    <Contador/>
  </Contenedor>
  
);
const root = createRoot(document.getElementById("root"));

root.render(message);
