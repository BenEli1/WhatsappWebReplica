import MessageCard from "./MessageCard";

function MessageBox({user, contact, cardsList}){

    function findIndexContact(){
        for(let x in cardsList){
            if(cardsList[x].nickName === contact){
                return x;
            }
        }
    }
    
    function rend(){
        if(contact === '' || cardsList.length == 0)
            return '';
        else{
            return (cardsList.at(findIndexContact())["messages"]).map((message,key)=>
            {
                    return <MessageCard {...message} key={key} />
            });
        }
    }

    return(
        <div id="massageBox">
        {rend()}
        </div>
    );
}

export default MessageBox;

