import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Advantages from './components/Advantages';
import BuyButton from './components/BuyButton';
import Coverage from './components/Coverage';
import Benefits from './components/Benefits'
import Reviews from './components/Reviews'
import Claim from './components/Claim'
import Questions from './components/Questions';
import Footer from './components/Footer';
import Plans from './components/Plans';
import ProposerDetails from './components/ProposerDetails';
import MedicalQuestions from './components/MedicalQuestions';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"

function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={[<Slider />,<Advantages />,<BuyButton />,<Coverage />,<Benefits />,<Reviews />,<Claim />,<Questions />]}/>
          <Route path='/plans' element={<Plans/>}/>
          <Route path='/ProposerDetails' element={<ProposerDetails/>}/>
          <Route path='/Questions' element={<MedicalQuestions/>}/>
        </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
