import './App.css';
import Login from './loginPage/Login'
import Register from './loginPage/Register';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-3 col-lg-2 col-sm-1 mainbox">
        </div>
        <div className="col-xl-6 col-lg-8 col-sm-10  mainbox">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />}>
              </Route>
              <Route path="/register" element={<Register />}>
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
        <div className="col-xl-3 col-lg-2 col-sm-1 mainbox">
        </div>
      </div>
    </div>
  );
}

export default App;
