import { BrowserRouter, Link } from "react-router-dom";

function Register(){
    return(
        <div>
            <form>
                <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="username-register">Username</span>
                    <input type="text" required class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"></input>
                </div>

                <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="nickname-register">Nickname</span>
                    <input type="text" required class="form-control" placeholder="Nickname" aria-label="Nickname" aria-describedby="addon-wrapping"></input>
                </div>

                <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="password-register">Password</span>
                    <input type="password" required class="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping"></input>
                </div>

                <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="password-again-register">Password Verification</span>
                    <input type="password" required class="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping"></input>
                </div>

                <div class="input-group flex-nowrap">
                    <div id="selectImage" for="imageFromUser" class="form-label form-control bg-light">Select Image</div>
                </div>
                <div id="fileLoad" class="input-group flex-nowrap">
                    <input type="file" required id="imageFromUser" class="form-control" accept="image/*" placeholder="Image" aria-label="Image" aria-describedby="addon-wrapping"></input>
                </div>

                <div>
                    <button type="button submit" class="btn btn-light input-group border-secondary">Sign Up</button>
                </div>
            </form>
            <div>
                <Link to="/" type="button" id="newaccount-register" class="btn btn-light input-group">Already have an account?</Link>
            </div>
        </div>
    );
}

export default Register;