import "./App.css";
import { useState } from "react";

/*
se crea el componente en el cual estara contenido 
el contenedor del mensage con nuestro saludo
*/
export function Bienvenido(props) {
  return (
    <div className="msg">
      <h1>
        {props.mensaje}{" "}
        <h1 className="name">
          {props.name} {props.lastname}
        </h1>
      </h1>{" "}
    </div>
  );
}

/*
se crea el componente del borde y se le pasa 
el parametro de props.children para poder renderizar
el mensaje con el contenedor
*/
export function Contenedor(props) {
  return <div className="contenedor">{props.children}</div>;
}

export function Contador() {
  const [contador, setContador] = useState(0);

  function incrementar() {
    setContador(contador + 1);
  }

  return (
    <div className="contador">
      <h1>Contador: {contador}</h1>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}
