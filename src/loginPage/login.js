import { BrowserRouter, Link } from "react-router-dom";

function Login(){
    return(
      <div>
        <form>
          <div className="input-group flex-nowrap">
            <span className="input-group-text" name="userNameLog" id="username-login">Username</span>
            <input type="text" required className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"></input>
          </div>
          <div className="input-group flex-nowrap">
            <span className="input-group-text" id="password-login">Password</span>
            <input type="password" required className="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping"></input>
          </div>
          <div>
            <button type="button submit" id="submitLogIn" className="btn btn-light input-group border-secondary">Login</button>
          </div>
        </form>
        <Link to='/register' type="button" href="/register" id="newaccount" className="btn btn-light input-group">Create a new account</Link>
      </div>
);
}
export default Login;