import dataBaseMessages from "./dataBaseMessages.json"
import $ from 'jquery';
import jQuery from "jquery";
import bootstrap from 'bootstrap';
function InputMessage() {
  return (
    <div>
      <div id="buttonGroup">
      </div>
      <div id="inputMessage" className="input-group mb-3">
        <button type="button" onClick={addButtons} className="btn btn-secondary">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet" />
          <i class="material-icons">attachment</i>
        </button>
        <input type="text" className="form-control" placeholder="Write here" aria-label="Write here" aria-describedby="basic-addon2"></input>
        <button className="btn btn-outline-secondary" type="button">Send</button>
      </div>
    </div>
  );
}
var flag=false;
function addButtons() {
  if(flag===true){
    flag=false;
    $('div').remove("#buttonGroup div");
  }else{
  flag=true;
  $('div').remove("#buttonGroup div");
  $('#buttonGroup').append(buttonGroup());
  }

}
function buttonGroup() {
  return (
    "<div class=\"btn-group\" role=\"group\" aria-label=\"Basic outlined example\">" +
    "<button type=\"button\" class=\"btn btn-secondary\"><i class=\"material-icons\">add_photo_alternate</i></button>" +
    "<button type=\"button\" class=\"btn btn-secondary\"><i class=\"material-icons\">videocam</i></button>" +
    "<button type=\"button\" class=\"btn btn-secondary\"><i class=\"material-icons\">keyboard_voice</i></button>" +
    "</div>"
  );
}
export default InputMessage;
