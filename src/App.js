import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import Addbooks from './components/Addbooks';
import Search from './components/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewbooks from './components/Viewbooks';
function App() {

  return (
    <div >
  <BrowserRouter>
  <Routes>
  <Route path="/" exact element={<Addbooks/>}></Route>
  <Route path="/search" exact element={<Search/>}></Route>
  <Route path="/view" exact element={<Viewbooks/>}></Route>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;