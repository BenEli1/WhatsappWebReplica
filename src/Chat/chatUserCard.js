
import React from "react";
import "./CharUserCard.css"
import dataBaseMessages from "./dataBaseMessages.json"

function ChatUSerCard({img, nickName, chooseContact, lastMessage}){

    const changeContact = function(){
        chooseContact(nickName)
    }

    return(
        <div onClick={changeContact} className="btn-outline-light chat_list border-dark">
            <div className="chat_people row">
                <div className="col-md-2 col-1"> 
                    <img src={img} className="imgChat rounded-circle img-fluid"></img>
                </div>
                <div className="chat_ib col-md-10">
                    <h5>{nickName}<span className="chat_date"> </span></h5>
                    <p>{lastMessage.substring(0,50)}</p>
                </div>
            </div>
        </div>
    );    
}

export default ChatUSerCard;
