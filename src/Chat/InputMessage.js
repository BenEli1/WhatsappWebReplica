
function InputMessage(){
    return(
      <div id="inputMessage" className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Write here" aria-label="Write here" aria-describedby="basic-addon2"></input>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">Send</button>
        </div>
      </div>
    );
}

export default InputMessage;

