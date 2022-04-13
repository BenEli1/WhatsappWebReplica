import dataBaseMessages from "./dataBaseMessages.json"
import $ from 'jquery';
import jQuery from "jquery";
import bootstrap from 'bootstrap';
import BtnGrp from "./BtnGrp"
import {useState} from 'react'



function InputMessage() {

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

  return (
    <div>
      <div id="inputMessage" className="input-group mb-3">
        <button type="button" onClick={addButtons} className="btn btn-secondary">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet" />
          <i class="material-icons">attachment</i>
        </button>
        {addBtn()}
        <input type="text" className="form-control" placeholder="Write here" aria-label="Write here" aria-describedby="basic-addon2"></input>
        <button className="btn btn-outline-secondary" type="button">Send</button>
      </div>
    </div>
  );
}

export default InputMessage;

