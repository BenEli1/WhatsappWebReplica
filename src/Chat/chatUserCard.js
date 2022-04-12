import React from "react";
import "./CharUserCard.css"

class ChatUSerCard extends React.Component{
    render({nickName, image, date}){
    return(
        <div className="btn-outline-light chat_list border-dark">
            <div className="chat_people row">
                <div className="col-md-2 col-1"> 
                    <img src={image} className="imgChat img-fluid"></img>
                </div>
                <div className="chat_ib col-md-10">
                    <h5>{nickName}<span className="chat_date">{date}</span></h5>
                    <p>hi, how are you?</p>
                </div>
            </div>
        </div>
    );
    }
}

export default ChatUSerCard;