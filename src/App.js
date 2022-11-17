import MemeGenerator from './components/MemeGenerator/MemeGenerator';
import BtnSocial from './components/BtnSocial/BtnSocial.js';
import cardImage from './assets/cardImage.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <MemeGenerator />
      <BtnSocial url="https://mgm.netlify.app" cardImage={cardImage} />
    </div>
  );
}

export default App;
