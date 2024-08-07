import './App.css';
import Home from "../src/paginas/home/Home"
import NavBar from './components/navBar/navBar';
import Footer from './components/footer/footer';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './paginas/login/Login';
function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/home' element={<Home />}></Route>
          </Routes>
        </div>
          <Footer />
    </BrowserRouter>
    </>
  );
}
export default App;