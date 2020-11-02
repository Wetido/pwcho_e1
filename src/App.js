import TClock from './components/TClock';
import  './styles/app.css';

function App() {
  return (
    <div className="flex-box">
      <div className="clock">
        <h3>Czas w New York</h3> 
        <TClock gtm={-5}></TClock>
      </div>

      <div className="clock">
        <h3>Czas w Lublin</h3>
        <TClock gtm={1}></TClock>
      </div>

      <div className="clock">
          <h3>Czas w Sydney</h3>
          <TClock gtm={11}></TClock>
      </div>
    </div>
  );
}

export default App;
