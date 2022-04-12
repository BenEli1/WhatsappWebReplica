import ChatUSerCard from "./chatUserCard";
import dataBase from "../Users/dataBaseObject";
import dataBaseMessages from "../Users/dataBaseMessages";
function Chatusers({cards}){
    const cardsList = cards.map((person,key) =>
    {return <ChatUSerCard {...person} key={key} />}
    );

    return(
        <div>
            {cardsList}
        </div>
    );
}

export default Chatusers;