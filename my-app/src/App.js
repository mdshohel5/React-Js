
import './App.css';
import Nav from './components/Navbar/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';
import Contact from './pages/Contact';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      {/* <Home></Home>
      <About></About>
      <Register></Register>
      <Contact></Contact> */}
     
      <BrowserRouter>
      <Nav></Nav>
       <Routes>
           <Route path='/' element={<Home></Home>}></Route>
           <Route path='/about' element={<About></About>}></Route>
           <Route path='/register' element={<Register></Register>}></Route>
           <Route path='/contact' element={<Contact></Contact>}></Route>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
