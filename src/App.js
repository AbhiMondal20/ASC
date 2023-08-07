import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './components/Index';
import About from './components/About';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={ <Index />} />
        <Route path='about' element={ <About /> } />
        <Route path='contact' element={ <Contact /> } />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
