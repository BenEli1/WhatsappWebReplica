import logo from './logo.svg';
import './App.css';
import Login from './loginPage/Login'
function App() {
  return (
    <div id="maincomponent" className="container">
      <div className="row">
        <div className="col-xl-3 col-lg-2 col-md-0 mainbox">
        </div>
        <div className="col-xl-6 col-lg-8 col-md-12 mainbox">
          <Login />
        </div>
        <div className="col-xl-3 col-lg-2 col-md-0 mainbox">
        </div>
      </div>
    </div>
  );
}

export default App;
