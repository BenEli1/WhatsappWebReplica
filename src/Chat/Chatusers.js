import ChatUSerCard from "./chatUserCard";
import dataBase from "../Users/dataBaseObject";
import dataBaseMessages from "../Users/dataBaseMessages";
function Chatusers({cards}){

    const cardUserItam = dataBaseMessages.map((nickName, image)=>
    {return <ChatUSerCard image={image} nickName={nickName} date="hh" />}
    ) ;

    return(
        <div id="chatUserList">
            {cards}
        </div>
    );
}

export default Chatusers;