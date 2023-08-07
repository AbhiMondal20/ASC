import logo from './logo.svg';
import './App.css';
import Index from './components/Index';
import About from './components/About';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='about' element={ <About /> } />
      </Routes>
    </div>
  );
}

export default App;
