import ChatUSerCard from "./chatUserCard";
import dataBase from "../Users/dataBaseObject";
function Chatusers({cards}){

    const cardUserItam = dataBase.map((nickName, image)=>
    {return <ChatUSerCard image={image} nickName={nickName} date="hh" />}
    ) ;

    return(
        <div id="chatUserList">
            {cards}
        </div>
    );
}

export default Chatusers;