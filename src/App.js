import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Dashboard from './Components/Dashboard/Dashboard';
import ContactUs from './Components/Contact/ContactUs';
import CreatePatient from './Components/Dashboard/CreatePatient/CreatePatient';
import ViewPatient from './Components/Dashboard/View Patient/ViewPatient';
import { GlobalProvider } from './Components/Dashboard/Context API/Context';
function App() {
  return (
    <div >
      <GlobalProvider></GlobalProvider>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Services" element={<Services />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route path="/Contact" element={<ContactUs />}></Route>
        <Route path="/CreatePatient" element={<CreatePatient />}></Route>
        <Route path="/ViewPatient" element={<ViewPatient />}></Route>
      </Routes>

    </div>
  );
}

export default App;
