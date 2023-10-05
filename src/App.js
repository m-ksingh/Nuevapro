import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Layout/LandingPage';
import Navbar from './Component/Navbar/Navbar';
import PercentageScrollBar from "./Component/PercentageScrollBar/PercentageScrollBar"
import GoToTopButton from "./Component/GoToTopButton/GoToTopButton"
import { Footer } from './Component/Footer/Footer';
function App() {
  return (
    <>
   <Router>
  <Navbar/>
  <PercentageScrollBar/>
  <GoToTopButton/>
      <Routes>
        
        <Route path="/" element={<LandingPage/>} />
        </Routes>
        <Footer/>
   </Router>
    
    </>
  );
}

export default App;
