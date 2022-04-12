import React from "react";
import "./CharUserCard.css"

class ChatUSerCard extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
    return(
        <div className="btn-outline-light chat_list border-dark">
            <div className="chat_people row">
                <div className="col-md-2 col-1"> 
                    <img src="saharofe.png" className="imgChat img-fluid"></img>
                </div>
                <div className="chat_ib col-md-10">
                    <h5>sahar <span className="chat_date"> 2 </span></h5>
                    <p>hi, how are you?</p>
                </div>
            </div>
        </div>
    );
    }
}

export default ChatUSerCard;

//{nickName, image, date}