import { BrowserRouter, Link } from "react-router-dom";
import dataBase from "../Users/dataBaseObject";
import $ from "jquery";
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'

function Login({change}){

  let navigate = useNavigate();
  let isUSerExist;

  async function internSession(username){
    
    const res = await fetch('https://localhost:7227/api/contacts/Login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': '*'
      },
      mode: 'cors',
      body: JSON.stringify({username: username})
    })
  }

  /*const axios = require('axios').default;
  async function internSession(userName) {
    var response = await axios.post('https://localhost:7227/api/Users/Login', {
      "username" : userName
    },
     {
   headers: { 
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': '*'
      } });
  } */


  async function isuserExist(username, password){
    const res = await fetch("https://localhost:7227/api/Users", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Credentials' : "*"
    },
   // mode: "no-cors",
  });
  const data = await res.json();
  for(var i in data){
    if(data[i]["userName"] === username && data[i]["password"] === password){
      isUSerExist = 1;
      return 1;
    }
  }
  isUSerExist = 0;
  return 0;
  }

  function login(event) {
    event.preventDefault()
    $('div').remove("#userNotExist div");
    const form = document.getElementById("loginForm");
    //get the inputs from the form
    const userName = form.elements['username-login'].value;
    const password = form.elements['password-login'].value;

    isuserExist(userName, password).then(() => {
      if (isUSerExist == 0) {
        $('#userNotExist').append(
          '<div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">' +
          'Usermane or Password are incorrect.' +
          '<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\" aria-label=\"Close\"></button>' +
          '</div>'
        )
      } else {
          change(userName); 
          navigate(`/chat?userName=${userName}`);
      }
      }).then(() => 
      {
          if(isUSerExist == 1){
            internSession(userName);
          }
      }
      );
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