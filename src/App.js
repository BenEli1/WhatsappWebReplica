import logo from './logo.svg';
import './App.css';
import Login from './loginPage/Login'
function App() {
  return (<div class="container">
  <div class="row">
  <div class="col-3" className="mainbox" >
    </div>
    <div class="col-6 col-ls-12" className="mainbox">
      <Login/>
    </div>
    <div class="col-3" className="mainbox">
    </div>
  </div>
</div>);
}

export default App;
