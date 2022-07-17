import { useEffect, useState } from "react";
import { Heading } from '@chakra-ui/react';
import { LaunchItem } from './LaunchItem';
import * as API from '../services/launches';

export function LaunchList(){
    //El use state devuelve un array con el estado en si, y el set es una función que permite cambiar ese estado
    const [launches, setLaunches] = useState([]);

    //El use effect el argumento que recibe es una arrow function

    useEffect(() => {
        //cuando acaba la promesa vamos a obtener los datos y se los pasamos al estado
        API.getAllLaunches().then(setLaunches).catch(console.log);
        //así como recibe una arrow function de primer argumento, el segundo es un array de dependencias
        //Si el array está vacío, el use effect se va a ejecutar cuando se crea el componente
        //si en el array ponemos otra dependencia, llama a la funcion cada vez que se actualice la variable
    },[]);


    //El código js dentro de jsx se mete por medio de llaves
    /*recorremos el array y por cada elemento decimos que nos devuelva elementos html, por ejemplo en este
    caso un li, es importante ponerle un atributo key al listado, para que el valor de key sea único por 
    cada elemento*/ 
    return(
        <>
        <Heading as= "h1" size = "lg">
            SpaceX Launches
        </Heading>
        <section>
            {launches.map((launch) =>( 
                <LaunchItem key= {launch.flight_number}{...launch}/>
            ))}
        </section>
        </>

    )
}
