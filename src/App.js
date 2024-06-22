import './App.css';
import Card from './compontes/Card';
import Carosal from './compontes/Carosal';
import Footer from './compontes/Footer';
import Header from './compontes/Header';
import ServicesPage from './compontes/Service';
import FeatureProductsSlider from './compontes/Slider';
import Testimonial from './compontes/Testomonial';

function App() {
  return (
    <div className="App">
      <Header />
      <Carosal />
      <Card />
      <ServicesPage />
      <FeatureProductsSlider />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
