function Login(){
    return(
    <div>    
    <div class="input-group flex-nowrap">
    <span class="input-group-text" id="addon-wrapping">Username</span>
    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"></input>
    </div>
    <div class="input-group flex-nowrap">
    <span class="input-group-text" id="addon-wrapping">Password</span>
    <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping"></input>
  </div>
  <div>
  <button type="button" class="btn btn-light input-group">Login</button>
  </div>
  </div>
);
}
export default Login;