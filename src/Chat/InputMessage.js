
import $ from 'jquery';
import jQuery from "jquery";
import bootstrap from 'bootstrap';
import BtnGrp from "./BtnGrp"
import {useState} from 'react'



function InputMessage({addTextMessage}) {

  const [flag, setFlag] = useState(false)

  const addButtons = function(){
    setFlag(!flag);
  }

  function addBtn(){
    if(!flag){
      return "";
    }
    return <BtnGrp />;
  }

  const send = function(){
    addTextMessage(document.getElementById('sms').value); 
    document.getElementById('sms').value = ''; 
  }
  return (
    <div>
      <div id="inputMessage" className="input-group mb-3">
        <button type="button" onClick={addButtons} className="btn btn-secondary">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet" />
          <i className="material-icons">attachment</i>
        </button>
        {addBtn()}
        <input type="text" className="form-control" id="sms" placeholder="Write here" aria-label="Write here" aria-describedby="basic-addon2"></input>
        <button className="btn btn-outline-secondary" onClick={send} type="button" id="sendBtn">Send</button>
      </div>
    </div>
  );
}

$(document).on("keypress", "input", function(e){
  if(e.which == 13){
    var inputVal = $(this).val();
    var change = document.getElementById("sendBtn");
    change=!change;
  }
});

export default InputMessage;

