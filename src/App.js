import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <h1>Formulario</h1>
      <div className='content'>

      <label>Dolares</label>
      <input type="text" name="dolares" ></input><br></br><br></br>
      <input type = "submit" value="Convertir"></input><br></br><br></br>

      <label>Bitcoin</label>
      <input type="text" name="bitcoin" ></input><br></br><br></br>

      
      <label>Colones</label>
      <input type="text" name="colones"  ></input>
      </div>


      
    </div>
   
    
  );
}

export default App;
