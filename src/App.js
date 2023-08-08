import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './components/Index';
import About from './components/About';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom';
import Appointment from './components/Appointment';
import Slider from './components/Slider';

// #003515 text color
// Background color #F8FDFF
// Hover color #caebf3

function App() {
const home = "Home";
const about = "About";
const appointment = "Appointment";
const service = "Service";
const provider = "Providers";
const patients = "Patients";
const career = "Careers";
const contact = "Contact Us";

  return (
    <div>
      <Header home={home} about={about} appointment={appointment} service={service} provider={provider} patients= {patients} contact={contact} career={career}/>
      <Routes>
        <Route path='/' element={ <Index  />} />
        <Route path='about' element={ <About /> } />
        <Route path='contact' element={ <Contact /> } />
        <Route path='appointment' element={ <Appointment /> } />
      </Routes>
      <Footer home={home} about={about} appointment={appointment} service={service} provider={provider} patients= {patients} contact={contact} career={career} />
    </div>
  );
}

export default App;
