import './App.css';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import logo from './imagenes/logo192.png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';


function App() {

  const [input, setInput] = useState('');

  const agregarInput = value => {
    setInput(input + value);
  }

  const calcularResultado = () => {
    setInput(evaluate(input))
  }



  return (
    <div className="App">
      <div className="logo-contenedor">
        <h1 className="nombre-logo" >Claudio</h1>
        <img
        src={logo}
        className="logo"
        alt="logo" />
      </div>
      <div className="contenedor-calculadora" >
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput('')} >
            Reset
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
