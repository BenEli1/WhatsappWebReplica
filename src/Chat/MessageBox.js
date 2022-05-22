import MessageCard from "./MessageCard";
import {useEffect} from "react"

 function MessageBox({user, mes ,contact, cardsList}){
      
    function rend() {
        if (contact === '' || cardsList.length == 0 || mes == null)
            return  '';
        else {
            return mes.map((message, key) => {
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

