
import React from "react";
import "./CharUserCard.css"

function ChatUSerCard({id, chooseContact, last, lastdate,name,server}){

    const changeContact = function(){
        chooseContact(id)
    }

    return(
        <div onClick={changeContact} className="btn-outline-light chat_list border-dark">
            <div className="chat_people row">
                <div className="col-md-2 col-1"> 
                    <img src={"thor.jpg"} className="imgChat rounded-circle img-fluid"></img>
                </div>
                
                <div className="chat_ib col-md-10">
                    <h5>{name}<span className="chat_date">{lastdate}</span></h5>
                    <p>{last.substring(0,50)}</p>
                </div>
            </div>
        </div>
    );    
}

export default ChatUSerCard;
