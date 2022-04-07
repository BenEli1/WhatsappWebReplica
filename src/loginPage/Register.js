import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import { BrowserRouter, Link } from "react-router-dom";
import $ from "jquery";
function Register(){
    return(
        <div>
            <form onSubmit={signUp} id="registerForm">
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
                    <input name="password" id="password" type="password"  required className="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping"></input>
                    
                </div>

                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="password-again-register">Password Verification</span>
                    <input type="password" name="confirm_password" id="confirm_password" required className="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping"></input>
                </div>
                <span id='message'>
                    </span>
                <div className="input-group flex-nowrap">
                    <div id="selectImage" className="form-label form-control bg-light">Select Image</div>
                </div>
                <div id="fileLoad" className="input-group flex-nowrap">
                    <input type="file" required id="imageFromUser" className="form-control" accept="image/*" placeholder="Image" aria-label="Image" aria-describedby="addon-wrapping"></input>
                </div>

                <div>
                    <button type="submit"  id="sign" className="btn btn-light input-group border-secondary">Sign Up</button>
                </div>
            </form>
            <div>
                <Link to="/" type="button" id="newaccount-register" className="btn btn-light input-group">Already have an account?</Link>
            </div>
        </div>
    );
}

$('#password, #confirm_password').on('keyup', function () {

    if ($('#password').val() == $('#confirm_password').val()) {
      $('#message').html('Matching').css('color', 'green');
    } else 
      $('#message').html('Not Matching').css('color', 'red');
  });

/*
function previewImage(){
    console.log("oved");
    alert("hello");
    var file = document.getElementById("file").files;
    if(file.length>0){
        var fileReader= new fileReader();
        fileReader.onLoad = function(event){
            document.getElementById("imageFromUser").setAttribute("src",event.target.result());
        };
fileReader.readAsDataURL(file[0]);
    }
    */

//the function is called when the user submit the form
function signUp(event){
    //get the form
    const form = document.getElementById("registerForm");
    //get the inputs from the form
    var userName = form.elements['username-register'].value;
    var nickname = form.elements['nickname-register'].value;
    var password = form.elements['password'].value;
    var confirmPassword = form.elements['confirm_password'].value
    var image = form.elements['imageFromUser']

    //check validation
    if(!isUserNameValid(userName)){
        event.preventDefault();
        return;
    }

    if(!isPasswordValid(password)){
        event.preventDefault();
        return;
    }

    if(!isConfirmPasswordValid(password, confirmPassword)){
        event.preventDefault();
        return;
    }

    if(!isImageValid(image)){
        event.preventDefault();
        return;
    }
    //if everything OK submit the function
    form.submit()
}

function isPasswordValid(password){
    /*pasword must contain ar least one number and one big character,
    and the length can be between 6-20 characters*/
    var regularExpression = /^(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,20}$/
    return regularExpression.test(password)
}

function isConfirmPasswordValid(password, confirmPassword){
    return password === confirmPassword;
}

function isUserNameValid(userName){
    return userName.length > 0;

}

function isImageValid(image){
    return true;
}

export default Register;