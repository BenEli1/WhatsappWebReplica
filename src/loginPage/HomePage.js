import Login from './Login';
import Register from './Register';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function HomePage(){
    return(
      
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-2 col-sm-1 mainbox">
          </div>
          <div className="col-xl-6 col-lg-8 col-sm-10  mainbox">
            <Routes>
              <Route path="/" element={<Login />}>
              </Route>
              <Route path="/register" element={<Register />}>
              </Route>
            </Routes>
          </div>
          <div className="col-xl-3 col-lg-2 col-sm-1 mainbox">
          </div>
        </div>
      </div>
    );
}

export default HomePage;