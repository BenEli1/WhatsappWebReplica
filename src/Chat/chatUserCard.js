
import React from "react";
import "./CharUserCard.css"
import dataBaseMessages from "./dataBaseMessages.json"

function ChatUSerCard({id, chooseContact, last, lastdate}){

    const changeContact = function(){
        chooseContact(id)
    }

    return(
        <div onClick={changeContact} className="btn-outline-light chat_list border-dark">
            <div className="chat_people row">
                <div className="col-md-2 col-1"> 
                    <img src={""} className="imgChat rounded-circle img-fluid"></img>
                </div>
                
                <div className="chat_ib col-md-10">
                    <h5>{id}<span className="chat_date">{lastdate}</span></h5>
                    <p>{last.substring(0,50)}</p>
                </div>
            </div>
        </div>
    );    
}

export default ChatUSerCard;
