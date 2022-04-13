import MessageCardAccepted from "./MessageCardAccepted";
import MessageCardSent from "./MessageCardSent";

function MessageBox({user, contact, cardsList}){

    function findIndexContact(){
        for(let x in cardsList){
            if(cardsList[x].nickName === contact){
                return x;
            }
        }
    }
    
    function rend(){
        if(contact === "")
            return contact;
        else{
            return messages;
        }
    }

    const messages = (cardsList.at(findIndexContact())["messages"]).map((message,key)=>
    {
        if(message.inout == "in"){
            return <MessageCardAccepted {...message} key={key} />
        }
        else{
            return <MessageCardSent {...message} key={key} />
        }
    });

    return(
        <div>
        {rend()}
        </div>
    );
}

export default MessageBox;

