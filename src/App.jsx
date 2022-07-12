import { useState, useEffect } from 'react';
import { Heading, Box, Image, Text, Spacer, Tag } from '@chakra-ui/react';


import logo from './assets/logo.png'
import * as API from './services/launches';


/*
En el ciclo de vida del componente primero se ejecuta el useEffect, va a llamar a la API, va a setear el estado, y cuando
launches ya tenga algo, va a pintar el html
*/ 
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


  //El código js dentro de jsx se mete por medio de llaves
  /*recorremos el array y por cada elemento decimos que nos devuelva elementos html, por ejemplo en este
  caso un li, es importante ponerle un atributo key al listado, para que el valor de key sea único por 
  cada elemento*/ 
  return (
   <>
   <Image m = {4} p = {4} src={logo} width={300}/>
    <Heading as= "h1" size = "lg">
      SpaceX Launches
    </Heading>
    <section>
    
      {launches.map((launch) =>( 
        <Box 
          key={launch.flight_number}
          bg = "gray.100"
          p = {4}
          m = {4}
          borderRadius = "lg"
          
        >
          <Box display="flex">
            <Text>
              Mission <strong>{launch.mission_name}</strong>({launch.launch_year})
            </Text>
            <Spacer></Spacer>
            <Tag></Tag>
          </Box>
          {launch.mission_name} ({launch.launch_year})
        </Box>
      ))}
    </section>
   </>
  )
}


