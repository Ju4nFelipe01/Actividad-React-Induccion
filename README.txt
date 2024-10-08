¿Cuál es la diferencia entre un componente UI y un componente funcional en React?

La principal diferencia entre un componente UI (User Interface) y un componente funcional en React es su propósito y funcionalidad. Un componente UI se enfoca en la presentación y el diseño de la interfaz de usuario, mostrando elementos visuales estáticos o simples, mientras que un componente funcional (o componente basado en funciones) maneja tanto la lógica como la presentación. Este último puede recibir props o argumentos, y en función de estos y la lógica interna, puede renderizar contenido dinámico. Los componentes funcionales también pueden hacer uso de hooks para manejar estado o efectos secundarios, lo que les permite ser más interactivos

¿Qué son las props en React y cuál es su propósito principal?

Cuando React ve un elemento representando un componente definido por el usuario, pasa atributos JSX e hijos a este componente como un solo objeto. Llamamos a este objeto “props”.
De modo que una buena manera de definir estos, es como una manera de llamar a los componentes de función, y pasarle a modo de objeto los datos que requiere para poder proyectarlos en el componente en sí.
Al ser una manera de llamar y ejecutar un componente funcional, el propósito principal de las props es permitir que los componentes reciban y utilicen datos externos, y así poder proyectar o renderizar contenido dinámico en la interfaz según los valores proporcionados. A diferencia del estado (state), las props son inmutables dentro del componente que las recibe..

¿Qué son los children props en React y por qué no se recomienda su uso excesivo?

Son un prop especial que se utiliza para pasar contenido anidado a un componente.  Sirve para que un componente funcione como un contenedor que puede envolver o incluir otros elementos o componentes dentro de su estructura. Al usar props.children, el componente renderiza lo que se le haya pasado como contenido interno.
Algunas de las razones por las cuales no se recomienda su uso exesivo son:
•	Complejidad en la lectura del código: Si abusas de children, tu código puede volverse difícil de seguir, ya que el flujo de datos no es tan explícito.
•	Rendimiento: Dependiendo de cómo estructures la anidación, puede haber un impacto en el rendimiento si se renderizan demasiados elementos anidados innecesariamente.

¿Qué es useState en React y para qué se utiliza principalmente?
Un useState es un hook(un hook es una función especial que permite conectarse a características de React), este permite agregar un estado a un componente de función; donde el estado en si era una característica inicialmente únicamente agregable a los componentes de clase. Permite preservar en una variable valores en las llamadas de función, incluso después de haberse ejecutado la función previamente. (Este recibe un parámetro que es el estado inicial del mismo, y devuelve el estado actual, y una función que es la encargada de actualizar dicho estado actual)
Este al permitir mantener los datos de un componente de forma dinámica, de modo que se actualiza mediante e usuario va interactuando con el componente; este se utiliza para reflejar nuevos cambios en la interfaz del usuario; logrando un manejo dinámico de datos, actualizar la interfaz del estado y hacer los componentes aún más dinámicos.
