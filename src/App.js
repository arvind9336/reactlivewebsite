import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import Contact from './Contact';
import About from './About';
import NavBar from "./NavBar";
import Footer from "./Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/about' element={<About />}/>
          <Route exact path='/contact' element={<Contact />}/>
          <Route exact path='/service' element={<Services />}/>
          
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
