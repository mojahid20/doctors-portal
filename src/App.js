
import './App.css';
import Navbar from './Pages/Shard/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login';
import Appoinetment from './Pages/Appointment/Appoinetment';

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointment" element={<Appoinetment />} />
      </Routes>
    </div>
  );
}

export default App;
