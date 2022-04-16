import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import { BrowserRouter, Link, Route } from "react-router-dom";
import $ from "jquery";
import useState from 'react';
import DataBase from '../Users/DataBase';
import User from '../Users/User';
import dataBase from "../Users/dataBaseObject";
import {useNavigate} from 'react-router-dom'
import dataBaseMessages from "../Chat/dataBaseMessages.json"
function Register(){

    var navigate = useNavigate();
    function signUp(event){
        //get the form
        $('div').remove("#invalidInput div");
        const form = document.getElementById("registerForm");
        //get the inputs from the form
        const userName = form.elements['username-register'].value;
        let nickname = form.elements['nickname-register'].value;
        let password = form.elements['password'].value;
        let confirmPassword = form.elements['confirm_password'].value
        let image = form.elements['imageFromUser'].value
        let image2= form.elements['imageFromUser'].files[0]
        var url2 = URL.createObjectURL(image2);

        //check validation
        if(!isUserNameValid(userName)){
            $('#invalidInput').append(invalidInput("Username", "The username must be at least 3 characters long"));
            event.preventDefault();
            return;
        }
        if(!isUserNameExist(userName)){
            $('#invalidInput').append(invalidInput("Username", "Username already in use"));
            event.preventDefault();
            return;
        }
        if(!isNickNameExist(nickname)){
            $('#invalidInput').append(invalidInput("Nickname", "Nickname already in use"));
            event.preventDefault();
            return;
        }
        if(!isPasswordValid(password)){
            event.preventDefault();
            $('#invalidInput').append(invalidInput("Password","The password should be 6-20 characters long and must contain numbers and capital letters"));
            return;
        }
    
        if(!isConfirmPasswordValid(password, confirmPassword)){
            event.preventDefault();
            $('#invalidInput').append(invalidInput("Password","The passwords does not match"));
            return;
        }
    
        if(!isImageValid(image)){
            event.preventDefault();
            $('#invalidInput').append(invalidInput("Photo", "The file inserted is not an image"));
            return;
        }
        //if everything OK submit the function
       // ImageThumb(image);

        dataBase.add(userName, password, nickname, url2);
        dataBaseMessages.dataBaseMessages.push({username : userName, "data" : []})
        //alert(JSON.stringify(dataBaseMessages.dataBaseMessages))
        event.preventDefault();
        navigate("/");
    }

    return(
        <div>
            <span id="invalidInput"></span>
            <form onSubmit={e => signUp(e)} id="registerForm">
                <div className="input-group flex-nowrap">
                    <span className="input-group-text">Username</span>
                    <input type="text" id="username-register" required className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"></input>
                </div>

                <div className="input-group flex-nowrap">
                    <span className="input-group-text">Nickname</span>
                    <input type="text" required id="nickname-register" className="form-control" placeholder="Nickname" aria-label="Nickname" aria-describedby="addon-wrapping"></input>
                </div>

                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="password-register">Password</span>
                    <input name="password" id="password" type="password" onKeyUp={e => matchPasswords(e)} required className="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping"></input>

                </div>

                <div className="input-group flex-nowrap">
                    <span className="input-group-text">Confirm Password</span>
                    <input type="password" name="confirm_password" id="confirm_password" onKeyUp={e => matchPasswords(e)} required className="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping"></input>
                    <span id='message' className="input-group-text"></span>
                </div>


                <div className="input-group flex-nowrap">
                    <div id="selectImage" className="form-label form-control bg-light">Select Image</div>
                </div>
                <div id="fileLoad" className="input-group flex-nowrap">
                    <input type="file" required id="imageFromUser" className="form-control" accept="image/*" placeholder="Image" aria-label="Image" aria-describedby="addon-wrapping" ></input>
                </div>
                <div id="liveAlertPlaceholder"></div>
                <div>
                    <button type="submit" id="sign" className="btn btn-light input-group border-secondary">Sign Up</button>
                </div>
            </form>
            <div>
                <Link to="/" type="button" id="newaccount-register" className="btn btn-light input-group">Already have an account?</Link>
            </div>
        </div>

    );
}
function invalidInput(type, massage) {
    return (
        "<div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\">"
        + "<strong> Invalid " + type + "! </strong>" + massage +
        "<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\" aria-label=\"Close\"></button>" +
        "</div>"
    );
}

function matchPasswords(event) {
    if (($('#password').val() === "") || ($('#confirm_password').val() === ""))
        $('#message').html('');
    else if ($('#password').val() === $('#confirm_password').val())
        $('#message').html('Matching').css('color', 'green');
    else
        $('#message').html('Not Matching').css('color', 'red');

};



function isPasswordValid(password) {
    /*pasword must contain ar least one number and one big character,
    and the length can be between 6-20 characters*/
    var regularExpression = /^(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,20}$/
    return regularExpression.test(password)
}

function isConfirmPasswordValid(password, confirmPassword) {
    return password === confirmPassword;
}

function isUserNameValid(userName) {
    return userName.length >= 3;

}
function isUserNameExist(userName) {
    for (let u in dataBase.users) {
        if (userName === dataBase.users[u].userName) {
            return false;
        }
    }
    return true;

}
function isNickNameExist(nickName) {
    for (let u in dataBase.users) {
        if (nickName === dataBase.users[u].nickName) {
            return false;
        }
    }
    return true;

}

function isImageValid(file) {
    return file && file.toLowerCase().match(/\.(jpg|jpeg|png|gif)$/);
}

export default Register;