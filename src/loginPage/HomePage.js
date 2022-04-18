import Login from './Login';
import Register from './Register';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function HomePage({change}){
    return(
      
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-2 col-sm-1 mainbox">
          </div>
          <div className="col-xl-6 col-lg-8 col-sm-10  mainbox">
            <Routes>
              <Route path="/" element={<Login change={change} />}>
              </Route>
              <Route path="/register" element={<Register change={change} />}>
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