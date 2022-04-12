import ChatUSerCard from "./chatUserCard";
import dataBase from "../Users/dataBaseObject";

function Chatusers({cardsList}){
    
    const userList = cardsList.map((person,key) =>
    {return <ChatUSerCard {...person} key={key} />}
    );

    return(
        <div>
            {userList}
        </div>
    );
}

export default Chatusers;