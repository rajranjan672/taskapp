import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import About from './Components/Body/About';
import Home from './Components/Body/Home';
import DrawerAppBar from './Components/Header/Header';

function App() {
  return (
    <>
    <BrowserRouter>
   <DrawerAppBar />

   <Routes>
       <Route path="/" element={<Navigate to="/home"/>} />
        <Route path="/home" defaults element={<Home />} />
        <Route path="/about" defaults element={<About />} />


      
      </Routes>
   {/* <hr /> */}
   <Footer />
   </BrowserRouter>
   </>
  );
}

export default App;
