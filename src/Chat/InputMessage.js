
import $ from 'jquery';
import jQuery from "jquery";
import bootstrap from 'bootstrap';
import BtnGrp from "./BtnGrp"
import { useState } from 'react'



function InputMessage({ addTextMessage }) {

  const [flag, setFlag] = useState(false)

  const addButtons = function () {
    setFlag(!flag);
  }

  function addBtn() {
    if (!flag) {
      return "";
    }
    return <BtnGrp />;
  }

  const send = function (event) {
    event.preventDefault()
    addTextMessage(document.getElementById('sms').value);
    document.getElementById('sms').value = '';
  }


  return (
    <div>
      <form onSubmit={e => send(e)}>
      <div id="inputMessage" className="input-group mb-3 flex-nowrap">
        <button type="button" onClick={addButtons} className="btn btn-secondary ">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet" />
          <i className="material-icons">attachment</i>
        </button>
        {addBtn()}
          <input type="text" className="form-control" id="sms" placeholder="Write here" aria-label="Write here" aria-describedby="basic-addon2"></input>
          <button className="btn btn-outline-secondary " type="button submit" id="button-addon2">Send</button>
      </div>
      </form>

    </div>

  );
}
export default InputMessage;

