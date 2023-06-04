import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Login from './components/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';
import Private from './components/Private/Private';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          
          <Route path='/about' element={
            <Private>
              <About></About>
            </Private> }>
            </Route>
         
          
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
