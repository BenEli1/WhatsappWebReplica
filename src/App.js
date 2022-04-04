import './App.css';
import HomePage from './loginPage/HomePage';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-3 col-lg-2 col-sm-1 mainbox">
        </div>
        <div className="col-xl-6 col-lg-8 col-sm-10  mainbox">
          <HomePage />
        </div>
        <div className="col-xl-3 col-lg-2 col-sm-1 mainbox">
        </div>
      </div>
    </div>
  );
}

export default App;
