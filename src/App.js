import './App.css';
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

//algunos componentes
const Contenedor = styled.div`
display:flex;
align-items:center;
flex-direction:column;
margin-top:15rem;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family:Arial,Helvetica;
  color: #fff;
  margin-top:1rem;
  padding 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  cursor:pointer;
  transition:background-size .7s ease;
  
  :hover{
    background-size:400px;
    box-shadow: #fff 5px 5px 10px ; 

  }
`;

function App() {
  //State
  const [frase,setFrase] = useState({})

  useEffect( () => {consultarApi()}, [])
  const consultarApi = () =>{
    const api = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const nfrase = api.then( response => response.json());
   nfrase.then(data => {
    setFrase(data[0])     
   })
    

  }
  return (
      <Contenedor>
        <Frase 
        frase={frase}
        />
        <Boton
          onClick={consultarApi}
        >Obtener Frase</Boton>
      </Contenedor>
       
    
  );
}

export default App;
