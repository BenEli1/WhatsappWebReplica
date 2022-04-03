import logo from './logo.svg';
import './App.css';
import Login from './loginPage/Login'
function App() {
  return (
    <div id="maincomponent" className="container">
      <div className="row">
        <div className="col-xl-3 col-lg-2 col-sm-1 mainbox">
        </div>
        <div className="col-xl-6 col-lg-8 col-sm-10  mainbox">
          <Login />
        </div>
        <div className="col-xl-3 col-lg-2 col-sm-1 mainbox">
        </div>
      </div>
    </div>
  );
}

export default App;
