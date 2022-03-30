import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('button')

  const onClickValor = (e) => {
    let sumatoria = (e.target.innerHTML)
    let sumaTotal = sumatoria.split(' + ')
    let suma = 0;
    for(let i = 0; i < sumaTotal.length; i++){
      console.log(sumaTotal[i])
      suma += parseInt(sumaTotal[i]);
    }
    

    if(suma === 100){
      setColor('button-red')
      }
  }





  return (
    <div className="App">
      <div className='container-img' >
        <img className='img' src='assets/img/precios.png' alt='precios'/>
      </div>
      <div>
        <p className='title'>
          Si tienes un billete de 💵100 busca 7 opciones de compras que no den
          vuelto{" "}
        </p>
        <div className='container-button'>
          <button
           className={color}
           onClick={onClickValor}>
            70
             + 
            15
             + 
            05
             + 
            10
          </button>

          <button
           className={color}
           onClick={onClickValor}>
            10
             +
            70
             +
            20
          </button>

          <button 
          className={color}
          onClick={onClickValor}>
            10
             +
            30
             +
            05
          </button>

          <button 
          className={color}
          onClick={onClickValor}>
            95
             +
            05
          </button>

          <button 
          className={color}
          onClick={onClickValor}>
            50
             +
            30
             +
            20
          </button>

          <button
           className={color}
           onClick={onClickValor}>
            15
             +
            50
             +
            05
             +
            30
          </button>

          <button 
          className={color}
          onClick={onClickValor}>
            10
             +
            50
             +
            15
             +
            05
          </button>

          <button 
          className={color}
          onClick={onClickValor}>
            20
             +
            50
             +
            15
             +
            05
             +
            10
          </button>

          <button 
          className={color}
          onClick={onClickValor}>
            70
             +
            30
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
