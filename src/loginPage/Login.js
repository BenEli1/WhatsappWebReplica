import { BrowserRouter, Link } from "react-router-dom";
import dataBase from "../Users/dataBaseObject";
import $ from "jquery";
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'

function Login({change}){

  async function isUserExist(username, password){

        const res = await fetch("https://localhost:7227/api/Users", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Credentials' : "*"
        },
        mode: "no-cors",
      });

      alert(res);
      var user = res.filter(x => x.userName == username && x.password == password);
      return user != {};
  }

  let navigate = useNavigate();

  function login(event){
    event.preventDefault()
    $('div').remove("#userNotExist div");
    const form = document.getElementById("loginForm");
    //get the inputs from the form
    const userName = form.elements['username-login'].value;
    const password = form.elements['password-login'].value;
    
    if(!(isUserExist(userName, password))){
      event.preventDefault();
      $('#userNotExist').append(
        '<div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">' +
        'Usermane or Password are incorrect.' +
        '<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\" aria-label=\"Close\"></button>' +
      '</div>'
      )
      return;
    }
    change(userName);
    navigate(`/chat?userName=${userName}`);  
  }


    return(
      <div>
        <span id="userNotExist"></span>
        <form onSubmit={e => login(e)} action="/chat" id="loginForm">
          <div className="input-group flex-nowrap">
            <span className="input-group-text" name="userNameLog">Username</span>
            <input type="text" id="username-login" required className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"></input>
          </div>
          <div className="input-group flex-nowrap">
            <span className="input-group-text">Password</span>
            <input type="password" id="password-login" required className="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping"></input>
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