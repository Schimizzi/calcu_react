import './App.css';
import logo from './imagenes/logo192.png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';

function App() {
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
        <Pantalla />
        <div className="fila">
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
        <div className="fila">
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>
        </div>
        <div className="fila">
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>*</Boton>
        </div>
        <div className="fila">
          <Boton>=</Boton>
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>/</Boton>
        </div>
        <div className="fila">
          <Boton>Reset</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;