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

function App() {
  return (
    <>
    <Navbar/>
    <Slider/>
    <Advantages/>
    <BuyButton/>
    <Coverage/>
    <Benefits/>
    <Reviews/>
    <Claim/>
    <Questions/>
    <Footer/>
    </>
  );
}

export default App;
