
import $ from 'jquery';
import jQuery from "jquery";
import bootstrap from 'bootstrap';
function InputMessage(){
    return(
<div>
<div id="buttonGroup">
</div>
<div id="inputMessage" className="input-group mb-3">
<button type="button" onClick={addButtons}  className="btn btn-secondary">
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
<i class="material-icons">attachment</i>
</button>
  <input type="text" className="form-control" placeholder="Write here" aria-label="Write here" aria-describedby="basic-addon2"></input>
          <button className="btn btn-outline-secondary" type="button">Send</button>
      </div>
      </div>
    );
}
function addButtons(){
  $('#buttonGroup').append(buttonGroup());

}
function buttonGroup() {
  return (
    "<div class=\"btn-group\" role=\"group\" aria-label=\"Basic outlined example\">" +
    "<button type=\"button\" class=\"btn btn-outline-primary\">Left</button>" +
    "<button type=\"button\" class=\"btn btn-outline-primary\">Middle</button>" +
    "<button type=\"button\" class=\"btn btn-outline-primary\">Right</button>" +
  "</div>"
  );
}
export default InputMessage;

