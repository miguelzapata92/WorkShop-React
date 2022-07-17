import {  Image } from '@chakra-ui/react';
import { Routes, Route } from "react-router-dom";
import logo from './assets/logo.png'
import { LaunchList } from './components/LaunchList';
import {LaunchDetails} from './components/LaunchDetails'
import { RocketDetails } from './components/RocketDetails';
 
/*
En el ciclo de vida del componente primero se ejecuta el useEffect, va a llamar a la API, va a setear el estado, y cuando
launches ya tenga algo, va a pintar el html
*/ 
export function App() { 

  return (
   <>
   <Image m = {4} p = {4} src={logo} width={300}/>
   <Routes>
      <Route path="/" element={<LaunchList/>} />
      <Route path="launch/:launchId" element={<LaunchDetails/>}/>
      <Route path="rockets/:rocketId" element={<RocketDetails/>}/>
   </Routes>
   </>
  );
}


