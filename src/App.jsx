import { useState, useEffect } from 'react';
import * as API from './services/launches';

export function App() { 
   //El use state devuelve un array con el estado en si, y el set es una función que permite cambiar ese estado
  const [launches, setLaunches] = useState([]);

  //El use effect el argumento que recibe es una arrow function

  useEffect(() => {
    //cuando acaba la promesa vamos a obtener los datos y se los pasamos al estado
    API.getAllLaunches().then(setLaunches);
    //así como recibe una arrow function de primer argumento, el segundo es un array de dependencias
    //Si el array está vacío, el use effect se va a ejecutar cuando se crea el componente
    //si en el array ponemos otra dependencia, llama a la funcion cada vez que se actualice la variable
  },[]);

  return (
   <div>Hola Mundo</div>
  )
}


