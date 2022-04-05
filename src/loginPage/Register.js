import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import { BrowserRouter, Link } from "react-router-dom";
import $ from "jquery";
function Register(){
    return(
        <div>
            <form onSubmit={previewImage}>
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="username-register">Username</span>
                    <input type="text" required className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"></input>
                </div>

                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="nickname-register">Nickname</span>
                    <input type="text" required className="form-control" placeholder="Nickname" aria-label="Nickname" aria-describedby="addon-wrapping"></input>
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
function previewImage(){
  /*  console.log("oved");
    alert("hello");
    var file = document.getElementById("file").files;
    if(file.length>0){
        var fileReader= new fileReader();
        fileReader.onLoad = function(event){
            document.getElementById("imageFromUser").setAttribute("src",event.target.result());
        };
fileReader.readAsDataURL(file[0]);
    }*/
}

function checkPassword(){

}
function checkUsername(){

}
export default Register;