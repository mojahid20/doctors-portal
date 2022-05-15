
import './App.css';
import Navbar from './Pages/Shard/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login';
import Appoinetment from './Pages/Appointment/Appoinetment';
import Register from './Pages/Register';
import RequireAuth from './Pages/RequireAuth';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Dashbord from './Pages/Dashbord/Dashbord';
import Myappiontment from './Pages/Dashbord/Myappiontment';
import Myreview from './Pages/Dashbord/Myreview';
import Myservice from './Pages/Dashbord/Myservice';


function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/dashbord' element={
          <RequireAuth>
          <Dashbord></Dashbord>
        </RequireAuth>
        }>
          <Route index of element={<Myappiontment />}></Route>
          <Route path='review' element={<Myreview />}></Route>
          <Route path='services' element={<Myservice />}></Route>
        </Route>
      
        <Route path="/login" element={<Login />} />
        <Route path="/appointment" element={
          <RequireAuth>
            <Appoinetment></Appoinetment>
          </RequireAuth>
        } />
        
    
        <Route path="/register" element={<Register />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
