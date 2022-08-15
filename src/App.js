import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Home from "./Components/Home";
import About from "./Components/About";
import Gallary from "./Components/Gallary";
import Works from "./Components/Myworks";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Gallary />
      <Works />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
